// src/components/ThankYou.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ThankYou() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirige a la página de inicio después de 5 segundos
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white px-4">
      <h1 className="text-4xl font-bold mb-4 text-green-500">Thank You!</h1>
      <p className="text-lg">Your message has been sent successfully.</p>
      <p className="mt-2 text-sm text-zinc-500">Redirecting to homepage in 5 seconds...</p>
    </section>
  );
}
