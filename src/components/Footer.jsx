import { useEffect, useState } from 'react';
import { profile } from '../data.js';
import { scrollToTarget } from '../lib/lenis.js';

function Clock() {
  const [t, setT] = useState('');
  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat('vi-VN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Ho_Chi_Minh',
      }).format(new Date());
    setT(fmt());
    const iv = setInterval(() => setT(fmt()), 1000);
    return () => clearInterval(iv);
  }, []);
  return <span>{t} · GMT+7</span>;
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          © {new Date().getFullYear()} {profile.name}. Thiết kế & phát triển với ♥
        </span>
        <span className="mono footer__clock">
          <span className="status-dot" /> TP.HCM — <Clock />
        </span>
        <button className="footer__top mono" onClick={() => scrollToTarget(0)}>
          Lên đầu trang ↑
        </button>
      </div>
      <div className="footer__big" aria-hidden="true">
        {profile.shortName.toUpperCase()}
        <span className="gradient-text">.</span>
      </div>
    </footer>
  );
}

