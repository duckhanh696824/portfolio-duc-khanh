/**
 * ============================================================
 *  DỮ LIỆU PORTFOLIO — chỉnh sửa tại đây để cập nhật nội dung
 *  (đồng bộ với CV: Nguyen_Duc_Khanh_-_CV_Fullstack.pdf)
 * ============================================================
 */

export const profile = {
  name: 'Nguyễn Đức Khánh',
  shortName: 'Khánh',
  initials: 'DK',
  role: 'Full-stack Developer',
  company: 'Healthcare Solution Vietnam (HSV)',
  companyShort: 'HSV',
  location: 'Bình Thạnh, TP. Hồ Chí Minh',
  email: 'duckhanh.30903@gmail.com',
  phone: '0396 824 572',
  github: 'https://github.com/duckhanh696824',
  githubHandle: 'duckhanh696824',
  website: 'portfolio-duc-khanh.vercel.app',
  avatar: '/avatar.webp',
  // File CV trong thư mục public/ — để '' nếu muốn ẩn nút "Tải CV"
  cv: '/Nguyen_Duc_Khanh_CV_Fullstack.pdf',
  linkedin: '',
  facebook: '',
  rotatingRoles: [
    'Full-stack Developer',
    'Front-end Team Leader',
    'React · ASP.NET Core · Spring Boot',
    'Healthcare & E-commerce Systems',
  ],
  intro:
    'Hơn 1.5 năm kinh nghiệm thực chiến xây dựng hệ thống y tế doanh nghiệp và ứng dụng web — giao diện React.js, RESTful API với ASP.NET Core & Java Spring Boot, dữ liệu trên SQL Server.',
  about:
    'Tôi là Full-stack Developer với hơn 1.5 năm kinh nghiệm phát triển các hệ thống y tế doanh nghiệp và ứng dụng web. Tôi xây dựng giao diện responsive với React.js, phát triển RESTful API bằng ASP.NET Core và Java Spring Boot, quản lý dữ liệu SQL Server. Thế mạnh của tôi là hiện thực hoá các luồng nghiệp vụ phức tạp, kiến trúc backend và phối hợp đa nhóm — cùng kinh nghiệm dẫn dắt một đội Front-end.',
};

export const stats = [
  { value: 1.5, decimals: 1, suffix: '+', label: 'Năm kinh nghiệm thực tế' },
  { value: 7, suffix: '', label: 'Dự án web & mobile' },
  { value: 3, suffix: '', label: 'Thành viên team FE dẫn dắt' },
  { value: 3.69, decimals: 2, suffix: '', label: 'GPA / 4.00 — HUTECH' },
];

export const marquee = [
  'React 19', 'Redux Toolkit', 'AG Grid', 'Vite', 'Tailwind CSS', 'Ant Design',
  'ASP.NET Core', 'C#', 'Java', 'Spring Boot', 'Spring Security', 'JWT',
  'SQL Server', 'Stored Procedures', 'Crystal Reports', 'Flutter', 'Swagger', 'Jira',
];

export const skills = [
  {
    key: 'frontend',
    title: 'Front-end',
    desc: 'Giao diện responsive, mật độ dữ liệu cao, kiến trúc component tái sử dụng.',
    items: ['React.js (v18/v19)', 'Redux Toolkit', 'AG Grid', 'Vite', 'React Router', 'Tailwind CSS', 'Ant Design'],
    size: 'lg',
  },
  {
    key: 'backend',
    title: 'Back-end & APIs',
    desc: 'RESTful API rõ ràng, bảo mật, theo Clean Architecture.',
    items: ['ASP.NET Core Web API', 'Java Spring Boot', 'Spring Security', 'RESTful APIs', 'JWT Authentication'],
    size: 'md',
  },
  {
    key: 'database',
    title: 'Databases',
    desc: 'Thiết kế schema & xử lý giao dịch an toàn.',
    items: ['SQL Server', 'Database Schema Design', 'Stored Procedures', 'Transaction Management'],
    size: 'sm',
  },
  {
    key: 'languages',
    title: 'Languages',
    desc: 'Ngôn ngữ sử dụng hằng ngày.',
    items: ['Java', 'C#', 'JavaScript (ES6+)', 'TypeScript', 'SQL', 'HTML5', 'CSS3 / SCSS'],
    size: 'sm',
  },
  {
    key: 'tools',
    title: 'Tools & Workflow',
    desc: 'Làm việc nhóm Agile/Scrum với feature branch & pull request.',
    items: ['Git / GitHub', 'Postman', 'Maven', 'Figma', 'Jira', 'Agile / Scrum', 'Swagger'],
    size: 'md',
  },
  {
    key: 'mobile',
    title: 'Mobile & Khác',
    desc: 'Ứng dụng đa nền tảng và tích hợp dịch vụ.',
    items: ['Flutter', 'Dart', 'Provider', 'Firebase', 'Crystal Reports', 'Cloudinary', 'English B1'],
    size: 'md',
  },
];

/**
 * visual: 'dashboard' | 'api' | 'website' | 'cms' | 'shop' | 'mobile'
 * Thứ tự: mới nhất → cũ nhất
 */
export const projects = [
  {
    id: 'his',
    title: 'HSV HIS',
    subtitle: 'Hệ thống thông tin bệnh viện — Phân hệ Cận lâm sàng & LIS',
    category: 'Enterprise HIS · Full-stack',
    period: '07/2026 — 10/2026',
    team: '5 thành viên',
    role: 'Full-stack Developer',
    color: '#7cf3d0',
    visual: 'dashboard',
    url: 'his.hsv.vn/lis/xet-nghiem',
    summary:
      'Phụ trách trọn phân hệ Cận lâm sàng & LIS (20+ màn hình) trong hệ thống HIS doanh nghiệp gồm 36 module — từ tiếp nhận mẫu, sinh mã vạch SID đến tích hợp máy xét nghiệm và duyệt kết quả 2 cấp.',
    highlights: [
      'Sở hữu phân hệ Cận lâm sàng & LIS (20+ màn hình) trong HIS 36 module: tiếp nhận mẫu, sinh mã vạch SID 12 chữ số chuẩn Code 128, 11 quy tắc từ chối mẫu theo ISO 15189, tích hợp máy xét nghiệm (ASTM/HL7) và duyệt kết quả theo lô 2 cấp bác sĩ.',
      'Thiết kế & hiện thực 54 RESTful API endpoint trên 9 Controller / 9 Service / 9 Repository với ASP.NET Core (.NET 8) Clean Architecture, phục vụ LIS, chẩn đoán hình ảnh PACS (CĐHA) và thăm dò chức năng (TDCN).',
      'Viết 35+ Stored Procedure SQL Server (1.800+ dòng T-SQL) dùng OPENJSON, MERGE, multi-result-set để xử lý 50–100+ chỉ số xét nghiệm trong một lần gọi DB (< 200ms), đảm bảo toàn vẹn bằng BEGIN TRAN / ROLLBACK.',
      'Xây dựng 19 bảng AG Grid mật độ cao với 39 column schema và 49 custom cell renderer trên React 19; lọc tối ưu trên 1.000+ bản ghi xét nghiệm / ICD với thời gian phản hồi < 50ms.',
      'Hiện thực không gian làm việc đa tab với DOM keep-alive cho 16 tab LIS, loại bỏ việc gọi lại API khi chuyển tab.',
    ],
    stack: ['React 19', 'Redux Toolkit', 'AG Grid', 'ASP.NET Core (.NET 8)', 'C#', 'SQL Server', 'Clean Architecture'],
    metrics: [
      { v: '54', l: 'API endpoints' },
      { v: '35+', l: 'Stored Procedures' },
      { v: '<50ms', l: 'Lọc AG Grid' },
    ],
  },
  {
    id: 'crystal-report',
    title: 'Report Microservice',
    subtitle: 'Dịch vụ báo cáo Crystal Reports cho HIS',
    category: 'Backend · Microservice · C#',
    period: '07/2026 — 10/2026',
    team: 'Song song cùng HSV HIS',
    role: 'Full-stack Developer',
    color: '#ffc46b',
    visual: 'api',
    terminal: [
      ['c', '$ GET /api/report/lis/phieu-ket-qua?sid=260712000123'],
      ['m', '→ Load template  PhieuKetQuaXN.rpt'],
      ['m', '→ Bind data (OPENJSON · multi-result-set)'],
      ['m', '→ Render Code 128 + QR (HTML print engine)'],
      ['g', '✓ Stream PDF in 284ms — no temp disk I/O'],
      ['p', 'HTTP/1.1 200 OK'],
      ['p', 'Content-Type: application/pdf; inline'],
    ],
    summary:
      'Microservice C# độc lập phục vụ in ấn & báo cáo cho toàn hệ thống HIS: hỗ trợ 100+ mẫu Crystal Reports, stream PDF trực tiếp và một print engine HTML/QR/Code 128 tự xây dựng.',
    highlights: [
      'Phát triển các module báo cáo LIS trong Report Microservice C# độc lập, hỗ trợ 100+ mẫu Crystal Reports (.rpt).',
      'Hiện thực PDF streaming trả thẳng về client — không ghi file tạm xuống ổ đĩa.',
      'Tự xây dựng print engine HTML / QR / Code 128 giúp giảm độ trễ render báo cáo từ ~2s xuống dưới 300ms.',
      'REST API trên .NET Framework 4.8 / ASP.NET Web API 2, chạy kiến trúc x86 tương thích Crystal Reports 11 và các nguồn dữ liệu TTX / OLEDB / ODBC của bệnh viện.',
      'Phục vụ đồng thời backend chính và frontend web; tài liệu hoá endpoint bằng Swagger, triển khai trên IIS.',
    ],
    stack: ['C#', '.NET Framework 4.8', 'ASP.NET Web API 2', 'Crystal Reports', 'SQL Server', 'Swagger', 'IIS'],
    metrics: [
      { v: '100+', l: 'Mẫu báo cáo' },
      { v: '~2s → <300ms', l: 'Thời gian render' },
      { v: '0', l: 'File tạm trên đĩa' },
    ],
  },
  {
    id: 'bacmy',
    title: 'Bắc Mỹ Hospital',
    subtitle: 'Cổng thông tin & đặt lịch khám bệnh viện',
    category: 'Web Platform · Front-end Lead',
    period: '03/2026 — 07/2026',
    team: '3 thành viên',
    role: 'Front-end Team Leader',
    color: '#7c8cff',
    visual: 'website',
    url: 'benhvienbacmy.vn/dat-lich-kham',
    summary:
      'Dẫn dắt team Front-end 3 người, dựng kiến trúc Vite ban đầu và bộ nền tảng tái sử dụng giúp tái dùng ~80% codebase cho nhiều dự án bệnh viện tiếp theo.',
    highlights: [
      'Dẫn dắt team Front-end 3 thành viên; khởi tạo kiến trúc dự án Vite và thiết kế nền tảng tái sử dụng gồm 30+ shared component, 66 module tích hợp API và 140 route ứng dụng.',
      'Kiến trúc & chuẩn hoá bộ nền Front-end dùng chung, cho phép tái sử dụng ~80% codebase giữa nhiều dự án bệnh viện, rút ngắn đáng kể thời gian phát triển các dự án sau.',
      'Phân chia công việc, ước lượng effort, theo dõi tiến độ; đồng thời trực tiếp phát triển & refactor luồng đặt lịch khám 4 bước với bộ lọc chuyên khoa và lịch trống của bác sĩ theo thời gian thực.',
      'Tích hợp upload Cloudinary cho nhận diện thương hiệu bệnh viện và xây dựng cơ chế xử lý thông tin bệnh viện động với caching service tự viết.',
      'Bản đồ chỉ đường bệnh viện với Leaflet.',
    ],
    stack: ['ReactJS', 'Redux Toolkit', 'Tailwind CSS', 'Vite', 'Leaflet', 'Cloudinary'],
    metrics: [
      { v: '30+', l: 'Shared components' },
      { v: '140', l: 'Routes' },
      { v: '~80%', l: 'Codebase tái sử dụng' },
    ],
  },
  {
    id: 'dongtan',
    title: 'Đồng Tân Hospital',
    subtitle: 'Backend quản lý lịch bác sĩ & đặt lịch khám',
    category: 'Backend · Spring Boot',
    period: '12/2025 — 03/2026',
    team: '4 thành viên',
    role: 'Back-end Developer',
    color: '#5ad1ff',
    visual: 'api',
    terminal: [
      ['c', '$ POST /api/appointments/booking'],
      ['m', '→ JwtAuthFilter  HS512 ✓  ROLE_PATIENT'],
      ['m', '→ EXEC sp_DatLichKham  @19 params'],
      ['m', '→ Check slot conflict … none'],
      ['g', '✓ 201 Created — email confirmation queued'],
      ['p', '{ "maLichHen": "DT-2603-0142",'],
      ['p', '  "trangThai": "CHO_XAC_NHAN" }'],
    ],
    summary:
      'Phát triển backend Spring Boot cho bệnh viện Đồng Tân: lịch trực ca bác sĩ, đặt lịch khám nhiều bước, danh mục chuyên khoa và hồ sơ bệnh nhân trong hệ thống 71 controller.',
    highlights: [
      'Thiết kế & hiện thực 30+ REST API endpoint Spring Boot cho xếp lịch ca trực bác sĩ, đặt lịch khám nhiều bước, danh mục chuyên khoa và quản lý hồ sơ bệnh nhân — trong backend bệnh viện gồm 71 controller.',
      'Viết & tích hợp 20+ Stored Procedure SQL Server (trên tổng 110+ procedure của hệ thống) cho đăng ký ca lặp nhiều ca, đặt lịch khám 19 tham số, phát hiện trùng slot theo thời gian thực và gửi email xác nhận tự động.',
      'Cấu hình xác thực JWT stateless thuật toán HS512 bằng Spring Security filter chain.',
      'Xử lý ngoại lệ tập trung với @RestControllerAdvice, bao phủ 14 loại exception trên 8 mã trạng thái HTTP.',
    ],
    stack: ['Java', 'Spring Boot', 'Spring Security', 'SQL Server', 'JWT', 'Maven'],
    metrics: [
      { v: '30+', l: 'REST endpoints' },
      { v: '20+', l: 'Stored Procedures' },
      { v: '14', l: 'Exception types' },
    ],
  },
  {
    id: 'hsvtech',
    title: 'HSV Tech App',
    subtitle: 'Ứng dụng thương mại điện tử đa nền tảng',
    category: 'Mobile · Flutter',
    period: '09/2025 — 12/2025',
    team: 'HSV',
    role: 'Mobile Developer',
    color: '#ff8fb8',
    visual: 'mobile',
    summary:
      'Ứng dụng mua sắm Flutter kết nối backend Spring Boot: từ duyệt sản phẩm, giỏ hàng, thanh toán đến quản lý đơn hàng và kho dành cho quản trị viên.',
    highlights: [
      'Xây dựng ứng dụng Flutter đa nền tảng (Android / iOS) với state management bằng Provider, gọi REST API tới backend Spring Boot.',
      'Luồng người dùng đầy đủ: đăng ký / đăng nhập, danh mục & chi tiết sản phẩm, tìm kiếm (hỗ trợ tìm bằng giọng nói), giỏ hàng, sổ địa chỉ, voucher và lịch sử đơn hàng.',
      'Tích hợp cổng thanh toán Bảo Kim qua WebView; hiển thị cửa hàng & tồn kho trên bản đồ (Google Maps / flutter_map).',
      'Upload & hiển thị ảnh đại diện qua Firebase Storage.',
      'Màn hình quản trị: dashboard, quản lý đơn hàng, phiếu nhập / xuất kho với Syncfusion DataGrid.',
    ],
    stack: ['Flutter', 'Dart', 'Provider', 'Firebase Storage', 'Google Maps', 'Spring Boot API'],
    metrics: [
      { v: '17', l: 'Nhóm màn hình' },
      { v: '2', l: 'Vai trò: khách & admin' },
      { v: '1', l: 'Codebase đa nền tảng' },
    ],
  },
  {
    id: 'yduoc',
    title: 'Y Dược Hospital',
    subtitle: 'Cổng thông tin & trang quản trị bệnh viện',
    category: 'Web Platform · Front-end',
    period: '07/2025 — 11/2025',
    team: 'HSV',
    role: 'Front-end Developer',
    color: '#9be15d',
    visual: 'cms',
    url: 'admin.yduoc.vn/chuyen-khoa',
    summary:
      'Phát triển giao diện người dùng và hệ thống trang quản trị nội dung cho website bệnh viện: chuyên khoa, phòng khám, bác sĩ, dịch vụ y tế, gói khám, BHYT, tin tức…',
    highlights: [
      'Xây dựng giao diện trang chủ & trang người dùng: tin tức nổi bật, đặt lịch theo chuyên khoa, tư vấn trực tuyến, trang tin tức.',
      'Phát triển bộ trang quản trị (Admin): chuyên khoa, phòng khám, bác sĩ, cơ sở vật chất, dịch vụ y tế, nhóm dịch vụ & gói khám, chỉ đạo tuyến, hướng dẫn BHYT, phương pháp điều trị, hotline.',
      'Tích hợp API CRUD cho các module quản trị cùng dashboard, lịch làm việc, lịch hẹn, người dùng và phân quyền (roles).',
      'Tích hợp Google Map, lưu trữ hình ảnh với Firebase Storage; bảo vệ route theo vai trò Admin / Bác sĩ.',
    ],
    stack: ['ReactJS', 'Redux Toolkit', 'Tailwind CSS', 'Ant Design', 'Firebase', 'Axios'],
    metrics: [
      { v: '15+', l: 'Module quản trị' },
      { v: 'CRUD', l: 'Tích hợp API' },
      { v: 'RBAC', l: 'Phân quyền' },
    ],
  },
  {
    id: 'doidep',
    title: 'DoiDep Ecom',
    subtitle: 'Sàn thương mại điện tử đa người bán',
    category: 'E-commerce · Front-end',
    period: '04/2025 — 07/2025',
    team: '5 thành viên',
    role: 'Front-end Developer (Intern)',
    color: '#ff9f6b',
    visual: 'shop',
    url: 'doidep.vn/san-pham',
    summary:
      'Dự án đầu tiên tại HSV: phát triển phần lớn luồng mua sắm phía khách hàng của sàn TMĐT — từ xác thực OTP, tìm kiếm, giỏ hàng, thanh toán đến đơn hàng, đánh giá và thông báo.',
    highlights: [
      'Xây dựng đăng nhập / đăng ký với xác thực OTP; quản lý trạng thái xác thực bằng Redux Toolkit.',
      'Phát triển trang chi tiết sản phẩm, cửa hàng đại lý (agent store), checkout với mã giảm giá, sản phẩm yêu thích và lịch sử mua hàng.',
      'Tích hợp API cho sản phẩm, tìm kiếm & lọc theo danh mục, giỏ hàng, đơn hàng của tôi, đánh giá sản phẩm, hồ sơ & sổ địa chỉ người dùng, thông báo.',
      'Giao diện chat chi tiết, trang thông báo; responsive cho header, giỏ hàng, đăng nhập / đăng ký.',
      'Dựng giao diện Dashboard Admin và trang Blog; tách component bộ lọc tìm kiếm & danh sách sản phẩm để tái sử dụng.',
    ],
    stack: ['ReactJS', 'Redux Toolkit', 'MUI', 'Ant Design', 'Tailwind CSS', 'Formik / Yup', 'WebSocket (STOMP)'],
    metrics: [
      { v: 'OTP', l: 'Xác thực' },
      { v: '10+', l: 'Luồng mua sắm' },
      { v: 'Intern', l: 'Khởi đầu tại HSV' },
    ],
  },
];

export const experience = [
  {
    period: '04/2025 — 10/2026',
    title: 'Full-stack Developer',
    org: 'Healthcare Solution Vietnam (HSV) · Bình Thạnh, TP.HCM',
    desc: [
      'Tham gia 6 ứng dụng web & mobile trong lĩnh vực y tế và thương mại điện tử, phát triển tính năng từ giao diện front-end, backend API đến thao tác cơ sở dữ liệu.',
      'Thăng tiến từ Intern lên Front-end Team Lead trong vòng một năm — chịu trách nhiệm kiến trúc kỹ thuật, phân chia công việc, ước lượng effort và theo dõi tiến độ cho team Front-end 3 người.',
      'Phát triển dịch vụ backend với ASP.NET Core và Java Spring Boot, làm việc với SQL Server Stored Procedure, RESTful API và xử lý dữ liệu giao dịch.',
      'Làm việc theo Agile/Scrum với Git feature branch, pull request và Jira để điều phối công việc và bàn giao các mốc dự án.',
    ],
    tags: ['React', 'ASP.NET Core', 'Spring Boot', 'SQL Server', 'Team Lead'],
  },
  {
    period: '2021 — 2025',
    title: 'Cử nhân Công nghệ Thông tin',
    org: 'Đại học Công nghệ TP.HCM (HUTECH) · Chuyên ngành Công nghệ Phần mềm',
    desc: [
      'GPA 3.69 / 4.00.',
      'Học bổng Tài năng (Talent Scholarship) năm 2023.',
      'Tiếng Anh CEFR B1 — đọc tài liệu kỹ thuật & giao tiếp công việc.',
    ],
    tags: ['Software Technology', 'GPA 3.69', 'Talent Scholarship 2023'],
  },
];

export const navLinks = [
  { id: 'about', label: 'Giới thiệu' },
  { id: 'skills', label: 'Kỹ năng' },
  { id: 'work', label: 'Dự án' },
  { id: 'experience', label: 'Kinh nghiệm' },
  { id: 'contact', label: 'Liên hệ' },
];
