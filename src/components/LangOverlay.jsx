import { AnimatePresence, motion } from 'framer-motion';
import { useLang } from '../i18n/LangContext.jsx';
import { ui } from '../i18n/ui.js';

const ease = [0.76, 0, 0.24, 1];

/** Màn chuyển cảnh khi đổi ngôn ngữ — `switching` chứa mã ngôn ngữ đích */
export default function LangOverlay() {
  const { switching } = useLang();
  return (
    <AnimatePresence>
      {switching && (
        <motion.div
          className="lang-overlay"
          initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
          transition={{ duration: 0.55, ease }}
          aria-hidden="true"
        >
          <motion.div
            className="lang-overlay__inner"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <span className="lang-overlay__code gradient-text">{switching === 'en' ? 'EN' : 'VI'}</span>
            <span className="mono lang-overlay__label">{ui[switching].switching}</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
