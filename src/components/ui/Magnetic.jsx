import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/** Bọc phần tử để tạo hiệu ứng "hút nam châm" theo con trỏ */
export default function Magnetic({ children, strength = 0.35, className = '', as = 'div', ...rest }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 15, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 15, mass: 0.4 });

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Comp = motion[as] ?? motion.div;
  return (
    <Comp
      ref={ref}
      className={`magnetic ${className}`}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...rest}
    >
      {children}
    </Comp>
  );
}

