import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { profile } from '../data.js';
import { scrollToTarget } from '../lib/lenis.js';
import ParticleField from './ParticleField.jsx';
import Magnetic from './ui/Magnetic.jsx';

const ease = [0.22, 1, 0.36, 1];

function Letters({ text, start, ready, className = '' }) {
  return (
    <span className={`hero__line ${className}`} aria-label={text}>
      {Array.from(text).map((ch, i) => (
        <span className="hero__mask" key={i} aria-hidden="true">
          <motion.span
            className="hero__char"
            initial={{ y: '115%', rotateX: -80, opacity: 0 }}
            animate={ready ? { y: '0%', rotateX: 0, opacity: 1 } : {}}
            transition={{ duration: 1.1, ease, delay: start + i * 0.035 }}
          >
            {ch === ' ' ? '\u00A0' : ch}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => setI((v) => (v + 1) % profile.rotatingRoles.length), 2600);
    return () => clearInterval(iv);
  }, []);
  return (
    <span className="hero__role">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ y: 22, opacity: 0, filter: 'blur(6px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -22, opacity: 0, filter: 'blur(6px)' }}
          transition={{ duration: 0.5, ease }}
        >
          {profile.rotatingRoles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const code = [
  [['k', 'const '], ['v', 'khanh'], ['p', ' = {']],
  [['p', '  '], ['a', 'role'], ['p', ': '], ['s', `"${profile.role}"`], ['p', ',']],
  [['p', '  '], ['a', 'company'], ['p', ': '], ['s', '"Healthcare Solution VN"'], ['p', ',']],
  [['p', '  '], ['a', 'stack'], ['p', ': ['], ['s', '"React"'], ['p', ', '], ['s', '".NET"'], ['p', ', '], ['s', '"Node"'], ['p', '],']],
  [['p', '  '], ['a', 'focus'], ['p', ': '], ['s', '"Hospital systems"'], ['p', ',']],
  [['p', '  '], ['a', 'available'], ['p', ': '], ['k', 'true'], ['p', ',']],
  [['p', '  '], ['a', 'coffee'], ['p', ': '], ['n', 'Infinity'], ['p', ',']],
  [['p', '};']],
];

function CodeCard({ ready }) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 150, damping: 18 });
  const glareX = useTransform(mx, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(my, [-0.5, 0.5], ['0%', '100%']);

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      className="hero__visual"
      initial={{ opacity: 0, y: 60, scale: 0.92 }}
      animate={ready ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 1.3, ease, delay: 0.9 }}
    >
      <motion.div
        ref={ref}
        className="code-card"
        style={{ rotateX: rx, rotateY: ry }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        data-cursor="link"
      >
        <motion.div
          className="code-card__glare"
          style={{ background: useTransform([glareX, glareY], ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,.12), transparent 50%)`) }}
        />
        <div className="code-card__bar">
          <span />
          <span />
          <span />
          <em className="mono">profile.js</em>
        </div>
        <pre className="code-card__body mono">
          {code.map((line, li) => (
            <motion.div
              key={li}
              className="code-line"
              initial={{ opacity: 0, x: -14 }}
              animate={ready ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.4 + li * 0.12, duration: 0.5, ease }}
            >
              <span className="code-line__n">{li + 1}</span>
              {line.map(([t, v], ti) => (
                <span key={ti} className={`tk-${t}`}>
                  {v}
                </span>
              ))}
            </motion.div>
          ))}
          <motion.span
            className="code-caret"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </pre>

        <motion.div className="float-chip float-chip--a" animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
          <span className="float-chip__icon">⚛</span> React
        </motion.div>
        <motion.div className="float-chip float-chip--b" animate={{ y: [0, 14, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
          <span className="float-chip__icon">#</span> .NET
        </motion.div>
        <motion.div className="float-chip float-chip--c" animate={{ y: [0, -10, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}>
          <span className="float-chip__icon">⬢</span> Node.js
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero({ ready }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  const [first, ...rest] = profile.name.split(' ').reverse();
  const lastLine = first; // Tên
  const firstLine = rest.reverse().join(' '); // Họ + đệm

  return (
    <section id="top" ref={ref} className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="aurora aurora--1" />
        <div className="aurora aurora--2" />
        <div className="aurora aurora--3" />
        <div className="grid-lines" />
        <ParticleField />
      </div>

      <motion.div className="container hero__inner" style={{ y, opacity, scale }}>
        <div className="hero__content">
          <motion.div
            className="badge"
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
          >
            <span className="status-dot" />
            <span>
              {profile.role} @ <b>{profile.company}</b>
            </span>
          </motion.div>

          <motion.p
            className="hero__hello mono"
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="gradient-text">{'//'}</span> Xin chào, tôi là
          </motion.p>

          <h1 className="hero__title">
            <Letters text={firstLine} start={0.35} ready={ready} />
            <Letters text={lastLine} start={0.65} ready={ready} className="hero__line--accent" />
          </h1>

          <motion.div
            className="hero__sub"
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease, delay: 1.05 }}
          >
            <span className="hero__arrow">→</span>
            <RotatingRole />
          </motion.div>

          <motion.p
            className="hero__intro"
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease, delay: 1.2 }}
          >
            {profile.intro}
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease, delay: 1.35 }}
          >
            <Magnetic>
              <a
                href="#work"
                className="btn btn--primary"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTarget('#work');
                }}
              >
                Xem dự án
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M7 17L17 7M17 7H8M17 7v9" />
                </svg>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="btn btn--ghost"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTarget('#contact');
                }}
              >
                Liên hệ với tôi
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <CodeCard ready={ready} />
      </motion.div>

      <motion.button
        className="scroll-cue"
        onClick={() => scrollToTarget('#about')}
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 1.8 }}
        aria-label="Cuộn xuống"
      >
        <span className="scroll-cue__mouse">
          <motion.span animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }} transition={{ duration: 1.8, repeat: Infinity }} />
        </span>
        <span className="mono">Cuộn xuống</span>
      </motion.button>
    </section>
  );
}

