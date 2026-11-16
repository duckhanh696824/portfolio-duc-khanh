import { useEffect, useState } from 'react';
import { motion, animate } from 'framer-motion';
import { profile } from '../data.js';

const ease = [0.76, 0, 0.24, 1];
const words = ['Design', 'Code', 'Deploy', profile.name];

export default function Preloader({ onDone }) {
  const [count, setCount] = useState(0);
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 2.2,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setCount(Math.round(v)),
      onComplete: () => setTimeout(onDone, 250),
    });
    const fallback = setTimeout(onDone, 2600);
    const iv = setInterval(() => setWordIdx((i) => Math.min(i + 1, words.length - 1)), 520);
    return () => {
      controls.stop();
      clearTimeout(fallback);
      clearInterval(iv);
    };
  }, [onDone]);

  return (
    <motion.div
      className="preloader"
      initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      exit={{ clipPath: 'inset(0% 0% 100% 0%)', transition: { duration: 1.1, ease } }}
    >
      <motion.div className="preloader__glow" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity }} />
      <div className="preloader__center">
        <motion.span
          key={wordIdx}
          className={`preloader__word ${wordIdx === words.length - 1 ? 'gradient-text' : ''}`}
          initial={{ y: 30, opacity: 0, filter: 'blur(6px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {words[wordIdx]}
        </motion.span>
      </div>

      <div className="preloader__bottom">
        <span className="mono preloader__label">Đang tải portfolio</span>
        <span className="preloader__count">
          {String(count).padStart(3, '0')}
          <small>%</small>
        </span>
      </div>
      <motion.div className="preloader__bar" style={{ scaleX: count / 100 }} />
    </motion.div>
  );
}

