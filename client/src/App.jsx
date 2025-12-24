import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import ScrollProgress from './components/ScrollProgress';
import ParticleBackground from './components/ParticleBackground';
import './index.css';

import TechMarquee from './components/TechMarquee';
import Services from './components/Services';
import LeetCodeStats from './components/LeetCodeStats';

function App() {

  // Scroll Reveal Observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="App" style={{ position: 'relative', overflow: 'hidden' }}>
      <ParticleBackground />
      <ScrollProgress />
      <Cursor />
      <Navbar />
      <Hero />
      <TechMarquee />
      <About />
      <Services />
      <Education />
      <Certifications />
      <Projects />
      <LeetCodeStats />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
