import { useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { profile } from '../data.js';
import { Reveal, SplitWords } from './ui/Reveal.jsx';
import Magnetic from './ui/Magnetic.jsx';

const Icon = {
  github: (
    <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.8 9.6.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 2.9.9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.4 9.4 0 015 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10.1 10.1 0 0022 12.2C22 6.6 17.5 2 12 2z" />
  ),
  mail: <path d="M3 6.5A1.5 1.5 0 014.5 5h15A1.5 1.5 0 0121 6.5v11a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 17.5v-11zm0 .5l9 6 9-6" />,
  linkedin: <path d="M4 3a2 2 0 110 4 2 2 0 010-4zm-2 6h4v12H2V9zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21H9V9z" />,
  facebook: <path d="M14 8h3V4h-3c-2.8 0-4 1.7-4 4.3V10H7v4h3v8h4v-8h3l1-4h-4V8.6c0-.4.3-.6.6-.6z" />,
};

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const orbScale = useTransform(scrollYProgress, [0, 1], [0.6, 1.1]);
  const orbY = useTransform(scrollYProgress, [0, 1], [200, 0]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const socials = [
    { key: 'github', href: profile.github, label: 'GitHub' },
    { key: 'mail', href: `mailto:${profile.email}`, label: 'Email' },
    { key: 'linkedin', href: profile.linkedin, label: 'LinkedIn' },
    { key: 'facebook', href: profile.facebook, label: 'Facebook' },
  ].filter((s) => s.href);

  return (
    <section id="contact" ref={ref} className="section contact">
      <motion.div className="contact__orb" style={{ scale: orbScale, y: orbY }} aria-hidden="true" />
      <div className="container contact__inner">
        <Reveal className="section-heading__kicker contact__kicker">
          <span className="mono">05</span>
          <span className="section-heading__line" />
          <span>Liên hệ</span>
        </Reveal>

        <h2 className="contact__title">
          <SplitWords text="Cùng nhau tạo nên" />
          <br />
          <SplitWords text="điều tuyệt vời." className="gradient-text" delay={0.2} />
        </h2>

        <Reveal delay={0.2} className="contact__desc">
          Bạn có ý tưởng, dự án hay cơ hội hợp tác? Hộp thư của tôi luôn mở — tôi sẽ phản hồi sớm nhất có thể.
        </Reveal>

        <Reveal delay={0.3} className="contact__mail-wrap">
          <Magnetic strength={0.2}>
            <a href={`mailto:${profile.email}`} className="contact__mail" data-cursor="view" data-cursor-label="Gửi mail">
              {profile.email}
              <span className="contact__mail-line" />
            </a>
          </Magnetic>
          <button className="btn btn--ghost btn--sm contact__copy" onClick={copy}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={copied ? 'ok' : 'copy'}
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {copied ? '✓ Đã sao chép' : 'Sao chép email'}
              </motion.span>
            </AnimatePresence>
          </button>
        </Reveal>

        <Reveal delay={0.4} className="socials">
          {socials.map((s) => (
            <Magnetic key={s.key} strength={0.4}>
              <a href={s.href} target={s.key === 'mail' ? undefined : '_blank'} rel="noreferrer" className="social" aria-label={s.label}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill={s.key === 'mail' ? 'none' : 'currentColor'} stroke={s.key === 'mail' ? 'currentColor' : 'none'} strokeWidth="1.7">
                  {Icon[s.key]}
                </svg>
                <span>{s.label}</span>
              </a>
            </Magnetic>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

