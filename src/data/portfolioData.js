export const personalInfo = {
  name: "Indla Mohana Venkata Mani Deep",
  shortName: "Mani Deep",
  title: "Full-Stack Developer",
  headline: "Building high-performance real-time web platforms and modern digital experiences.",
  bio: "Aspiring Computer Science & Engineering student at Lovely Professional University. Specializing in full-stack MERN architectures, real-time Socket.IO systems, and immersive, responsive frontend engineering.",
  email: "indlachinnu123@gmail.com",
  phone: "+91 7661822103",
  location: "Jalandhar, Punjab, India",
  linkedin: "https://linkedin.com/in/manideep-developer",
  github: "https://github.com/ManiDeep1822",
  resumePath: "/Indla_Mani_Deep_Resume.pdf",
  photoPath: "/Photo.jpg",
  avatarFallback: "MD",
  availability: "Open to High-Impact Roles & Internships",
  roles: [
    "Full-Stack Web Developer",
    "MERN Architecture Specialist",
    "Real-Time Systems Builder",
    "Frontend & Backend Engineer",
    "Software Engineer"
  ]
};

export const stats = [
  { label: "User Roles Architected", value: "4 Roles", sub: "Students, Vendors, Drivers, Admins in CampusEats" },
  { label: "Real-Time Processes", value: "200+", sub: "Concurrently tracked in ProcessOptima" },
  { label: "Academic Intermediate", value: "96.6%", sub: "Top tier academic record" },
  { label: "Technical Skills", value: "15+ Tools", sub: "MERN, Real-Time & Databases" }
];

export const skillCategories = [
  {
    id: "all",
    label: "All Technologies"
  },
  {
    id: "languages",
    label: "Languages",
    description: "Core programming languages utilized for algorithms, system programming, and web apps."
  },
  {
    id: "frontend",
    label: "Frontend & UI",
    description: "Modern component-based design, state management, and immersive interactions."
  },
  {
    id: "backend",
    label: "Backend & Real-Time",
    description: "Scalable REST APIs, event-driven web sockets, and server architectures."
  },
  {
    id: "databases",
    label: "Databases",
    description: "Document and relational databases optimized for query speed and data integrity."
  },
  {
    id: "tools",
    label: "Tools & DevOps",
    description: "Modern developer tooling, version control, payment gateways, and authentication."
  }
];

export const skills = [
  // Languages
  { name: "JavaScript (ES6+)", category: "languages", level: 92, icon: "Code2", tag: "Primary" },
  { name: "Python", category: "languages", level: 88, icon: "Terminal", tag: "Advanced" },
  { name: "C++", category: "languages", level: 85, icon: "Cpu", tag: "Certified" },
  { name: "C", category: "languages", level: 82, icon: "Binary", tag: "Core" },
  { name: "Java", category: "languages", level: 80, icon: "Code", tag: "OOP" },

  // Frontend
  { name: "React.js", category: "frontend", level: 94, icon: "Atom", tag: "Primary UI" },
  { name: "Vite", category: "frontend", level: 90, icon: "Zap", tag: "Build" },
  { name: "Tailwind CSS", category: "frontend", level: 95, icon: "Palette", tag: "Styling" },
  { name: "HTML5 & Semantic Web", category: "frontend", level: 96, icon: "Layout", tag: "Markup" },
  { name: "CSS3 & Responsive UX", category: "frontend", level: 94, icon: "Sparkles", tag: "Layouts" },

  // Backend & Real-Time
  { name: "Node.js", category: "backend", level: 90, icon: "Server", tag: "Runtime" },
  { name: "Express.js", category: "backend", level: 88, icon: "Workflow", tag: "REST APIs" },
  { name: "Socket.IO", category: "backend", level: 92, icon: "Radio", tag: "WebSockets" },
  { name: "RESTful Architecture", category: "backend", level: 90, icon: "Network", tag: "APIs" },

  // Databases
  { name: "MongoDB", category: "databases", level: 88, icon: "Database", tag: "NoSQL" },
  { name: "MySQL", category: "databases", level: 84, icon: "Table2", tag: "Relational" },
  { name: "PostgreSQL", category: "databases", level: 82, icon: "HardDrive", tag: "SQL" },

  // Tools & DevOps
  { name: "Git & GitHub", category: "tools", level: 92, icon: "GitBranch", tag: "VCS" },
  { name: "Postman", category: "tools", level: 88, icon: "Send", tag: "Testing" },
  { name: "Razorpay Integration", category: "tools", level: 86, icon: "CreditCard", tag: "Fintech" },
  { name: "Google OAuth", category: "tools", level: 88, icon: "ShieldCheck", tag: "Auth" },
  { name: "Vercel Deployment", category: "tools", level: 90, icon: "CloudUpload", tag: "CI/CD" }
];

export const projects = [
  {
    id: "campus-eats",
    title: "CampusEats",
    subtitle: "Real-Time Campus Food Delivery Platform",
    period: "Apr 2026 – Aug 2026",
    category: "Full-Stack MERN & Real-Time",
    badge: "Flagship Production Project",
    status: "Completed & Deployed",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Razorpay",
      "Google OAuth"
    ],
    summary: "A high-concurrency multi-role campus food delivery ecosystem engineered to streamline food ordering, vendor dispatching, and delivery logistics with sub-second real-time tracking.",
    bullets: [
      "Architected a full-stack MERN platform with Socket.IO real-time order tracking and Google OAuth authentication, enabling role-based workflows across 4 user roles — students, vendors, delivery partners, and administrators.",
      "Integrated Razorpay payments and resolved critical production bugs (infinite render loops, stale closures, host identity normalization), improving checkout stability across concurrent sessions.",
      "Debugged and resolved Vercel build pipeline failures (JSX mismatches, broken import paths), shipping a stable MongoDB-backed deployment."
    ],
    metrics: [
      { label: "User Roles", value: "4 Distinct Portals" },
      { label: "Sync Latency", value: "< 100ms Socket.IO" },
      { label: "Checkout", value: "Razorpay Secured" },
      { label: "Backend", value: "Node & Express" }
    ],
    roleBreakdown: [
      { role: "Students", feature: "Browse menus, customize orders, live map tracking & payment" },
      { role: "Vendors", feature: "Live order incoming board, inventory sync & dispatch controls" },
      { role: "Delivery Partners", feature: "Pickup notifications, route optimization & status pings" },
      { role: "Administrators", feature: "Platform oversight, analytics, fraud prevention & payout audits" }
    ],
    githubUrl: "https://github.com/ManiDeep1822/CampusEats",
    liveUrl: "https://campuseats-demo.vercel.app"
  },
  {
    id: "sri-adithya-furniture",
    title: "Sri Adithya Furniture",
    subtitle: "Business Website for a Local Furniture Retailer",
    period: "Sep 2025 – Oct 2025",
    category: "Client Commercial Website",
    badge: "Commercial Client Delivery",
    status: "Live in Production",
    techStack: ["React.js", "Tailwind CSS", "Responsive Design", "WhatsApp API", "Custom Domain"],
    summary: "Production e-commerce catalog website developed for a physical furniture retailer, transforming offline operations into an accessible online showcase with friction-free customer conversion.",
    bullets: [
      "Designed and built a responsive business website for a real client, showcasing 20+ products and services across an optimized, mobile-friendly layout.",
      "Integrated WhatsApp click-to-chat, giving customers a direct line from product browsing to inquiry with no extra steps.",
      "Optimized images and page assets for faster load times, deploying to a custom domain."
    ],
    metrics: [
      { label: "Catalog Size", value: "20+ Showcased Items" },
      { label: "Inquiry Flow", value: "1-Click Direct WhatsApp" },
      { label: "Mobile UX", value: "100% Responsive" },
      { label: "Asset Speed", value: "Optimized WebP" }
    ],
    roleBreakdown: [
      { role: "Product Showcase", feature: "High-resolution curated furniture collections with dynamic category filters" },
      { role: "Instant Inquiries", feature: "Direct WhatsApp intent messaging prefilled with product SKU and details" },
      { role: "Client Branding", feature: "Custom domain deployment with local SEO tags & business location embeds" }
    ],
    githubUrl: null,
    liveUrl: "https://sriadithyafurniture.com"
  },
  {
    id: "process-optima",
    title: "ProcessOptima",
    subtitle: "Real-Time System Process Monitoring Dashboard",
    period: "Nov 2025 – Dec 2025",
    category: "AI & System Performance Monitoring",
    badge: "AI & Real-Time Analytics",
    status: "Completed",
    techStack: ["Node.js", "JavaScript", "HTML5", "CSS3", "Chart.js", "REST APIs", "OS Metrics"],
    summary: "Intelligent system process monitor engineered to capture live operating system metrics and apply a heuristic anomaly detection engine to detect system bottlenecks and memory leaks.",
    bullets: [
      "Developed a real-time, AI-powered monitoring dashboard using a Node.js backend to collect live OS metrics (CPU, memory, running processes) via a REST API, displaying 200+ concurrent processes with trend charts.",
      "Designed a heuristic anomaly detection engine that flags per-process and system-wide issues, generating optimization recommendations and severity-based (Low/Medium/High) real-time alerts.",
      "Delivered one-click exportable JSON diagnostic reports capturing timestamped snapshots, detected anomalies, recommendations, and historical trends."
    ],
    metrics: [
      { label: "Concurrent Processes", value: "200+ Live Tracking" },
      { label: "Anomaly Engine", value: "Heuristic AI Rules" },
      { label: "Alert Levels", value: "Low / Med / High" },
      { label: "Diagnostics", value: "1-Click JSON Export" }
    ],
    roleBreakdown: [
      { role: "Live Telemetry", feature: "Continuous sampling of OS CPU, memory, thread consumption and PID trees" },
      { role: "Heuristic Engine", feature: "Threshold-based & anomaly pattern recognition flagging potential process crashes" },
      { role: "Diagnostic Audit", feature: "Structured JSON snapshot generation capturing timestamped audit logs for debugging" }
    ],
    githubUrl: "https://github.com/ManiDeep1822/ProcessOptima",
    liveUrl: null
  }
];

export const experiences = [
  {
    role: "Founder",
    organization: "WAIVE (Student Club)",
    type: "College Club Leadership",
    period: "Feb 2026 – Present",
    location: "Lovely Professional University",
    description: "Founded and led the student-driven Web & AI club at Lovely Professional University. Organized technical sessions, peer coding workshops, and collaborative project building.",
    badge: "Club Leadership"
  },
  {
    role: "Web Development Training Intern",
    organization: "Responsive Web Development Training",
    type: "Professional Training & Certification",
    period: "Sep 2025 – Oct 2025",
    location: "SkillCraft Technology / Professional Training",
    description: "Completed rigorous practical training building production-grade web interfaces. Engineered and enhanced 5+ frontend components while diagnosing and resolving 10+ layout, responsiveness, styling, and cross-browser compatibility issues through systematic debugging and testing. Optimized frontend code and website assets to improve page performance.",
    badge: "Technical Training"
  }
];

export const certifications = [
  {
    title: "Programming Using C++",
    issuer: "Infosys Springboard",
    date: "Sep 2025",
    topics: "Advanced OOPs, Data Structures, Memory Management, Performance Optimization",
    icon: "Award"
  },
  {
    title: "Python and Django Framework for Beginners",
    issuer: "Udemy",
    date: "Oct 2024",
    topics: "Backend Architecture, ORM, MVC Pattern, RESTful Routing, Auth",
    icon: "ShieldCheck"
  },
  {
    title: "Effective Time Management",
    issuer: "CodingTantra",
    date: "Mar 2024",
    topics: "Agile Planning, Productivity Frameworks, Priority Matrix Execution",
    icon: "Clock"
  }
];

export const education = [
  {
    degree: "Bachelor of Technology (B. Tech)",
    field: "Computer Science and Engineering",
    institution: "Lovely Professional University",
    location: "Jalandhar, Punjab",
    period: "Aug 2024 – Present",
    score: "CGPA: 7.68",
    status: "Currently Pursuing (Expected 2028)",
    highlights: [
      "Core coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems",
      "Founded WAIVE — University Web & AI club",
      "Active participant in competitive programming and hackathons"
    ]
  },
  {
    degree: "Intermediate Education (Class 12)",
    field: "Mathematics, Physics, Chemistry (MPC)",
    institution: "Sri Sarada Junior College",
    location: "Vijayawada, Andhra Pradesh",
    period: "Jun 2022 – Mar 2024",
    score: "Percentage: 96.6%",
    status: "Graduated with Academic Distinction",
    highlights: [
      "Outstanding academic performance with 96.6% aggregate",
      "Strong analytical foundation in discrete mathematics and physics"
    ]
  },
  {
    degree: "Secondary School Certificate (Class 10)",
    field: "General Matriculation",
    institution: "Aravinda High School",
    location: "Vijayawada, Andhra Pradesh",
    period: "Jun 2020 – Apr 2021",
    score: "Percentage: 92.2%",
    status: "Graduated with High Honors",
    highlights: [
      "Graduated with 92.2% percentage",
      "Active participant in science Olympiads and logic competitions"
    ]
  }
];
