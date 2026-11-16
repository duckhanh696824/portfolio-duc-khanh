import { motion } from 'framer-motion';
import { skills } from '../data.js';
import { SectionHeading } from './ui/Reveal.jsx';

const icons = {
  frontend: (
    <path d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 4h18M7 6h.01M10 6h.01M9 14l-2 2 2 2m6-4l2 2-2 2" />
  ),
  backend: <path d="M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zm0 0v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />,
  database: <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zm0 0v18M4 7.5l8 4.5 8-4.5" />,
  mobile: <path d="M8 2h8a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2zm3 17h2" />,
  tools: <path d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 005.4-5.4l-2.5 2.5-2.4-.6-.6-2.4 2.5-2.5z" />,
  ai: <path d="M12 2l2.2 5.8L20 10l-5.8 2.2L12 18l-2.2-5.8L4 10l5.8-2.2L12 2zm7 13l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1 1-2.5z" />,
};

function SkillCard({ s, i }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };
  return (
    <motion.article
      className={`skill skill--${s.size}`}
      onMouseMove={onMove}
      initial={{ opacity: 0, y: 50, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 0.9, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="skill__spot" />
      <div className="skill__head">
        <span className="skill__icon">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            {icons[s.key]}
          </svg>
        </span>
        <span className="mono skill__count">{String(s.items.length).padStart(2, '0')}</span>
      </div>
      <h3 className="skill__title">{s.title}</h3>
      <p className="skill__desc">{s.desc}</p>
      <ul className="skill__chips">
        {s.items.map((it, k) => (
          <motion.li
            key={it}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + k * 0.04, duration: 0.5 }}
          >
            {it}
          </motion.li>
        ))}
      </ul>
    </motion.article>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionHeading
          index="02"
          kicker="Kỹ năng"
          title="Bộ công cụ"
          accent="của tôi"
          desc="Những công nghệ tôi sử dụng hằng ngày để biến ý tưởng thành sản phẩm chạy thật trong môi trường bệnh viện."
        />
        <div className="bento">
          {skills.map((s, i) => (
            <SkillCard key={s.key} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

