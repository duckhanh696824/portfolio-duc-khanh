import { useEffect, useState } from 'react';
import { useLang } from '../i18n/LangContext.jsx';
import { scrollToTarget } from '../lib/lenis.js';

function Clock() {
  const { lang } = useLang();
  const [t, setT] = useState('');
  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat(lang === 'vi' ? 'vi-VN' : 'en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Ho_Chi_Minh',
      }).format(new Date());
    setT(fmt());
    const iv = setInterval(() => setT(fmt()), 1000);
    return () => clearInterval(iv);
  }, [lang]);
  return <span>{t} · GMT+7</span>;
}

export default function Footer() {
  const { profile, t } = useLang();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          © {new Date().getFullYear()} {profile.name}. {t.footer.made}
        </span>
        <span className="mono footer__clock">
          <span className="status-dot" /> {t.footer.city} — <Clock />
        </span>
        <button className="footer__top mono" onClick={() => scrollToTarget(0)}>
          {t.footer.top}
        </button>
      </div>
      <div className="footer__big" aria-hidden="true">
        {profile.shortName.toUpperCase()}
        <span className="gradient-text">.</span>
      </div>
    </footer>
  );
}

