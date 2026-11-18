import { motion } from 'framer-motion';

export const ease = [0.22, 1, 0.36, 1];

/** Hiện phần tử khi cuộn tới */
export function Reveal({ children, delay = 0, y = 40, className = '', as = 'div', once = true, ...rest }) {
  const Comp = motion[as] ?? motion.div;
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once, margin: '-10% 0px -10% 0px' }}
      transition={{ duration: 0.9, delay, ease }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

/** Tách chữ theo từ, mỗi từ trượt lên từ dưới mặt nạ */
export function SplitWords({ text, className = '', delay = 0, stagger = 0.06, animate, inView = true }) {
  const words = text.split(' ');
  const props = inView
    ? { initial: 'hidden', whileInView: 'show', viewport: { once: true, margin: '-10%' } }
    : { initial: 'hidden', animate: animate ? 'show' : 'hidden' };
  return (
    <motion.span key={text} className={`split ${className}`} {...props} transition={{ staggerChildren: stagger, delayChildren: delay }}>
      {words.map((w, i) => (
        <span className="split__mask" key={i}>
          <motion.span
            className="split__word"
            variants={{
              hidden: { y: '110%', rotate: 4 },
              show: { y: '0%', rotate: 0, transition: { duration: 1, ease } },
            }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </motion.span>
  );
}

export function SectionHeading({ index, kicker, title, accent, desc }) {
  return (
    <div className="section-heading">
      <Reveal className="section-heading__kicker">
        <span className="mono">{index}</span>
        <span className="section-heading__line" />
        <span>{kicker}</span>
      </Reveal>
      <h2 className="section-heading__title">
        <SplitWords text={title} />{' '}
        {accent && <SplitWords text={accent} className="gradient-text" delay={0.15} />}
      </h2>
      {desc && (
        <Reveal delay={0.2} className="section-heading__desc">
          {desc}
        </Reveal>
      )}
    </div>
  );
}

