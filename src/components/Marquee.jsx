import { motion, useScroll, useTransform, useVelocity, useSpring, useMotionValue, useAnimationFrame } from 'framer-motion';
import { useRef } from 'react';
import { useLang } from '../i18n/LangContext.jsx';

const wrap = (min, max, v) => {
  const r = max - min;
  return ((((v - min) % r) + r) % r) + min;
};

/** Dải chữ chạy vô tận, tăng tốc theo vận tốc cuộn */
function Row({ items, baseVelocity = -2, outline = false }) {
  const base = useMotionValue(0);
  const { scrollY } = useScroll();
  const vel = useVelocity(scrollY);
  const smooth = useSpring(vel, { damping: 50, stiffness: 400 });
  const factor = useTransform(smooth, [-1000, 0, 1000], [-4, 0, 4], { clamp: false });
  const x = useTransform(base, (v) => `${wrap(-50, 0, v)}%`);
  const dir = useRef(1);

  useAnimationFrame((_, delta) => {
    let move = dir.current * baseVelocity * (delta / 1000);
    const f = factor.get();
    if (f < 0) dir.current = -1;
    else if (f > 0) dir.current = 1;
    move += dir.current * move * f;
    base.set(base.get() + move);
  });

  const list = [...items, ...items];
  return (
    <div className="marquee__row">
      <motion.div className={`marquee__track ${outline ? 'marquee__track--outline' : ''}`} style={{ x }}>
        {list.map((t, i) => (
          <span key={i} className="marquee__item">
            {t}
            <span className="marquee__sep">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Marquee() {
  const { marquee, t } = useLang();
  const half = Math.ceil(marquee.length / 2);
  return (
    <section className="marquee" aria-label={t.tech}>
      <Row items={marquee.slice(0, half)} baseVelocity={-2.2} />
      <Row items={marquee.slice(half)} baseVelocity={2.2} outline />
    </section>
  );
}

