import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import { useLenis, scrollToTarget, stopScroll, startScroll } from './lib/lenis.js';
import Preloader from './components/Preloader.jsx';
import Cursor from './components/Cursor.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import LangOverlay from './components/LangOverlay.jsx';

export default function App() {
  const [loading, setLoading] = useState(true);
  const handleDone = useCallback(() => setLoading(false), []);
  useLenis();

  useEffect(() => {
    document.documentElement.classList.toggle('is-loading', loading);
    if (loading) {
      if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);
      stopScroll();
      return;
    }
    startScroll();
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      setTimeout(() => scrollToTarget(`#${id}`, { immediate: false }), 400);
    }
  }, [loading]);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" onDone={handleDone} />}
      </AnimatePresence>
      <LangOverlay />

      <Cursor />
      <div className="noise" aria-hidden="true" />
      <Navbar ready={!loading} />

      <main>
        <Hero ready={!loading} />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
