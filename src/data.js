/**
 * ============================================================
 *  DỮ LIỆU PORTFOLIO — chỉnh sửa tại đây để cập nhật nội dung
 * ============================================================
 *  Các mục có ghi chú "TODO" là thông tin bạn nên kiểm tra lại.
 */

export const profile = {
  name: 'Nguyễn Đức Khánh',
  shortName: 'Khánh',
  initials: 'DK',
  role: 'Software Engineer',
  company: 'Healthcare Solution Việt Nam',
  location: 'TP. Hồ Chí Minh, Việt Nam',
  email: 'duckhanh.30903@gmail.com',
  github: 'https://github.com/duckhanh696824',
  githubHandle: 'duckhanh696824',
  // TODO: thêm link LinkedIn / Facebook nếu có, để trống ('') để ẩn
  linkedin: '',
  facebook: '',
  available: true,
  rotatingRoles: [
    'Full-stack Developer',
    'Healthcare Software Engineer',
    'React · .NET · Node.js · Java',
    'Từ database đến giao diện',
  ],
  intro:
    'Tôi xây dựng những hệ thống phần mềm y tế giúp bệnh viện vận hành nhanh hơn — từ HIS, cổng đặt lịch khám, chatbot AI đến dịch vụ báo cáo và ứng dụng di động.',
  about:
    'Tôi là một lập trình viên full-stack đam mê biến những quy trình phức tạp thành trải nghiệm đơn giản. Hằng ngày tôi làm việc với React, ASP.NET, Node.js và Spring Boot trên nền SQL Server — thiết kế API, tối ưu dữ liệu và chăm chút từng pixel của giao diện. Với tôi, phần mềm tốt là phần mềm mà bác sĩ, điều dưỡng và bệnh nhân dùng mà không cần phải nghĩ.',
};

export const stats = [
  { value: 6, suffix: '+', label: 'Dự án thực tế' },
  { value: 20, suffix: '+', label: 'Công nghệ sử dụng' },
  { value: 4, suffix: '', label: 'Hệ thống bệnh viện' },
  { value: 100, suffix: '%', label: 'Nhiệt huyết' },
];

export const marquee = [
  'React', 'Vite', 'Tailwind CSS', 'Redux Toolkit', 'ASP.NET Core', '.NET Framework',
  'Node.js', 'Express', 'Spring Boot', 'SQL Server', 'Socket.IO', 'Firebase',
  'Flutter', 'Docker', 'OpenAI API', 'Crystal Reports', 'AG Grid', 'Swagger',
];

export const skills = [
  {
    key: 'frontend',
    title: 'Frontend',
    desc: 'Giao diện nhanh, responsive, chú trọng trải nghiệm và hiệu năng.',
    items: ['React', 'Vite', 'Redux Toolkit', 'Tailwind CSS', 'Ant Design', 'MUI', 'Framer Motion', 'AG Grid'],
    size: 'lg',
  },
  {
    key: 'backend',
    title: 'Backend',
    desc: 'API rõ ràng, kiến trúc sạch, dễ mở rộng.',
    items: ['ASP.NET Core', 'Web API 2', 'Node.js / Express', 'Spring Boot', 'Socket.IO', 'JWT'],
    size: 'md',
  },
  {
    key: 'database',
    title: 'Database',
    desc: 'Thiết kế & tối ưu dữ liệu nghiệp vụ bệnh viện.',
    items: ['SQL Server', 'Stored Procedure', 'Firebase', 'Oracle'],
    size: 'sm',
  },
  {
    key: 'mobile',
    title: 'Mobile',
    desc: 'Ứng dụng đa nền tảng từ một codebase.',
    items: ['Flutter', 'Dart'],
    size: 'sm',
  },
  {
    key: 'tools',
    title: 'DevOps & Tools',
    desc: 'Quy trình phát triển và triển khai gọn gàng.',
    items: ['Git / GitHub', 'Docker', 'IIS', 'Nginx', 'Swagger', 'Postman', 'Netlify'],
    size: 'md',
  },
  {
    key: 'ai',
    title: 'AI & Tích hợp',
    desc: 'Đưa AI và dịch vụ bên thứ ba vào sản phẩm thật.',
    items: ['OpenAI API', 'Chatbot', 'Cloudinary', 'Crystal Reports', 'Leaflet Maps'],
    size: 'md',
  },
];

/**
 * visual: 'dashboard' | 'api' | 'website' | 'chat' | 'mobile'
 */
export const projects = [
  {
    id: 'his',
    title: 'HIS Web',
    subtitle: 'Hệ thống thông tin bệnh viện',
    category: 'Enterprise · Healthcare',
    year: '2025',
    color: '#7cf3d0',
    visual: 'dashboard',
    summary:
      'Nền tảng quản lý bệnh viện trên web với lưới dữ liệu hiệu năng cao, dashboard thống kê và xuất chứng từ PDF / Excel ngay trên trình duyệt.',
    role: 'Full-stack Developer',
    highlights: [
      'Frontend React + Vite + Tailwind, quản lý state bằng Redux Toolkit',
      'Lưới dữ liệu lớn với AG Grid, lọc / sắp xếp / nhóm tức thì',
      'Sinh & ký chứng từ PDF (react-pdf, pdf-lib), xuất báo cáo Excel',
      'Quét mã QR trên trình duyệt, dashboard biểu đồ với Recharts',
      'Backend ASP.NET Core theo Clean Architecture (Domain / Application / Infrastructure)',
      'Bảo mật connection string mã hoá, xác thực JWT',
    ],
    stack: ['React', 'Vite', 'Tailwind', 'Redux Toolkit', 'AG Grid', 'ASP.NET Core', 'SQL Server'],
  },
  {
    id: 'crystal-report',
    title: 'Crystal Report API',
    subtitle: 'Report Microservice',
    category: 'Backend · Microservice',
    year: '2025',
    color: '#ffc46b',
    visual: 'api',
    summary:
      'Microservice C# độc lập chuyên xuất báo cáo Crystal Reports (.rpt) thành luồng PDF qua REST API, phục vụ backend Java và frontend web của hệ thống bệnh viện.',
    role: 'Backend Developer',
    highlights: [
      'REST API trên .NET Framework 4.8 / ASP.NET Web API 2',
      'Render báo cáo Crystal Reports 11 → PDF trả về inline',
      'Endpoint kiểm tra runtime & kiến trúc x86 / x64',
      'Kết nối nguồn dữ liệu TTX / OLEDB / ODBC của bệnh viện',
      'Tài liệu API với Swagger, triển khai trên IIS',
    ],
    stack: ['C#', '.NET Framework 4.8', 'Web API 2', 'Crystal Reports', 'Swagger', 'IIS'],
  },
  {
    id: 'bacmy',
    title: 'Bắc Mỹ Hospital',
    subtitle: 'Cổng thông tin & đặt lịch khám',
    category: 'Web Platform · Healthcare',
    year: '2025',
    color: '#7c8cff',
    visual: 'website',
    summary:
      'Website bệnh viện đa khoa hiện đại giúp bệnh nhân tra cứu thông tin, tìm bác sĩ, đặt lịch khám trực tuyến và được hỗ trợ bởi chatbot AI.',
    role: 'Frontend Lead · Full-stack',
    highlights: [
      'Luồng đặt lịch khám nhiều bước theo chuyên khoa / bác sĩ',
      'Chatbot hỗ trợ bệnh nhân, có cơ chế giới hạn tần suất',
      'Bản đồ chỉ đường với Leaflet, slider & hiệu ứng mượt',
      'Trang quản trị nội dung, tin tức với trình soạn thảo rich-text',
      'Backend Spring Boot đóng gói Docker, lưu trữ Firebase',
    ],
    stack: ['React', 'Redux Toolkit', 'MUI', 'Ant Design', 'Firebase', 'Spring Boot', 'Docker'],
  },
  {
    id: 'yhoc',
    title: 'Y Học Hospital',
    subtitle: 'Nền tảng y tế & chat với bác sĩ',
    category: 'Realtime · AI',
    year: '2024',
    color: '#c98bff',
    visual: 'chat',
    summary:
      'Nền tảng bệnh viện với tính năng chat thời gian thực giữa bệnh nhân và bác sĩ, chatbot AI tư vấn, tự động tổng hợp tin tức y khoa.',
    role: 'Full-stack Developer',
    highlights: [
      'Chat realtime bác sĩ – bệnh nhân với Socket.IO',
      'Chatbot AI tích hợp OpenAI API',
      'Tự động thu thập tin tức (Cheerio / Puppeteer) theo lịch node-cron',
      'Upload media lên Cloudinary, gửi email thông báo với Nodemailer',
      'API Node.js / Express trên SQL Server, tài liệu Swagger, trang AdminJS',
    ],
    stack: ['React', 'Socket.IO', 'Node.js', 'Express', 'SQL Server', 'OpenAI', 'Cloudinary'],
  },
  {
    id: 'brickup',
    title: 'BrickUp',
    subtitle: 'Ứng dụng di động đa nền tảng',
    category: 'Mobile · Cross-platform',
    year: '2025',
    color: '#ff8fb8',
    visual: 'mobile',
    summary:
      'Ứng dụng di động xây dựng bằng Flutter, chạy trên Android, iOS, Web và Desktop từ một codebase duy nhất.',
    role: 'Mobile Developer',
    highlights: [
      'Một codebase Flutter cho Android, iOS, Web, Windows, macOS, Linux',
      'Kiến trúc widget tái sử dụng, giao diện nhất quán',
      'Tối ưu hiệu năng & trải nghiệm chạm trên di động',
    ],
    stack: ['Flutter', 'Dart', 'Android', 'iOS'],
  },
];

export const experience = [
  {
    // TODO: cập nhật thời gian thực tế
    period: '2024 — Nay',
    title: 'Software Engineer',
    org: 'Healthcare Solution Việt Nam',
    desc: 'Phát triển full-stack các hệ thống phần mềm y tế: HIS Web, microservice báo cáo, cổng thông tin & đặt lịch khám cho nhiều bệnh viện.',
    tags: ['React', 'ASP.NET', 'Node.js', 'Spring Boot', 'SQL Server'],
  },
  {
    // TODO: cập nhật thời gian & mô tả
    period: '2023 — 2024',
    title: 'Web Developer',
    org: 'Dự án cá nhân & freelance',
    desc: 'Xây dựng website, ứng dụng di động Flutter và các sản phẩm thử nghiệm để rèn luyện kỹ năng thiết kế hệ thống.',
    tags: ['React', 'Flutter', 'Firebase'],
  },
  {
    // TODO: thay bằng tên trường của bạn
    period: '2021 — 2025',
    title: 'Cử nhân Công nghệ Thông tin',
    org: 'Đại học',
    desc: 'Nền tảng về cấu trúc dữ liệu, cơ sở dữ liệu, kỹ nghệ phần mềm và phát triển ứng dụng web.',
    tags: ['Software Engineering', 'Database'],
  },
];

export const navLinks = [
  { id: 'about', label: 'Giới thiệu' },
  { id: 'skills', label: 'Kỹ năng' },
  { id: 'work', label: 'Dự án' },
  { id: 'experience', label: 'Kinh nghiệm' },
  { id: 'contact', label: 'Liên hệ' },
];

