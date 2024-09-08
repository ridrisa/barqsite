import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Intro from './components/Intro';
import Feature from './components/Feature';
import Technology from './components/Technology';
import Map from './components/Map';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Testimonials from './components/Testimonials';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    gsap.utils.toArray('.fade-in, .slide-in, .scale-in, .rotate-in').forEach((elem) => {
      gsap.from(elem, {
        opacity: 0,
        y: 50,
        scale: 0.9,
        rotation: -5,
        duration: 1,
        scrollTrigger: {
          trigger: elem,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
        <Navbar isScrolled={isScrolled} toggleDarkMode={toggleDarkMode} />
        <Hero />
        <Stats />
        <Intro />
        <Feature />
        <Technology />
        <Map />
        <Pricing />
        <Testimonials />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;