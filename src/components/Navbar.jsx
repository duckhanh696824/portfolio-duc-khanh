import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion';
import { navLinks, profile } from '../data.js';
import { scrollToTarget } from '../lib/lenis.js';
import Magnetic from './ui/Magnetic.jsx';

const ease = [0.22, 1, 0.36, 1];

export default function Navbar({ ready }) {
  const [active, setActive] = useState('');
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    setHidden(y > prev && y > 300 && !open);
  });

  // Theo dõi section đang hiển thị
  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const go = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    scrollToTarget(id === 'top' ? 0 : `#${id}`);
    history.replaceState(null, '', id === 'top' ? ' ' : `#${id}`);
  };

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <motion.header
        className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={ready ? { y: hidden ? -110 : 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 0.7, ease, delay: ready && !scrolled ? 0.9 : 0 }}
      >
        <a href="#top" className="nav__logo" onClick={go('top')} aria-label="Về đầu trang">
          <span className="nav__logo-mark">{profile.initials}</span>
          <span className="nav__logo-text">
            {profile.shortName}
            <span className="gradient-text">.</span>
          </span>
        </a>

        <nav className="nav__links" aria-label="Điều hướng chính">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={go(l.id)} className={active === l.id ? 'is-active' : ''}>
              {active === l.id && (
                <motion.span layoutId="nav-pill" className="nav__pill" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
              )}
              <span className="nav__label">{l.label}</span>
            </a>
          ))}
        </nav>

        <div className="nav__right">
          <Magnetic strength={0.25}>
            <a href="#contact" onClick={go('contact')} className="btn btn--sm btn--primary nav__cta">
              <span className="status-dot" /> Sẵn sàng hợp tác
            </a>
          </Magnetic>
          <button className={`nav__burger ${open ? 'is-open' : ''}`} onClick={() => setOpen((o) => !o)} aria-label="Mở menu">
            <span />
            <span />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ clipPath: 'circle(0% at calc(100% - 44px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 44px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 44px) 40px)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav>
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={go(l.id)}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 30, opacity: 0 }}
                  transition={{ delay: 0.25 + i * 0.07, duration: 0.6, ease }}
                >
                  <span className="mono">0{i + 1}</span>
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <motion.a
              className="mobile-menu__mail mono"
              href={`mailto:${profile.email}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.7 } }}
              exit={{ opacity: 0 }}
            >
              {profile.email}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

