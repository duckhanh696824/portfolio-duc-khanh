import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, useScroll, useTransform } from 'framer-motion';
import { profile, stats } from '../data.js';
import { Reveal, SectionHeading } from './ui/Reveal.jsx';

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  const y = useTransform(progress, range, [6, 0]);
  return (
    <span className="scrub__word">
      <motion.span style={{ opacity, y, display: 'inline-block' }}>{children}</motion.span>{' '}
    </span>
  );
}

/** Đoạn văn sáng dần theo tiến độ cuộn */
function ScrubText({ text }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] });
  const words = text.split(' ');
  return (
    <p ref={ref} className="scrub">
      {words.map((w, i) => {
        const start = i / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, start + 1 / words.length]}>
            {w}
          </Word>
        );
      })}
    </p>
  );
}

function Counter({ value, suffix, decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-15%' });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return undefined;
    const c = animate(0, value, { duration: 2, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(v) });
    return () => c.stop();
  }, [inView, value]);
  return (
    <span ref={ref} className="stat__value">
      {n.toFixed(decimals)}
      <span className="gradient-text">{suffix}</span>
    </span>
  );
}

function Portrait() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 8]);
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const imgY = useTransform(scrollYProgress, [0, 1], [28, 6]);
  return (
    <motion.div ref={ref} className="portrait" style={{ y }}>
      <motion.div className="portrait__ring" style={{ rotate }} />
      <div className="portrait__inner">
        <span className="portrait__initials gradient-text" aria-hidden="true">
          {profile.initials}
        </span>
        <motion.img
          className="portrait__img"
          src={profile.avatar}
          alt={`Ảnh chân dung ${profile.name}`}
          style={{ y: imgY }}
          loading="lazy"
          draggable="false"
        />
        <div className="portrait__meta mono">
          <span>{profile.location}</span>
          <span className="portrait__live">
            <span className="status-dot" /> Online
          </span>
        </div>
      </div>
      <motion.div
        className="portrait__tag"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 100 100">
          <defs>
            <path id="circlePath" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
          </defs>
          <text>
            <textPath href="#circlePath">FULL-STACK • TEAM LEAD • HEALTHCARE •</textPath>
          </text>
        </svg>
        <span className="portrait__tag-core">✦</span>
      </motion.div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionHeading index="01" kicker="Giới thiệu" title="Đôi điều" accent="về tôi" />
        <div className="about__grid">
          <Portrait />
          <div className="about__text">
            <ScrubText text={profile.about} />
            <div className="stats">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.08} className="stat">
                  <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
                  <span className="stat__label">{s.label}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

