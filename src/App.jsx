import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from './components/Skills';
import Projects from "./components/Projects";
import Contact from './components/Contact';
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <div className="font-sans text-zinc-900 dark:text-white dark:bg-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
    </>
  );
}

export default App
