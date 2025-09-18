# syntax=docker/dockerfile:1

############################
# 1) Build stage (Vite)
############################
FROM node:20-alpine AS build
WORKDIR /app

# Copia manifiestos primero para aprovechar la caché
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# Instala dependencias (usa lock si existe)
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

# Limpia conf por defecto y agrega la nuestra
RUN rm /etc/nginx/conf.d/default.conf
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Copia artefactos estáticos
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --retries=3 CMD wget -qO- http://localhost/ || exit 1
