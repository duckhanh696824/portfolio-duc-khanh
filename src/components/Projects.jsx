import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { useLang } from '../i18n/LangContext.jsx';
import { startScroll, stopScroll } from '../lib/lenis.js';
import ProjectVisual from './ProjectVisual.jsx';
import { SectionHeading } from './ui/Reveal.jsx';
import Magnetic from './ui/Magnetic.jsx';

const ease = [0.22, 1, 0.36, 1];

function useIsMobile(q = '(max-width: 900px)') {
  const [m, setM] = useState(() => typeof window !== 'undefined' && window.matchMedia(q).matches);
  useEffect(() => {
    const mq = window.matchMedia(q);
    const fn = () => setM(mq.matches);
    mq.addEventListener('change', fn);
    return () => mq.removeEventListener('change', fn);
  }, [q]);
  return m;
}

function ProjectCard({ p, i, total, progress, onOpen, mobile }) {
  const { t } = useLang();
  const ref = useRef(null);
  const targetScale = 1 - (total - i - 1) * 0.03;
  const scale = useTransform(progress, [i / total, 1], [1, targetScale]);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start start'] });
  const visualScale = useTransform(scrollYProgress, [0, 1], [1.18, 1]);
  const dim = useTransform(progress, [i / total, Math.min(1, (i + 1) / total)], [0, i === total - 1 ? 0 : 0.35]);

  return (
    <div ref={ref} className="pcard-wrap" id={`work-${p.id}`}>
      <motion.article
        className="pcard"
        style={{
          '--c': p.color,
          scale: mobile ? 1 : scale,
          top: mobile ? 0 : `calc(-3vh + ${i * 18}px)`,
        }}
      >
        <motion.div className="pcard__dim" style={{ opacity: mobile ? 0 : dim }} />
        <div className="pcard__glow" />
        <div className="pcard__info">
          <div className="pcard__top">
            <span className="pcard__index mono">
              {String(i + 1).padStart(2, '0')}
              <em>/{String(total).padStart(2, '0')}</em>
            </span>
            <span className="pcard__cat mono">{p.category}</span>
          </div>
          <h3 className="pcard__title">{p.title}</h3>
          <p className="pcard__subtitle">{p.subtitle}</p>
          <div className="pcard__meta mono">
            <span>◷ {p.period}</span>
            <span>◆ {p.role}</span>
            <span>◎ {p.team}</span>
          </div>
          <p className="pcard__summary">{p.summary}</p>
          {p.metrics && (
            <div className="pcard__metrics">
              {p.metrics.map((m) => (
                <div key={m.l}>
                  <strong>{m.v}</strong>
                  <small>{m.l}</small>
                </div>
              ))}
            </div>
          )}
          <ul className="pcard__tags">
            {p.stack.slice(0, 5).map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <div className="pcard__actions">
            <Magnetic strength={0.3}>
              <button className="btn btn--color" onClick={() => onOpen(p)}>
                {t.work.details}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </Magnetic>
          </div>
        </div>
        <div
          className="pcard__visual"
          onClick={() => onOpen(p)}
          data-cursor="view"
          data-cursor-label={t.work.cursor}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onOpen(p)}
        >
          <motion.div className="pcard__visual-inner" style={{ scale: visualScale }}>
            <ProjectVisual p={p} />
          </motion.div>
        </div>
      </motion.article>
    </div>
  );
}

function ProjectModal({ p, onClose }) {
  const { t } = useLang();
  useEffect(() => {
    stopScroll();
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      startScroll();
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <motion.div className="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { delay: 0.2 } }} onClick={onClose}>
      <motion.div
        className="modal__panel"
        style={{ '--c': p.color }}
        initial={{ y: '100%', opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '100%', opacity: 0.5 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
        role="dialog"
        aria-modal="true"
        aria-label={p.title}
      >
        <button className="modal__close" onClick={onClose} aria-label={t.work.close}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <div className="modal__visual">
          <ProjectVisual p={p} />
        </div>
        <div className="modal__content">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7, ease }}>
            <span className="pcard__cat mono">{p.category}</span>
            <h3 className="modal__title">{p.title}</h3>
            <p className="pcard__subtitle">{p.subtitle}</p>
            <p className="modal__summary">{p.summary}</p>
            {p.metrics && (
              <div className="pcard__metrics modal__metrics">
                {p.metrics.map((m) => (
                  <div key={m.l}>
                    <strong>{m.v}</strong>
                    <small>{m.l}</small>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          <div className="modal__cols">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7, ease }}>
              <h4 className="mono">{t.work.highlights}</h4>
              <ul className="modal__list">
                {p.highlights.map((h, k) => (
                  <motion.li key={k} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + k * 0.06 }}>
                    {h}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7, ease }}>
              <h4 className="mono">{t.work.role}</h4>
              <p className="modal__role">{p.role}</p>
              <h4 className="mono">{t.work.period}</h4>
              <p className="modal__info">{p.period}</p>
              <h4 className="mono">{t.work.team}</h4>
              <p className="modal__info">{p.team}</p>
              <h4 className="mono">{t.work.stack}</h4>
              <ul className="pcard__tags">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const { projects, t } = useLang();
  const container = useRef(null);
  const mobile = useIsMobile();
  const [open, setOpen] = useState(null);
  const openProject = projects.find((p) => p.id === open);
  const closeModal = useCallback(() => setOpen(null), []);
  const { scrollYProgress } = useScroll({ target: container, offset: ['start start', 'end end'] });

  return (
    <section id="work" className="section projects">
      <div className="container">
        <SectionHeading
          index="03"
          kicker={t.work.kicker}
          title={t.work.title}
          accent={t.work.accent}
          desc={t.work.desc}
        />
      </div>
      <div ref={container} className="container projects__stack">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} p={p} i={i} total={projects.length} progress={scrollYProgress} onOpen={(proj) => setOpen(proj.id)} mobile={mobile} />
        ))}
      </div>

      <AnimatePresence>{openProject && <ProjectModal key={openProject.id} p={openProject} onClose={closeModal} />}</AnimatePresence>
    </section>
  );
}

