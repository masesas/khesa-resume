// Structured resume content, summarized from CV_Khesa_Alvandi_Sembodo_ATS.docx.
// Single source of truth for the About, Skills, Experience, Stats and Contact
// sections. Keep prose tight — the page favors scannable, real detail.

export const profile = {
  name: 'Khesa Alvandi Sembodo',
  role: 'Software Engineer',
  location: 'Bogor, Indonesia',
  email: 'vandilalvandi@gmail.com',
  phone: '+62 851-5603-2859',
  wa: 'https://wa.me/6285156032859',
  github: 'masesas',
  githubUrl: 'https://github.com/masesas',
  linkedin: 'khesa-alvandi-sembodo',
  linkedinUrl: 'https://www.linkedin.com/in/khesa-alvandi-sembodo',
  // Tightened summary of the CV's professional summary.
  summary:
    "I build software that solves real-world problems. Over the past 6+ years, I've worked across mobile, web, backend, and cloud technologies, helping transform ideas into products used by businesses and everyday users",
  tagline:
    'Building software, solving problems, and shipping products',
};

export type Stat = { value: number; suffix: string; label: string };

export const stats: Stat[] = [
  { value: 6, suffix: '+', label: 'Years shipping production' },
  { value: 10, suffix: 'k+', label: 'BengkelPro downloads' },
  { value: 20, suffix: '+', label: 'Workshops onboarded' },
  { value: 9, suffix: '', label: 'Companies & teams' },
];

export type Job = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  highlights: string[];
  tech: string[];
};

// Reverse-chronological, condensed to the highest-signal bullets per role.
export const experience: Job[] = [
  {
    company: 'Maybank Indonesia',
    role: 'Backend Developer & Technical Tester',
    period: 'Apr 2025 – Apr 2026',
    current: true,
    highlights: [
      'Designed Jenkins CI/CD pipelines, replacing manual deployment for faster, more reliable releases.',
      'Migrated containerization from Docker to Podman for rootless, hardened operation.',
      'Upgraded deprecated dependencies and Java runtimes across microservices to improve security posture.',
    ],
    tech: ['Spring Boot', 'Spring Cloud', 'Spring Batch', 'RabbitMQ', 'Jenkins', 'Podman', 'Linux'],
  },
  {
    company: 'Hitachi Channel Solution',
    role: 'Android Developer',
    period: 'Jan 2025 – Mar 2025',
    highlights: [
      'Added full offline mode (Room/SQLite) to a legacy POS: receipts, transactions, catalog, customers.',
      'Built local↔remote sync with WorkManager and connection-aware observers for seamless online/offline.',
      'Modeled relational Room schemas (1:1, 1:N, N:N) to eliminate redundancy.',
    ],
    tech: ['Android', 'Kotlin', 'Clean Architecture', 'Room', 'Retrofit', 'Gradle'],
  },
  {
    company: 'Toyota Motor Manufacturing Indonesia',
    role: 'Fullstack Developer',
    period: 'Oct 2024 – Dec 2024',
    highlights: [
      'Built web views and reusable UI across multiple internal systems; designed the REST APIs behind them.',
      'Implemented queue-based import/export to remove long blocking waits on bulk operations.',
      'Built monthly schedulers powering recurring automated downstream tasks.',
    ],
    tech: ['Vue', 'Vuex', 'Node.js', 'Express', 'PostgreSQL', 'Swagger'],
  },
  {
    company: 'CSUL Finance',
    role: 'Backend Developer',
    period: 'May 2024 – Oct 2024',
    highlights: [
      'Architected a maintainable factoring platform from scratch with a unit-testing strategy and API docs.',
      'Implemented JWT auth, rate limiting, and third-party integrations to harden the platform.',
      'Tuned queries to cut API response times; managed multi-stage VPS environments.',
    ],
    tech: ['Java', 'Spring Boot', 'Maven', 'PostgreSQL', 'React', 'Linux'],
  },
  {
    company: 'Toyota Motor Manufacturing Indonesia',
    role: 'Telematics Flutter Trainer',
    period: 'Jan 2024 – May 2024',
    highlights: [
      'Designed and delivered a production-grade Flutter curriculum for a cohort of 15.',
      'Led building a Telematics app: Bluetooth + internet vehicle remote control, maintenance, GPS tracking.',
      'Introduced Raspberry Pi + Flutter head-unit kiosks (flutter_pi, snap_installer) and systemd IoT services.',
    ],
    tech: ['Flutter', 'Python', 'Raspberry Pi', 'Linux', 'Node.js', 'Express'],
  },
  {
    company: 'Aldmic (Floweradvisor)',
    role: 'Mobile Engineer',
    period: 'Oct 2022 – Nov 2023',
    highlights: [
      'Built the Florist Partner hybrid app from scratch off Figma, focused on maintainability and testability.',
      'Owned end-to-end Play Store / App Store releases: keystores, submissions, review feedback.',
      'Shipped multi-language support and responsive layouts across a wide device range.',
    ],
    tech: ['Flutter', 'BLoC', 'Provider', 'Firebase', 'Google Maps', 'Sentry'],
  },
  {
    company: 'Otomotives Platform Mobilitas',
    role: 'Software Engineer',
    period: 'Sep 2021 – Oct 2023',
    highlights: [
      'Built BengkelPro (10k+ downloads) and Otomotives (1k+) Android apps from scratch; onboarded 20+ workshops.',
      'Designed system architecture and DB schemas with the CEO; built REST APIs across interconnected apps.',
      'Stood up and ran VPS infra from scratch (DBs, Git, Nginx/Apache) and Excel import/export reporting.',
    ],
    tech: ['Android', 'Kotlin', 'Flutter', 'Laravel', 'Vue', 'Spring Boot', 'Linux'],
  },
  {
    company: 'Digital Mind System',
    role: 'Mobile & Web Developer',
    period: 'Aug 2020 – Sep 2021',
    highlights: [
      'Delivered mobile and web apps for banking clients (Bank DKI, Bank CIMB Niaga).',
      'Built offline-capable Android features (Room) for uninterrupted field operations.',
      'Added real-time chat and push via SignalR; managed SQL Server stored procedures and schema design.',
    ],
    tech: ['C#', '.NET', 'SQL Server', 'Android', 'SignalR', 'jQuery'],
  },
];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: ['Java', 'Kotlin', 'Dart', 'PHP', 'JavaScript', 'TypeScript', 'C#', 'Python', 'SQL', 'Bash'],
  },
  {
    title: 'Backend',
    items: ['Spring Boot', 'Spring Cloud', 'Spring Batch', 'Laravel', 'Express', 'Node.js', 'Bun', '.NET'],
  },
  {
    title: 'Mobile',
    items: ['Android (Kotlin/Java)', 'Flutter', 'Retrofit2', 'Coroutines', 'Room', 'BLoC', 'Riverpod', 'Clean Architecture'],
  },
  {
    title: 'Frontend',
    items: ['Vue (2/3)', 'React', 'Inertia', 'Pinia', 'Tailwind CSS', 'Vite', 'Bootstrap'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL / MariaDB', 'SQL Server', 'SQLite', 'Firebase Firestore'],
  },
  {
    title: 'DevOps & Cloud',
    items: ['Jenkins CI/CD', 'Docker', 'Podman', 'Nginx', 'Linux VPS', 'Git', 'RabbitMQ', 'GCP', 'Firebase'],
  },
  {
    title: 'IoT & Hardware',
    items: ['Raspberry Pi', 'flutter_pi', 'Bluetooth Thermal Printer', 'Linux systemd services'],
  },
];

// Marquee strip — name maps to public/tech/<name>.svg. `mono` icons are
// single-color (need a fill) and get a wrapper class.
export type TechIcon = { name: string; label: string; mono?: boolean };

export const techMarquee: TechIcon[] = [
  { name: 'java', label: 'Java' },
  { name: 'kotlin', label: 'Kotlin' },
  { name: 'spring', label: 'Spring Boot' },
  { name: 'flutter', label: 'Flutter' },
  { name: 'android', label: 'Android' },
  { name: 'dart', label: 'Dart' },
  { name: 'typescript', label: 'TypeScript' },
  { name: 'javascript', label: 'JavaScript' },
  { name: 'vuejs', label: 'Vue' },
  { name: 'react', label: 'React' },
  { name: 'nodejs', label: 'Node.js' },
  { name: 'express', label: 'Express' },
  { name: 'bun', label: 'Bun', mono: true },
  { name: 'php', label: 'PHP' },
  { name: 'laravel', label: 'Laravel' },
  { name: 'csharp', label: 'C#' },
  { name: 'dotnetcore', label: '.NET' },
  { name: 'python', label: 'Python' },
  { name: 'postgresql', label: 'PostgreSQL' },
  { name: 'mysql', label: 'MySQL' },
  { name: 'firebase', label: 'Firebase' },
  { name: 'docker', label: 'Docker' },
  { name: 'jenkins', label: 'Jenkins' },
  { name: 'nginx', label: 'Nginx' },
  { name: 'linux', label: 'Linux' },
  { name: 'git', label: 'Git' },
  { name: 'rabbitmq', label: 'RabbitMQ' },
  { name: 'raspberrypi', label: 'Raspberry Pi' },
  { name: 'tailwindcss', label: 'Tailwind' },
  { name: 'vite', label: 'Vite' },
  { name: 'figma', label: 'Figma' },
];
