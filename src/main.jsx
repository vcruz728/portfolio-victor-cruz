//import { StrictMode } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import ThankYou from './components/ThankYou.jsx';

AOS.init();

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  </BrowserRouter>
)
