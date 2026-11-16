import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/** Con trỏ tuỳ chỉnh: chấm nhỏ + vòng tròn đuổi theo, phóng to khi hover phần tử tương tác */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState('default');
  const [label, setLabel] = useState('');
  const [hidden, setHidden] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 380, damping: 32, mass: 0.6 });
  const ry = useSpring(y, { stiffness: 380, damping: 32, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!fine) return undefined;
    setEnabled(true);
    document.documentElement.classList.add('has-cursor');

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target.closest?.('[data-cursor], a, button, input, textarea');
      if (t) {
        const v = t.getAttribute('data-cursor') || 'link';
        setVariant(v);
        setLabel(t.getAttribute('data-cursor-label') || '');
      } else {
        setVariant('default');
        setLabel('');
      }
    };
    const leave = () => setHidden(true);
    const enter = () => setHidden(false);
    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseleave', leave);
    document.addEventListener('mouseenter', enter);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
      document.removeEventListener('mouseenter', enter);
      document.documentElement.classList.remove('has-cursor');
    };
  }, [x, y]);

  if (!enabled) return null;

  const size = variant === 'view' ? 92 : variant === 'link' ? 56 : 34;

  return (
    <>
      <motion.div className="cursor-dot" style={{ x, y, opacity: hidden ? 0 : 1 }} />
      <motion.div
        className={`cursor-ring cursor-ring--${variant}`}
        style={{ x: rx, y: ry, opacity: hidden ? 0 : 1 }}
        animate={{ width: size, height: size }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        {variant === 'view' && (
          <motion.span initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}>
            {label || 'Xem'}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}

