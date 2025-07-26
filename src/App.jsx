import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import './App.css';
import  Header  from './components/Header';
import { Cursor } from './components/Cursor';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState('home');

  // Track which section is currently in view
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const sections = ['home', 'about', 'projects', 'contact'];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    }
  });

  return (
    <>
      <div className='bg-black min-h-screen'>
        {/* Pass activeSection to Header */}
        <Header activeSection={activeSection} />
        
        <main className="pt-16 md:pt-20">
          <Cursor/>
          <Home id="home" />
          <About id="about" />
          <Projects id="projects" />
          <Contact id="contact" />
        </main>
        
        <Footer />
      </div>

      {/* Progress bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className='fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50'
      />
    </>
  );
}