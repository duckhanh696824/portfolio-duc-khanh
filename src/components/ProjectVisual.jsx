import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];
const inView = { initial: 'hidden', whileInView: 'show', viewport: { once: false, margin: '-15%' } };
const fadeUp = (delay = 0, y = 14) => ({
  hidden: { opacity: 0, y },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease } },
});

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

/* HIS — LIS dashboard với lưới dữ liệu kiểu AG Grid */
function Dashboard({ p }) {
  const bars = [40, 65, 52, 80, 58, 92, 70, 85, 62, 96];
  const tabs = ['Tiếp nhận', 'Kết quả', 'Duyệt', 'Máy XN'];
  const rows = [
    ['260712000123', 'Glucose', 'ok'],
    ['260712000124', 'HbA1c', 'wait'],
    ['260712000125', 'Công thức máu', 'info'],
    ['260712000126', 'Creatinine', 'ok'],
    ['260712000127', 'AST / ALT', 'wait'],
  ];
  return (
    <Browser url={p.url}>
      <div className="mk-dash">
        <aside className="mk-dash__side">
          <b className="mk-logo" />
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className={i === 1 ? 'is-on' : ''} />
          ))}
        </aside>
        <div className="mk-dash__main">
          <div className="mk-tabs">
            {tabs.map((t, i) => (
              <motion.span key={t} className={i === 0 ? 'is-on' : ''} {...inView} variants={fadeUp(i * 0.06, 8)}>
                {t}
              </motion.span>
            ))}
          </div>
          <div className="mk-kpis">
            {(p.metrics || []).map((k, i) => (
              <motion.div key={k.l} className="mk-kpi" {...inView} variants={fadeUp(0.1 + i * 0.1)}>
                <small>{k.l}</small>
                <strong>{k.v}</strong>
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
            {rows.map(([sid, name, st], r) => (
              <motion.div
                key={sid}
                className="mk-row mono"
                {...inView}
                variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0, transition: { delay: 0.4 + r * 0.07, duration: 0.5 } } }}
              >
                <span className="mk-row__sid">{sid}</span>
                <span className="mk-row__name">{name}</span>
                <em className={st} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Browser>
  );
}

/* Backend / microservice — terminal */
function Api({ p }) {
  const lines = p.terminal || [];
  const pdf = p.id === 'crystal-report';
  return (
    <div className="mk-api">
      <div className="mock-term">
        <div className="mock-browser__bar">
          <i />
          <i />
          <i />
          <span className="mock-browser__url mono">{pdf ? 'report-service — x86' : 'spring-boot — :8080'}</span>
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
      {pdf ? (
        <motion.div
          className="mk-pdf"
          {...inView}
          variants={{ hidden: { opacity: 0, y: 40, rotate: 0 }, show: { opacity: 1, y: 0, rotate: 6, transition: { delay: 1.1, duration: 0.9, ease } } }}
        >
          <b>PDF</b>
          <span className="mk-pdf__barcode" />
          {Array.from({ length: 6 }).map((_, i) => (
            <i key={i} style={{ width: `${60 + ((i * 17) % 35)}%` }} />
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="mk-endpoints mono"
          {...inView}
          variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { delay: 1.1, duration: 0.9, ease } } }}
        >
          {[
            ['GET', '/doctors/shifts'],
            ['POST', '/shifts/recurring'],
            ['POST', '/appointments'],
            ['GET', '/specialties'],
            ['PUT', '/patients/{id}'],
          ].map(([m, u]) => (
            <div key={u}>
              <b className={`m-${m.toLowerCase()}`}>{m}</b>
              {u}
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

/* Website bệnh viện — đặt lịch khám 4 bước */
function Website({ p }) {
  const steps = ['Chuyên khoa', 'Bác sĩ', 'Khung giờ', 'Xác nhận'];
  return (
    <Browser url={p.url}>
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
          <motion.div className="mk-booking" {...inView} variants={fadeUp(0.3, 30)}>
            <strong>Đặt lịch khám</strong>
            <div className="mk-steps">
              {steps.map((s, i) => (
                <motion.div key={s} {...inView} variants={{ hidden: { opacity: 0.2 }, show: { opacity: 1, transition: { delay: 0.6 + i * 0.25 } } }}>
                  <b>{i + 1}</b>
                  <span>{s}</span>
                </motion.div>
              ))}
            </div>
            <span />
            <span />
            <em />
          </motion.div>
        </div>
        <div className="mk-site__cards">
          {[0, 1, 2, 3].map((c) => (
            <motion.div key={c} {...inView} variants={fadeUp(0.4 + c * 0.08, 20)} />
          ))}
        </div>
      </div>
    </Browser>
  );
}

/* Trang quản trị nội dung (CMS) */
function Cms({ p }) {
  const menu = ['Dashboard', 'Chuyên khoa', 'Phòng khám', 'Bác sĩ', 'Dịch vụ y tế', 'Gói khám', 'BHYT', 'Tin tức'];
  return (
    <Browser url={p.url}>
      <div className="mk-cms">
        <aside className="mk-cms__side">
          <b className="mk-logo" />
          {menu.map((m, i) => (
            <motion.span key={m} className={i === 1 ? 'is-on' : ''} {...inView} variants={fadeUp(i * 0.04, 6)}>
              {m}
            </motion.span>
          ))}
        </aside>
        <div className="mk-cms__main">
          <div className="mk-cms__head">
            <strong>Chuyên khoa</strong>
            <em>+ Thêm mới</em>
          </div>
          {['Nội tổng quát', 'Châm cứu', 'Phục hồi chức năng', 'Y học cổ truyền', 'Nhi khoa'].map((n, r) => (
            <motion.div key={n} className="mk-cms__row" {...inView} variants={{ hidden: { opacity: 0, x: -14 }, show: { opacity: 1, x: 0, transition: { delay: 0.3 + r * 0.07 } } }}>
              <span className="mk-cms__thumb" />
              <span className="mk-cms__name">{n}</span>
              <i className={r % 4 === 2 ? 'off' : 'on'} />
              <b>✎</b>
            </motion.div>
          ))}
          <motion.div className="mk-cms__toast" {...inView} variants={fadeUp(1, 10)}>
            ✓ Cập nhật thành công
          </motion.div>
        </div>
      </div>
    </Browser>
  );
}

/* Sàn TMĐT */
function Shop({ p }) {
  const prods = [
    ['Serum dưỡng da', '289.000đ'],
    ['Kem chống nắng', '199.000đ'],
    ['Sữa rửa mặt', '149.000đ'],
    ['Mặt nạ ngủ', '239.000đ'],
    ['Toner hoa hồng', '179.000đ'],
    ['Son dưỡng', '99.000đ'],
  ];
  return (
    <Browser url={p.url}>
      <div className="mk-shop">
        <div className="mk-shop__top">
          <b className="mk-logo" />
          <span className="mk-shop__search mono">Tìm sản phẩm…</span>
          <motion.span className="mk-shop__cart" {...inView} variants={{ hidden: { scale: 0.6 }, show: { scale: 1, transition: { delay: 1.2, type: 'spring', stiffness: 400, damping: 10 } } }}>
            🛒<em>3</em>
          </motion.span>
        </div>
        <div className="mk-shop__grid">
          {prods.map(([n, pr], i) => (
            <motion.div key={n} className="mk-prod" {...inView} variants={fadeUp(0.1 + i * 0.07, 18)}>
              <span className="mk-prod__img" />
              <small>{n}</small>
              <strong>{pr}</strong>
              <i>★★★★★</i>
            </motion.div>
          ))}
        </div>
        <motion.div className="mk-otp" {...inView} variants={fadeUp(0.9, 20)}>
          <small>Mã OTP</small>
          <div>
            {['4', '8', '1', '6', '2', '9'].map((d, i) => (
              <span key={i}>{d}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </Browser>
  );
}

/* Ứng dụng mobile */
function Mobile() {
  return (
    <div className="mk-mobile">
      {[0, 1].map((ph) => (
        <motion.div key={ph} className={`phone phone--${ph}`} {...inView} variants={fadeUp(ph * 0.2, 60)}>
          <div className="phone__notch" />
          <div className="phone__screen">
            <div className="phone__top">
              <b />
              <span />
            </div>
            {ph === 0 ? (
              <>
                <div className="phone__search">🎙</div>
                <div className="phone__hero" />
                <div className="phone__grid">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <span key={i} />
                  ))}
                </div>
                <div className="phone__list">
                  {Array.from({ length: 2 }).map((_, i) => (
                    <span key={i} />
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="phone__map">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="phone__list">
                  {Array.from({ length: 2 }).map((_, i) => (
                    <span key={i} />
                  ))}
                </div>
                <div className="phone__pay">Thanh toán</div>
              </>
            )}
            <div className="phone__tab">
              {Array.from({ length: 4 }).map((_, i) => (
                <i key={i} className={i === ph ? 'is-on' : ''} />
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

const map = { dashboard: Dashboard, api: Api, website: Website, cms: Cms, shop: Shop, mobile: Mobile };

export default function ProjectVisual({ p }) {
  const C = map[p.visual] ?? Dashboard;
  return <C p={p} />;
}
