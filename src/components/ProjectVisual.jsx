import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];
const inView = { initial: 'hidden', whileInView: 'show', viewport: { once: false, margin: '-15%' } };

function Browser({ url, children }) {
  return (
    <div className="mock-browser">
      <div className="mock-browser__bar">
        <i />
        <i />
        <i />
        <span className="mock-browser__url mono">{url}</span>
      </div>
      <div className="mock-browser__body">{children}</div>
    </div>
  );
}

function Dashboard() {
  const bars = [40, 65, 52, 80, 58, 92, 70, 85, 62, 96];
  return (
    <Browser url="his.hospital.vn/dashboard">
      <div className="mk-dash">
        <aside className="mk-dash__side">
          <b className="mk-logo" />
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className={i === 1 ? 'is-on' : ''} />
          ))}
        </aside>
        <div className="mk-dash__main">
          <div className="mk-kpis">
            {['1,284', '312', '98.6%'].map((k, i) => (
              <motion.div key={k} className="mk-kpi" {...inView} variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { delay: i * 0.1, ease, duration: 0.6 } } }}>
                <small />
                <strong>{k}</strong>
              </motion.div>
            ))}
          </div>
          <div className="mk-chart">
            {bars.map((h, i) => (
              <motion.span
                key={i}
                {...inView}
                variants={{ hidden: { scaleY: 0 }, show: { scaleY: 1, transition: { delay: 0.2 + i * 0.05, duration: 0.8, ease } } }}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="mk-table">
            {Array.from({ length: 5 }).map((_, r) => (
              <motion.div
                key={r}
                className="mk-row"
                {...inView}
                variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0, transition: { delay: 0.4 + r * 0.07, duration: 0.5 } } }}
              >
                <i style={{ width: '18%' }} />
                <i style={{ width: '30%' }} />
                <i style={{ width: '16%' }} />
                <em className={r % 3 === 0 ? 'ok' : r % 3 === 1 ? 'wait' : 'info'} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Browser>
  );
}

function Api() {
  const lines = [
    ['c', '$ curl -X GET /api/report/hen-tai-kham'],
    ['m', '→ Loading BCKB_HenTaiKham.rpt ...'],
    ['m', '→ Binding datasource (TTX / OLEDB)'],
    ['g', '✓ Rendered 12 pages in 418ms'],
    ['p', 'HTTP/1.1 200 OK'],
    ['p', 'Content-Type: application/pdf'],
    ['p', 'Content-Disposition: inline'],
  ];
  return (
    <div className="mk-api">
      <div className="mock-term">
        <div className="mock-browser__bar">
          <i />
          <i />
          <i />
          <span className="mock-browser__url mono">report-service — x86</span>
        </div>
        <div className="mock-term__body mono">
          {lines.map(([t, l], i) => (
            <motion.div
              key={i}
              className={`term-${t}`}
              {...inView}
              variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0, transition: { delay: i * 0.18, duration: 0.4 } } }}
            >
              {l}
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        className="mk-pdf"
        {...inView}
        variants={{ hidden: { opacity: 0, y: 40, rotate: 0 }, show: { opacity: 1, y: 0, rotate: 6, transition: { delay: 1.1, duration: 0.9, ease } } }}
      >
        <b>PDF</b>
        {Array.from({ length: 7 }).map((_, i) => (
          <i key={i} style={{ width: `${60 + ((i * 17) % 35)}%` }} />
        ))}
      </motion.div>
    </div>
  );
}

function Website() {
  return (
    <Browser url="benhvienbacmy.vn">
      <div className="mk-site">
        <div className="mk-site__nav">
          <b className="mk-logo" />
          <span />
          <span />
          <span />
          <em />
        </div>
        <div className="mk-site__hero">
          <div className="mk-site__copy">
            <motion.i {...inView} variants={{ hidden: { width: 0 }, show: { width: '85%', transition: { duration: 0.9, ease } } }} />
            <motion.i {...inView} variants={{ hidden: { width: 0 }, show: { width: '60%', transition: { delay: 0.1, duration: 0.9, ease } } }} />
            <small />
            <small />
            <em />
          </div>
          <motion.div
            className="mk-booking"
            {...inView}
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.8, ease } } }}
          >
            <strong>Đặt lịch khám</strong>
            <span />
            <span />
            <div className="mk-steps">
              {[0, 1, 2].map((s) => (
                <motion.b key={s} {...inView} variants={{ hidden: { scale: 0 }, show: { scale: 1, transition: { delay: 0.7 + s * 0.15 } } }} />
              ))}
            </div>
            <em />
          </motion.div>
        </div>
        <div className="mk-site__cards">
          {[0, 1, 2, 3].map((c) => (
            <motion.div key={c} {...inView} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { delay: 0.4 + c * 0.08 } } }} />
          ))}
        </div>
      </div>
    </Browser>
  );
}

function Chat() {
  const msgs = [
    ['in', 'Chào bác sĩ, tôi bị đau đầu 3 ngày nay...'],
    ['out', 'Chào bạn, bạn có kèm sốt hay buồn nôn không?'],
    ['in', 'Có sốt nhẹ buổi tối ạ.'],
    ['bot', 'AI gợi ý: đặt lịch khoa Nội Thần kinh — 9:00 mai'],
  ];
  return (
    <div className="mk-chat">
      <div className="mk-chat__head">
        <span className="mk-avatar" />
        <div>
          <strong>BS. Trần Minh</strong>
          <small>
            <i className="status-dot" /> đang hoạt động
          </small>
        </div>
      </div>
      <div className="mk-chat__body">
        {msgs.map(([t, m], i) => (
          <motion.div
            key={i}
            className={`bubble bubble--${t}`}
            {...inView}
            variants={{ hidden: { opacity: 0, y: 16, scale: 0.9 }, show: { opacity: 1, y: 0, scale: 1, transition: { delay: 0.2 + i * 0.45, duration: 0.5, ease } } }}
          >
            {m}
          </motion.div>
        ))}
        <motion.div className="typing" {...inView} variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { delay: 2.2 } } }}>
          <i />
          <i />
          <i />
        </motion.div>
      </div>
      <div className="mk-chat__input">
        <span />
        <b>➤</b>
      </div>
    </div>
  );
}

function Mobile() {
  return (
    <div className="mk-mobile">
      {[0, 1].map((p) => (
        <motion.div
          key={p}
          className={`phone phone--${p}`}
          {...inView}
          variants={{ hidden: { opacity: 0, y: 60 }, show: { opacity: 1, y: 0, transition: { delay: p * 0.2, duration: 1, ease } } }}
        >
          <div className="phone__notch" />
          <div className="phone__screen">
            <div className="phone__top">
              <b />
              <span />
            </div>
            <div className="phone__hero" />
            <div className="phone__grid">
              {Array.from({ length: 4 }).map((_, i) => (
                <span key={i} />
              ))}
            </div>
            <div className="phone__list">
              {Array.from({ length: 3 }).map((_, i) => (
                <span key={i} />
              ))}
            </div>
            <div className="phone__tab">
              {Array.from({ length: 4 }).map((_, i) => (
                <i key={i} className={i === 0 ? 'is-on' : ''} />
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

const map = { dashboard: Dashboard, api: Api, website: Website, chat: Chat, mobile: Mobile };

export default function ProjectVisual({ type }) {
  const C = map[type] ?? Dashboard;
  return <C />;
}

