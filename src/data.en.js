/**
 * ============================================================
 *  ENGLISH CONTENT — overrides text fields of data.js
 *  (non-text fields like colors, stack, urls are shared)
 * ============================================================
 */

export const profileEn = {
  location: 'Binh Thanh, Ho Chi Minh City',
  rotatingRoles: [
    'Full-stack Developer',
    'Front-end Team Leader',
    'React · ASP.NET Core · Spring Boot',
    'Healthcare & E-commerce Systems',
  ],
  intro:
    '1.5+ years of production experience building enterprise healthcare systems and web applications — React.js interfaces, RESTful APIs with ASP.NET Core & Java Spring Boot, and SQL Server databases.',
  about:
    'I am a Full-stack Developer with 1.5+ years of production experience developing enterprise healthcare systems and web applications. I build responsive interfaces with React.js, develop RESTful APIs using ASP.NET Core and Java Spring Boot, and manage SQL Server databases. My strengths are implementing complex business workflows, backend architecture and cross-functional collaboration — with hands-on experience leading a front-end development team.',
};

export const statsEn = [
  'Years of production experience',
  'Web & mobile projects',
  'Front-end members led',
  'GPA / 4.00 — HUTECH',
];

export const skillsEn = {
  frontend: { desc: 'Responsive, data-dense interfaces built on a reusable component architecture.' },
  backend: { desc: 'Clean, secure RESTful APIs following Clean Architecture.' },
  database: { desc: 'Schema design & safe transactional processing.' },
  languages: { desc: 'Languages I use every day.' },
  tools: { desc: 'Agile/Scrum teamwork with feature branches & pull requests.' },
  mobile: { title: 'Mobile & More', desc: 'Cross-platform apps and service integrations.' },
};

export const projectsEn = {
  his: {
    subtitle: 'Hospital Information System — Paraclinical & LIS subsystem',
    team: '5 members',
    summary:
      'Owned the entire Paraclinical & LIS subsystem (20+ screens) within a 36-module enterprise HIS — from sample reception and SID barcode generation to analyzer integration and two-tier result approval.',
    highlights: [
      'Owned the Paraclinical & LIS subsystem (20+ screens) within a 36-module enterprise HIS, implementing end-to-end laboratory workflows: sample reception, 12-digit Code 128 SID barcode generation, 11 ISO 15189-aligned rejection rules, analyzer integration (ASTM/HL7) and two-tier doctor batch approval.',
      'Designed and implemented 54 RESTful API endpoints across 9 Controllers, 9 Services and 9 Repositories using ASP.NET Core (.NET 8) Clean Architecture, supporting LIS, PACS imaging (CDHA) and Functional Diagnostics (TDCN) operations.',
      'Authored 35+ SQL Server Stored Procedures (1,800+ lines of T-SQL) using OPENJSON, MERGE and multi-result-set queries to process 50–100+ laboratory parameters in a single database round-trip (under 200ms), with transactional integrity through BEGIN TRAN / ROLLBACK.',
      'Built 19 high-density AG Grid tables with 39 column schemas and 49 custom cell renderers in React 19, implementing optimized filtering across 1,000+ test/ICD records with response times under 50ms.',
      'Implemented a DOM keep-alive multi-tab workspace across 16 LIS tabs, eliminating redundant API re-fetching when switching between tabs.',
    ],
    metrics: ['API endpoints', 'Stored Procedures', 'AG Grid filtering'],
  },
  'crystal-report': {
    subtitle: 'Crystal Reports service for the HIS',
    team: 'Built in parallel with HSV HIS',
    summary:
      'A standalone C# microservice handling printing & reporting for the whole HIS: supports 100+ Crystal Reports templates, streams PDFs directly and ships a custom HTML/QR/Code 128 print engine.',
    highlights: [
      'Developed LIS reporting modules within a standalone C# Report Microservice supporting 100+ Crystal Reports (.rpt) templates.',
      'Implemented PDF streaming straight to the client — no temporary files written to disk.',
      'Built a custom HTML / QR / Code 128 print engine that reduced report rendering latency from ~2s to under 300ms.',
      'REST API on .NET Framework 4.8 / ASP.NET Web API 2, running on x86 for compatibility with Crystal Reports 11 and the hospital’s TTX / OLEDB / ODBC data sources.',
      'Serves both the main backend and the web front-end; endpoints documented with Swagger and deployed on IIS.',
    ],
    metrics: ['Report templates', 'Render latency', 'Temp files on disk'],
  },
  bacmy: {
    subtitle: 'Hospital portal & online appointment booking',
    team: '3 members',
    summary:
      'Led a 3-member front-end team, set up the initial Vite architecture and a reusable foundation that enabled ~80% codebase reuse across subsequent hospital projects.',
    highlights: [
      'Led a 3-member Front-end team, establishing the initial Vite project architecture and designing a reusable foundation comprising 30+ shared components, 66 API integration modules and 140 application routes.',
      'Architected and standardized a reusable Front-end foundation, enabling approximately 80% codebase reuse across multiple hospital projects and accelerating subsequent project development.',
      'Led task allocation, effort estimation and progress tracking while directly developing and refactoring a 4-step doctor appointment booking workflow with dynamic specialty and doctor availability filtering.',
      'Integrated Cloudinary uploads for hospital branding and developed dynamic hospital information handling with custom caching services.',
      'Hospital directions map built with Leaflet.',
    ],
    metrics: ['Shared components', 'Routes', 'Codebase reuse'],
  },
  dongtan: {
    subtitle: 'Backend for doctor scheduling & appointment booking',
    team: '4 members',
    summary:
      'Developed the Spring Boot backend for Dong Tan Hospital: doctor shift scheduling, multi-step appointment booking, specialty catalogs and patient records within a 71-controller system.',
    highlights: [
      'Designed and implemented 30+ Spring Boot REST API endpoints for doctor shift scheduling, multi-step appointment booking, specialty catalogs and patient record management, within a 71-controller hospital backend.',
      'Authored and integrated 20+ SQL Server Stored Procedures (out of 110+ system procedures) for recurring multi-shift registration, 19-parameter appointment booking, real-time slot conflict detection and automated email confirmation.',
      'Configured stateless HS512 JWT authentication using Spring Security filter chains.',
      'Centralized exception handling with @RestControllerAdvice, covering 14 exception types across 8 HTTP status codes.',
    ],
    metrics: ['REST endpoints', 'Stored Procedures', 'Exception types'],
  },
  hsvtech: {
    subtitle: 'Cross-platform e-commerce mobile app',
    team: 'HSV',
    summary:
      'A Flutter shopping app connected to a Spring Boot backend: from product browsing, cart and checkout to order and inventory management for administrators.',
    highlights: [
      'Built a cross-platform Flutter app (Android / iOS) with Provider state management, consuming REST APIs from a Spring Boot backend.',
      'Complete customer flow: sign up / sign in, categories & product details, search (including voice search), cart, address book, vouchers and order history.',
      'Integrated the Bao Kim payment gateway via WebView; displayed stores & inventory on maps (Google Maps / flutter_map).',
      'Avatar upload & display through Firebase Storage.',
      'Admin screens: dashboard, order management, warehouse receipts / dispatch notes with Syncfusion DataGrid.',
    ],
    metrics: ['Screen groups', 'Roles: customer & admin', 'Cross-platform codebase'],
  },
  yduoc: {
    subtitle: 'Hospital portal & admin console',
    team: 'HSV',
    summary:
      'Developed the public-facing UI and a content management admin console for a hospital website: specialties, clinics, doctors, medical services, health packages, health insurance, news…',
    highlights: [
      'Built the homepage & public pages: featured news, booking by specialty, online consultation and news pages.',
      'Developed the Admin console: specialties, clinics, doctors, facilities, medical services, service groups & health packages, regional training, health-insurance guides, treatment methods, hotlines.',
      'Integrated CRUD APIs for admin modules plus dashboard, work schedules, appointments, users and role-based permissions.',
      'Integrated Google Maps and Firebase Storage for images; protected routes by Admin / Doctor roles.',
    ],
    metrics: ['Admin modules', 'API integration', 'Permissions'],
  },
  doidep: {
    subtitle: 'Multi-vendor e-commerce marketplace',
    team: '5 members',
    summary:
      'My first project at HSV: built most of the customer shopping journey of the marketplace — OTP authentication, search, cart, checkout, orders, reviews and notifications.',
    highlights: [
      'Built sign in / sign up with OTP verification; managed authentication state with Redux Toolkit.',
      'Developed product detail, agent store, checkout with discount codes, favorite products and purchase history.',
      'Integrated APIs for products, search & category filtering, cart, my orders, product reviews, user profile & address book and notifications.',
      'Chat detail UI and notification pages; responsive header, cart and auth screens.',
      'Built the Admin Dashboard and Blog UI; extracted the search filter & product list into reusable components.',
    ],
    metrics: ['Authentication', 'Shopping flows', 'Start at HSV'],
  },
};

export const experienceEn = [
  {
    org: 'Healthcare Solution Vietnam (HSV) · Binh Thanh, HCMC',
    desc: [
      'Contributed to 6 web and mobile applications across healthcare and e-commerce domains, developing features spanning front-end interfaces, backend APIs and database operations.',
      'Progressed from Intern to Front-end Team Lead within one year, taking responsibility for technical architecture, task allocation, effort estimation and progress tracking across a 3-member front-end team.',
      'Developed backend services using ASP.NET Core and Java Spring Boot, working with SQL Server Stored Procedures, RESTful APIs and transactional data processing.',
      'Collaborated in Agile/Scrum teams using Git feature branches, pull requests and Jira to coordinate development tasks and deliver project milestones.',
    ],
  },
  {
    title: "Bachelor's Degree in Information Technology",
    org: 'Ho Chi Minh City University of Technology (HUTECH) · Software Technology',
    desc: ['GPA 3.69 / 4.00.', 'Talent Scholarship — 2023.', 'English CEFR B1 — technical reading & workplace communication.'],
  },
];

export const navLinksEn = {
  about: 'About',
  skills: 'Skills',
  work: 'Work',
  experience: 'Experience',
  contact: 'Contact',
};

