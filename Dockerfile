# syntax=docker/dockerfile:1.6

############################
# 1) Build stage (Vite)
############################
FROM node:20-alpine AS build
WORKDIR /app

# Copia manifiestos primero para cache
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# Instala dependencias (usa lockfile si existe)
RUN if [ -f package-lock.json ]; then npm ci --no-audit --no-fund; \
    else npm i --no-audit --no-fund; fi

# Copia el resto y compila
COPY . .
ENV NODE_ENV=production
RUN npm run build

############################
# 2) Runtime (Nginx)
############################
FROM nginx:1.27-alpine

# Elimina la conf por defecto
RUN rm /etc/nginx/conf.d/default.conf

# Escribe nuestra conf (SPA + cache estática)
RUN <<'NGINXCONF' cat > /etc/nginx/conf.d/default.conf
server {
    listen 80;
    server_name _;

    root /usr/share/nginx/html;
    index index.html;

    # Archivos estáticos: cacheables e inmutables
    location ~* \.(?:js|mjs|css|svg|png|jpg|jpeg|gif|ico|webp|woff2?)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        try_files $uri =404;
        access_log off;
    }

    # Fallback para React Router
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Gzip básico
    gzip on;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml;
}
NGINXCONF

# Copia artefactos estáticos construidos por Vite
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --retries=3 CMD wget -qO- http://localhost/ || exit 1
