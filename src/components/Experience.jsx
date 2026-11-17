import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { experience } from '../data.js';
import { SectionHeading } from './ui/Reveal.jsx';

const ease = [0.22, 1, 0.36, 1];

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.7', 'end 0.6'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <SectionHeading index="04" kicker="Hành trình" title="Kinh nghiệm" accent="& học vấn" />
        <div ref={ref} className="timeline">
          <div className="timeline__track">
            <motion.div className="timeline__fill" style={{ scaleY }} />
          </div>
          {experience.map((e, i) => (
            <motion.div
              key={i}
              className="tl-item"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ duration: 1, ease }}
            >
              <motion.span
                className="tl-item__dot"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-20%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.2 }}
              />
              <span className="tl-item__period mono">{e.period}</span>
              <div className="tl-item__card">
                <h3>{e.title}</h3>
                <p className="tl-item__org">{e.org}</p>
                {Array.isArray(e.desc) ? (
                  <ul className="tl-item__list">
                    {e.desc.map((d, k) => (
                      <li key={k}>{d}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="tl-item__desc">{e.desc}</p>
                )}
                <ul className="pcard__tags">
                  {e.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

