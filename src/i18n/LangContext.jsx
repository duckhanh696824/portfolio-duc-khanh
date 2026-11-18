import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import * as vi from '../data.js';
import { experienceEn, navLinksEn, profileEn, projectsEn, skillsEn, statsEn } from '../data.en.js';
import { ui } from './ui.js';

const LANGS = ['vi', 'en'];
const STORAGE_KEY = 'portfolio-lang';

/** Ghép nội dung tiếng Anh lên dữ liệu gốc (tiếng Việt) */
function buildContent(lang) {
  if (lang === 'vi') {
    return {
      profile: vi.profile,
      stats: vi.stats,
      marquee: vi.marquee,
      skills: vi.skills,
      projects: vi.projects,
      experience: vi.experience,
      navLinks: vi.navLinks,
    };
  }
  return {
    profile: { ...vi.profile, ...profileEn, name: 'Nguyen Duc Khanh', shortName: 'Khanh' },
    stats: vi.stats.map((s, i) => ({ ...s, label: statsEn[i] ?? s.label })),
    marquee: vi.marquee,
    skills: vi.skills.map((s) => ({ ...s, ...(skillsEn[s.key] || {}) })),
    projects: vi.projects.map((p) => {
      const en = projectsEn[p.id] || {};
      return {
        ...p,
        ...en,
        metrics: p.metrics?.map((m, i) => ({ ...m, l: en.metrics?.[i] ?? m.l })),
      };
    }),
    experience: vi.experience.map((e, i) => ({ ...e, ...(experienceEn[i] || {}) })),
    navLinks: vi.navLinks.map((l) => ({ ...l, label: navLinksEn[l.id] ?? l.label })),
  };
}

function detectInitial() {
  if (typeof window === 'undefined') return 'vi';
  const param = new URLSearchParams(window.location.search).get('lang');
  if (LANGS.includes(param)) return param;
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (LANGS.includes(saved)) return saved;
  return (navigator.language || 'vi').toLowerCase().startsWith('vi') ? 'vi' : 'en';
}

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(detectInitial);
  const [switching, setSwitching] = useState(false);
  const timers = useRef([]);

  const content = useMemo(() => buildContent(lang), [lang]);
  const t = ui[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.htmlTitle;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.metaDesc);
    window.localStorage.setItem(STORAGE_KEY, lang);
    const url = new URL(window.location.href);
    if (url.searchParams.has('lang')) {
      url.searchParams.set('lang', lang);
      window.history.replaceState(null, '', url);
    }
  }, [lang, t]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  /** Đổi ngôn ngữ kèm hiệu ứng màn chuyển cảnh */
  const setLang = useCallback(
    (next) => {
      if (next === lang || switching) return;
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) {
        setLangState(next);
        return;
      }
      setSwitching(next);
      timers.current.push(
        setTimeout(() => setLangState(next), 550),
        setTimeout(() => setSwitching(false), 700)
      );
    },
    [lang, switching]
  );

  const toggle = useCallback(() => setLang(lang === 'vi' ? 'en' : 'vi'), [lang, setLang]);

  const value = useMemo(() => ({ lang, setLang, toggle, switching, t, ...content }), [lang, setLang, toggle, switching, t, content]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside <LangProvider>');
  return ctx;
}
