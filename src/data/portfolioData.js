export const personalInfo = {
  name: "Indla Mohana Venkata Mani Deep",
  shortName: "Mani Deep",
  title: "Full-Stack Software Engineer",
  version: "v2.5.0-enterprise",
  headline: "Engineering high-concurrency real-time web platforms and resilient distributed systems.",
  bio: "Computer Science & Engineering undergraduate at Lovely Professional University. Focused on full-stack MERN architectures, low-latency Socket.IO event streams, and production-grade frontend engineering.",
  email: "indlachinnu123@gmail.com",
  phone: "+91 7661822103",
  location: "Jalandhar, Punjab, India",
  university: "Lovely Professional University",
  hometown: "Vijayawada, Andhra Pradesh, India",
  linkedin: "https://linkedin.com/in/manideep-developer",
  github: "https://github.com/ManiDeep1822",
  portfolioUrl: "https://manideep1822.github.io/Portfolio/",
  resumePath: "/ManiDeep_Resume.pdf",
  resumeDownloadName: "Indla_Mohana_Venkata_Mani_Deep_Resume.pdf",
  photoPath: "/Photo.jpg",
  avatarFallback: "MD",
  availability: "Available for Software Engineering Roles & Internships"
};

export const stats = [
  { label: "Multi-Role Portals", value: "4 Roles", sub: "Student, Vendor, Driver & Admin in CampusEats", metricCode: "RBAC_4X" },
  { label: "Concurrent Telemetry", value: "200+ PIDs", sub: "Real-time OS process tracking in ProcessOptima", metricCode: "OS_200P" },
  { label: "Asset Optimization", value: "~80% Faster", sub: "WebP payload compression in Sri Adithya", metricCode: "PERF_80" },
  { label: "Academic Distinction", value: "96.6%", sub: "Intermediate MPC & 7.68 B.Tech CSE CGPA", metricCode: "ACAD_TOP" }
];

export const projects = [
  {
    id: "campus-eats",
    adrId: "ADR-001",
    shortcut: "Shift+1",
    title: "CampusEats",
    subtitle: "Real-Time Campus Food Delivery Platform",
    period: "Apr 2026 – Aug 2026",
    category: "Distributed MERN & WebSockets",
    badge: "Flagship Production System",
    status: "Deployed on Vercel",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Razorpay",
      "Google OAuth"
    ],
    summary: "A high-concurrency multi-role campus food delivery ecosystem engineered to coordinate ordering, vendor kitchen dispatch, and live last-mile delivery telemetry with sub-100ms WebSocket synchronization.",
    bullets: [
      "Architected a full-stack MERN platform with Socket.IO real-time order tracking, Redux state synchronization, and Google OAuth 2.0 authentication across 4 isolated role portals — Students, Vendors, Delivery Partners, and Administrators.",
      "Integrated Razorpay payment capture with server-side HMAC-SHA256 webhook verification and resolved critical production concurrency bugs (infinite render loops, stale closures in socket listeners, and host identity normalization).",
      "Debugged and stabilized Vercel CI/CD build pipelines (strict JSX case resolution, deterministic module bundling), shipping a fault-tolerant MongoDB Atlas deployment."
    ],
    metrics: [
      { label: "RBAC Isolation", value: "4 Role Portals" },
      { label: "Event Latency", value: "< 85ms Socket.IO" },
      { label: "Payment Security", value: "HMAC-SHA256" },
      { label: "Deployment", value: "Vercel + Atlas" }
    ],
    roleBreakdown: [
      { role: "Students", feature: "Real-time menu discovery, cart persistence, Razorpay checkout & live delivery state machine" },
      { role: "Vendors", feature: "Sub-second incoming order queue, preparation SLA timers & 1-click rider dispatch" },
      { role: "Delivery Partners", feature: "Room-multiplexed pickup alerts, active route handoff & proof-of-delivery updates" },
      { role: "Administrators", feature: "System-wide order telemetry, vendor onboarding, settlement audit & anomaly overrides" }
    ],
    architecture: {
      overview: "Event-driven client-server topology using room-multiplexed Socket.IO channels per order ID and role namespace, backed by Express stateless REST controllers and MongoDB Atlas.",
      nodes: [
        { id: "client", title: "React 19 SPA (4 Portals)", tech: "Vite + Tailwind + State Store", detail: "Role-gated views with optimistic UI updates" },
        { id: "gateway", title: "Socket.IO Event Bus", tech: "WebSockets (WSS / TLS 1.3)", detail: "Room-isolated pub/sub: order:{id} & vendor:{id}" },
        { id: "api", title: "Node.js + Express API", tech: "REST + OAuth 2.0 + JWT", detail: "Idempotent checkout & RBAC middleware pipeline" },
        { id: "db", title: "MongoDB Atlas + Razorpay", tech: "Indexed NoSQL + Webhooks", detail: "Compound indexes on status + timestamp; HMAC verification" }
      ],
      tradeoffs: [
        {
          decision: "Room-Multiplexed WebSockets over Short Polling",
          rationale: "Polling across 4 concurrent actors per order generated excessive HTTP overhead. Joining dedicated Socket.IO rooms (`order_<id>`) reduced state propagation latency to <85ms while cutting server CPU load by 70%."
        },
        {
          decision: "Ref-Synchronized Socket Listeners in React",
          rationale: "Standard useEffect socket bindings suffered from stale closures when order state mutated rapidly. Using stable ref callbacks eliminated duplicate socket registrations and infinite re-render cycles."
        }
      ]
    },
    databaseSchema: [
      {
        collection: "orders",
        indexes: ["{ vendorId: 1, status: 1, createdAt: -1 }", "{ studentId: 1, createdAt: -1 }"],
        fields: [
          { name: "_id", type: "ObjectId", desc: "Primary order identifier" },
          { name: "studentId", type: "ObjectId (ref: users)", desc: "Ordering customer reference" },
          { name: "vendorId", type: "ObjectId (ref: vendors)", desc: "Fulfilling campus vendor" },
          { name: "driverId", type: "ObjectId (ref: users)", desc: "Assigned delivery partner" },
          { name: "status", type: "Enum[CREATED, PAID, PREPARING, DISPATCHED, DELIVERED]", desc: "Deterministic state machine stage" },
          { name: "payment", type: "{ razorpayOrderId, razorpayPaymentId, signatureVerified }", desc: "Audited transaction record" }
        ]
      },
      {
        collection: "users",
        indexes: ["{ email: 1 } (Unique)", "{ role: 1, isAvailable: 1 }"],
        fields: [
          { name: "_id", type: "ObjectId", desc: "Primary user identifier" },
          { name: "googleId", type: "String", desc: "Google OAuth 2.0 subject identifier" },
          { name: "role", type: "Enum[STUDENT, VENDOR, DRIVER, ADMIN]", desc: "RBAC authorization scope" },
          { name: "activeSocketId", type: "String", desc: "Ephemeral session binding for real-time push" }
        ]
      }
    ],
    codeSnippet: {
      filename: "server/controllers/paymentVerify.controller.js",
      language: "javascript",
      description: "Idempotent Razorpay HMAC-SHA256 webhook verification & real-time Socket.IO room broadcast without race conditions.",
      code: `import crypto from 'crypto';
import Order from '../models/Order.js';

export const verifyPaymentAndDispatch = async (req, res, io) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderId } = req.body;

  // 1. Compute deterministic HMAC-SHA256 digest
  const payload = \`\${razorpay_order_id}|\${razorpay_payment_id}\`;
  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(payload)
    .digest('hex');

  if (expectedSignature !== razorpay_signature) {
    return res.status(400).json({ status: 'ERROR', code: 'INVALID_SIGNATURE' });
  }

  // 2. Atomic state transition preventing duplicate webhook replay
  const updatedOrder = await Order.findOneAndUpdate(
    { _id: orderId, 'payment.signatureVerified': false },
    {
      $set: {
        status: 'PAID',
        'payment.razorpayPaymentId': razorpay_payment_id,
        'payment.signatureVerified': true,
        paidAt: new Date()
      }
    },
    { new: true }
  ).populate('studentId vendorId', 'name email');

  // 3. Emit low-latency event to isolated vendor & order rooms
  if (updatedOrder) {
    io.to(\`vendor_\${updatedOrder.vendorId._id}\`).emit('order:incoming', updatedOrder);
    io.to(\`order_\${updatedOrder._id}\`).emit('order:status_sync', {
      orderId: updatedOrder._id,
      status: 'PAID',
      timestamp: Date.now()
    });
  }

  return res.status(200).json({ status: 'VERIFIED', orderId });
};`
    },
    githubUrl: "https://github.com/ManiDeep1822/CampusEats",
    liveUrl: "https://campuseats-demo.vercel.app"
  },
  {
    id: "process-optima",
    adrId: "ADR-002",
    shortcut: "Shift+2",
    title: "ProcessOptima",
    subtitle: "Real-Time System Process Monitoring Dashboard",
    period: "Nov 2025 – Dec 2025",
    category: "Systems Telemetry & Heuristic AI",
    badge: "Real-Time Diagnostics Engine",
    status: "Production Complete",
    techStack: ["Node.js", "JavaScript (ES6+)", "Chart.js", "REST APIs", "HTML5", "CSS3"],
    summary: "A low-overhead operating system telemetry platform using a Node.js backend to sample 200+ concurrent OS processes and execute a heuristic anomaly detection engine with severity-graded alerts.",
    bullets: [
      "Developed a real-time monitoring dashboard powered by a Node.js telemetry daemon that collects live OS metrics (CPU utilization, resident memory, active PIDs) via REST endpoints, rendering 200+ concurrent processes with live Chart.js time-series graphs.",
      "Designed a deterministic heuristic anomaly detection engine that evaluates per-process and system-wide thresholds, generating actionable optimization recommendations and severity-graded (Low / Medium / High) alerts.",
      "Engineered one-click exportable JSON diagnostic reports capturing timestamped process trees, detected anomalies, and historical trend windows for post-mortem debugging."
    ],
    metrics: [
      { label: "Process Capacity", value: "200+ Live PIDs" },
      { label: "Anomaly Engine", value: "Heuristic Rules" },
      { label: "Severity Tiers", value: "Low / Med / High" },
      { label: "Audit Format", value: "1-Click JSON" }
    ],
    roleBreakdown: [
      { role: "Telemetry Collector", feature: "Non-blocking Node.js OS sampling of CPU load averages, heap memory & process tables" },
      { role: "Heuristic Analyzer", feature: "Rule-based spike & memory-creep detection classifying anomalies into 3 severity tiers" },
      { role: "Diagnostic Exporter", feature: "Instant serialization of system state into portable JSON audit snapshots" }
    ],
    architecture: {
      overview: "Decoupled telemetry pipeline where a Node.js collector samples OS kernel counters at fixed intervals, runs in-memory heuristic scoring, and streams normalized payloads to a Chart.js canvas client.",
      nodes: [
        { id: "os", title: "OS Kernel & Process Table", tech: "Node.js os / child_process", detail: "Samples CPU ticks, RSS memory & 200+ active PIDs" },
        { id: "engine", title: "Heuristic Anomaly Engine", tech: "Sliding Window Evaluator", detail: "Flags sustained CPU >85% & memory leak slopes" },
        { id: "rest", title: "JSON Telemetry API", tech: "Express Stateless Endpoint", detail: "Low-overhead serialized delta payloads" },
        { id: "ui", title: "Chart.js Diagnostic UI", tech: "Canvas Time-Series + Exporter", detail: "60fps trend rendering & 1-click JSON snapshot" }
      ],
      tradeoffs: [
        {
          decision: "Heuristic Rule Engine over Heavy ML Inference",
          rationale: "Running a heavy ML runtime inside a system monitor consumes the very CPU/RAM resources being monitored. A sliding-window heuristic evaluator achieved <2ms evaluation overhead with zero false-negative spikes."
        },
        {
          decision: "Ring-Buffer Time-Series Storage",
          rationale: "Bounded in-memory ring buffers prevent the monitoring dashboard itself from leaking memory during multi-hour diagnostic sessions."
        }
      ]
    },
    databaseSchema: [
      {
        collection: "telemetry_snapshot (JSON Schema)",
        indexes: ["In-Memory Ring Buffer (Max 300 ticks)", "Exported as RFC-8259 JSON"],
        fields: [
          { name: "snapshotId", type: "UUIDv4", desc: "Unique diagnostic capture identifier" },
          { name: "timestamp", type: "ISO-8601", desc: "Exact UTC capture time" },
          { name: "systemSummary", type: "{ cpuLoadPct, usedMemMB, totalMemMB, uptimeSec }", desc: "Host-level aggregate counters" },
          { name: "processes", type: "Array<{ pid, name, cpuPct, memMB, state }>", desc: "200+ active process descriptors" },
          { name: "anomalies", type: "Array<{ pid, severity, ruleTriggered, recommendation }>", desc: "Heuristic engine findings" }
        ]
      }
    ],
    codeSnippet: {
      filename: "src/engine/heuristicAnomalyDetector.js",
      language: "javascript",
      description: "Sliding-window heuristic evaluator classifying 200+ concurrent OS processes into Low, Medium, and High severity alerts.",
      code: `export function evaluateProcessAnomalies(processes, systemStats) {
  const anomalies = [];
  const timestamp = new Date().toISOString();

  for (const proc of processes) {
    // High Severity: Runaway CPU thread lock or critical memory saturation
    if (proc.cpuPct >= 85.0 || proc.memMB >= 1024) {
      anomalies.push({
        pid: proc.pid,
        processName: proc.name,
        severity: 'HIGH',
        rule: 'RESOURCE_SATURATION_THRESHOLD',
        metrics: { cpu: \`\${proc.cpuPct.toFixed(1)}%\`, mem: \`\${proc.memMB}MB\` },
        recommendation: \`Inspect PID \${proc.pid} (\${proc.name}) for unclosed handles or runaway worker loops.\`,
        timestamp
      });
    }
    // Medium Severity: Sustained contention warning
    else if (proc.cpuPct >= 50.0 || proc.memMB >= 512) {
      anomalies.push({
        pid: proc.pid,
        processName: proc.name,
        severity: 'MEDIUM',
        rule: 'ELEVATED_CONTENTION_WARNING',
        metrics: { cpu: \`\${proc.cpuPct.toFixed(1)}%\`, mem: \`\${proc.memMB}MB\` },
        recommendation: \`Monitor thread pool allocation for \${proc.name}.\`,
        timestamp
      });
    }
  }

  return {
    status: anomalies.some(a => a.severity === 'HIGH') ? 'CRITICAL' : anomalies.length ? 'WARNING' : 'NOMINAL',
    totalEvaluated: processes.length,
    anomalies
  };
}`
    },
    githubUrl: "https://github.com/ManiDeep1822/ProcessOptima",
    liveUrl: null
  },
  {
    id: "sri-adithya-furniture",
    adrId: "ADR-003",
    shortcut: "Shift+3",
    title: "Sri Adithya Furniture",
    subtitle: "Commercial Product Catalog & Conversion Platform",
    period: "Sep 2025 – Oct 2025",
    category: "Client Commercial Production",
    badge: "Live Client Delivery",
    status: "Live on Custom Domain",
    techStack: ["React.js", "Tailwind CSS", "Vite", "WhatsApp API", "HTML5", "CSS3"],
    summary: "Production commercial web platform engineered for a brick-and-mortar furniture retailer, delivering a 20+ item responsive catalog, ~80% faster asset loading, and zero-friction WhatsApp lead conversion.",
    bullets: [
      "Designed and delivered a production business website for a commercial retail client, showcasing 20+ furniture products across a mobile-first, accessible layout.",
      "Engineered a direct WhatsApp click-to-chat conversion pipeline that pre-populates product SKUs and customer inquiry context, eliminating checkout drop-off.",
      "Optimized high-resolution product photography and bundle assets (WebP compression, lazy viewport hydration), reducing page load times by ~80% on mobile networks and deploying to a custom production domain."
    ],
    metrics: [
      { label: "Payload Reduction", value: "~80% Faster" },
      { label: "Product Catalog", value: "20+ Retail SKUs" },
      { label: "Lead Pipeline", value: "1-Click WhatsApp" },
      { label: "Mobile Core Vitals", value: "98+ Performance" }
    ],
    roleBreakdown: [
      { role: "Catalog Engine", feature: "Instant category filtering across 20+ retail furniture lines with zero layout shift" },
      { role: "WhatsApp Conversion", feature: "URI-encoded deep links pre-filling exact product name, category, and buyer intent" },
      { role: "Asset Pipeline", feature: "Next-gen WebP compression & native lazy-loading for sub-second mobile First Contentful Paint" }
    ],
    architecture: {
      overview: "Static-first React architecture deployed on a global edge CDN with custom DNS, pairing instant client-side catalog filtering with deep-linked WhatsApp Business API conversion intents.",
      nodes: [
        { id: "cdn", title: "Custom Domain & Edge CDN", tech: "sriadithyafurniture.com", detail: "Brotli/Gzip asset delivery & SSL termination" },
        { id: "catalog", title: "React Responsive Catalog", tech: "React.js + Tailwind CSS", detail: "Zero-latency category filtering across 20+ SKUs" },
        { id: "media", title: "Optimized Media Pipeline", tech: "WebP + Lazy Hydration", detail: "~80% image payload reduction vs raw JPEG" },
        { id: "wa", title: "WhatsApp Intent Router", tech: "wa.me Deep-Link Protocol", detail: "Pre-formatted SKU inquiry payload generation" }
      ],
      tradeoffs: [
        {
          decision: "Direct WhatsApp Conversion vs Traditional Cart Checkout",
          rationale: "Custom furniture buyers require dimension/fabric consultation before purchase. Replacing a multi-step login/cart form with 1-click SKU-prefilled WhatsApp intents increased direct customer inquiries significantly."
        },
        {
          decision: "Aggressive WebP & Aspect-Ratio Reservation",
          rationale: "Furniture catalogs are image-heavy. Enforcing explicit aspect-ratio containers and WebP encoding eliminated Cumulative Layout Shift (CLS = 0) and cut load time by ~80%."
        }
      ]
    },
    databaseSchema: [
      {
        collection: "catalog_items (Structured Product Schema)",
        indexes: ["Client-side indexed by category & featured rank"],
        fields: [
          { name: "sku", type: "String", desc: "Unique retail product code (e.g., SAF-SOFA-01)" },
          { name: "title", type: "String", desc: "Commercial display name" },
          { name: "category", type: "Enum[Living, Bedroom, Dining, Office, Custom]", desc: "Filter taxonomy key" },
          { name: "dimensions", type: "String", desc: "Standardized physical specs" },
          { name: "imageWebp", type: "String (Asset URI)", desc: "Compressed WebP asset path" }
        ]
      }
    ],
    codeSnippet: {
      filename: "src/utils/whatsappConversion.js",
      language: "javascript",
      description: "Deterministic WhatsApp Business intent generator with URI-encoded SKU metadata and fallback handling.",
      code: `export function buildWhatsAppInquiryUrl(product, customerNote = '') {
  const retailerPhone = '917661822103';
  const lines = [
    'Hello Sri Adithya Furniture,',
    '',
    \`I would like to inquire about the following item:\`,
    \`• Product: \${product.title}\`,
    \`• SKU Code: \${product.sku}\`,
    \`• Category: \${product.category}\`,
    customerNote ? \`• Custom Note: \${customerNote}\` : null,
    '',
    'Please share availability and pricing details.'
  ].filter(Boolean);

  const encodedText = encodeURIComponent(lines.join('\\n'));
  return \`https://wa.me/\${retailerPhone}?text=\${encodedText}\`;
}`
    },
    githubUrl: null,
    liveUrl: "https://sriadithyafurniture.com"
  }
];

export const skillsData = [
  // Languages
  {
    name: "JavaScript (ES6+)",
    category: "languages",
    iconKey: "JavaScriptIcon",
    tier: "Core Production",
    desc: "Asynchronous event loops, closures, lexical scoping, Promises, and functional state patterns.",
    usedIn: [
      { projectId: "campus-eats", label: "CampusEats" },
      { projectId: "process-optima", label: "ProcessOptima" },
      { projectId: "sri-adithya-furniture", label: "Sri Adithya" }
    ]
  },
  {
    name: "Python",
    category: "languages",
    iconKey: "PythonIcon",
    tier: "Certified",
    desc: "Backend scripting, algorithmic problem solving, data structures, and Django MVC fundamentals.",
    usedIn: [
      { projectId: "process-optima", label: "ProcessOptima" }
    ],
    credential: "Udemy Certified"
  },
  {
    name: "C++",
    category: "languages",
    iconKey: "CppIcon",
    tier: "Certified",
    desc: "Object-oriented programming, STL containers, memory management, and algorithmic optimization.",
    usedIn: [],
    credential: "Infosys Springboard"
  },
  {
    name: "Java",
    category: "languages",
    iconKey: "JavaIcon",
    tier: "Core OOP",
    desc: "Class hierarchies, interfaces, exception handling, collections framework, and multithreading.",
    usedIn: [],
    credential: "LPU CSE Core"
  },
  {
    name: "C",
    category: "languages",
    iconKey: "CppIcon",
    tier: "Systems",
    desc: "Pointers, manual memory allocation, low-level OS process structures, and standard libraries.",
    usedIn: [
      { projectId: "process-optima", label: "ProcessOptima" }
    ]
  },

  // Frontend
  {
    name: "React.js",
    category: "frontend",
    iconKey: "ReactIcon",
    tier: "Core Production",
    desc: "Component architecture, custom hooks, Redux Toolkit state slices, and render cycle optimization.",
    usedIn: [
      { projectId: "campus-eats", label: "CampusEats" },
      { projectId: "sri-adithya-furniture", label: "Sri Adithya" }
    ]
  },
  {
    name: "Vite",
    category: "frontend",
    iconKey: "ViteIcon",
    tier: "Build System",
    desc: "ES module bundling, Rollup code-splitting, deterministic chunking, and fast HMR pipelines.",
    usedIn: [
      { projectId: "campus-eats", label: "CampusEats" },
      { projectId: "sri-adithya-furniture", label: "Sri Adithya" }
    ]
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    iconKey: "TailwindIcon",
    tier: "Design Tokens",
    desc: "Design system token architecture, responsive Bento grids, dark-mode surfaces, and zero-bloat CSS.",
    usedIn: [
      { projectId: "campus-eats", label: "CampusEats" },
      { projectId: "sri-adithya-furniture", label: "Sri Adithya" }
    ]
  },
  {
    name: "HTML5 Semantic",
    category: "frontend",
    iconKey: "HTML5Icon",
    tier: "Web Standards",
    desc: "WCAG 2.1 AA accessible DOM trees, semantic landmarks, OpenGraph metadata, and JSON-LD.",
    usedIn: [
      { projectId: "sri-adithya-furniture", label: "Sri Adithya" },
      { projectId: "process-optima", label: "ProcessOptima" }
    ]
  },
  {
    name: "CSS3 & Responsive UX",
    category: "frontend",
    iconKey: "CSS3Icon",
    tier: "Layout Engine",
    desc: "CSS Grid, Flexbox, hardware-accelerated transitions, and cross-browser mobile viewport tuning.",
    usedIn: [
      { projectId: "sri-adithya-furniture", label: "Sri Adithya" },
      { projectId: "process-optima", label: "ProcessOptima" }
    ]
  },

  // Backend & Real-Time
  {
    name: "Node.js",
    category: "backend",
    iconKey: "NodeIcon",
    tier: "Core Production",
    desc: "Non-blocking event-driven I/O, OS process telemetry daemons, crypto HMAC streams, and REST services.",
    usedIn: [
      { projectId: "campus-eats", label: "CampusEats" },
      { projectId: "process-optima", label: "ProcessOptima" }
    ]
  },
  {
    name: "Express.js",
    category: "backend",
    iconKey: "ExpressIcon",
    tier: "Core Production",
    desc: "Modular REST routing, RBAC authorization middleware, webhook signature validators, and error handlers.",
    usedIn: [
      { projectId: "campus-eats", label: "CampusEats" },
      { projectId: "process-optima", label: "ProcessOptima" }
    ]
  },
  {
    name: "Socket.IO",
    category: "backend",
    iconKey: "SocketIOIcon",
    tier: "Real-Time Bus",
    desc: "Bi-directional WebSocket channels, room-isolated event multiplexing, and automatic reconnection.",
    usedIn: [
      { projectId: "campus-eats", label: "CampusEats" }
    ]
  },

  // Databases
  {
    name: "MongoDB",
    category: "databases",
    iconKey: "MongoIcon",
    tier: "Core Production",
    desc: "Mongoose schema modeling, compound indexing, atomic findOneAndUpdate transactions, and Atlas clusters.",
    usedIn: [
      { projectId: "campus-eats", label: "CampusEats" }
    ]
  },
  {
    name: "PostgreSQL",
    category: "databases",
    iconKey: "PostgresIcon",
    tier: "Relational SQL",
    desc: "ACID relational schema design, foreign key constraints, complex JOIN queries, and indexing.",
    usedIn: []
  },
  {
    name: "MySQL",
    category: "databases",
    iconKey: "MySQLIcon",
    tier: "Relational SQL",
    desc: "Normalized relational tables, stored queries, and transactional consistency.",
    usedIn: []
  },

  // Tools & DevOps
  {
    name: "Git & GitHub",
    category: "tools",
    iconKey: "GitIcon",
    tier: "Version Control",
    desc: "Atomic commits, branch workflows, merge conflict resolution, and automated repository deployments.",
    usedIn: [
      { projectId: "campus-eats", label: "CampusEats" },
      { projectId: "process-optima", label: "ProcessOptima" }
    ]
  },
  {
    name: "Razorpay",
    category: "tools",
    iconKey: "RazorpayIcon",
    tier: "Fintech API",
    desc: "Order creation lifecycle, checkout SDK integration, and cryptographic HMAC-SHA256 webhook verification.",
    usedIn: [
      { projectId: "campus-eats", label: "CampusEats" }
    ]
  },
  {
    name: "Google OAuth 2.0",
    category: "tools",
    iconKey: "GoogleIcon",
    tier: "Identity & Auth",
    desc: "Federated identity verification, JWT session issuance, and role-bound access control.",
    usedIn: [
      { projectId: "campus-eats", label: "CampusEats" }
    ]
  },
  {
    name: "Postman",
    category: "tools",
    iconKey: "PostmanIcon",
    tier: "API Verification",
    desc: "Endpoint contract testing, webhook payload simulation, and automated status assertions.",
    usedIn: [
      { projectId: "campus-eats", label: "CampusEats" },
      { projectId: "process-optima", label: "ProcessOptima" }
    ]
  },
  {
    name: "Chart.js",
    category: "tools",
    iconKey: "ChartJSIcon",
    tier: "Data Viz",
    desc: "High-frequency canvas time-series rendering for real-time CPU and memory telemetry.",
    usedIn: [
      { projectId: "process-optima", label: "ProcessOptima" }
    ]
  },
  {
    name: "Vercel CI/CD",
    category: "tools",
    iconKey: "VercelIcon",
    tier: "Cloud Edge",
    desc: "Zero-downtime production builds, environment secret management, and edge asset caching.",
    usedIn: [
      { projectId: "campus-eats", label: "CampusEats" },
      { projectId: "sri-adithya-furniture", label: "Sri Adithya" }
    ]
  }
];

export const skills = skillsData;


export const experiences = [
  {
    id: "exp-skillcraft",
    role: "Web Development Training — Responsive Web Development",
    organization: "SkillCraft Technologies (Certified Training)",
    type: "Technical Training & Engineering",
    period: "Sep 2025 – Oct 2025",
    location: "Remote / India",
    badge: "Verified Certificate",
    metrics: ["5+ UI Components Engineered", "10+ Cross-Browser Bugs Resolved"],
    description: "Completed intensive hands-on frontend engineering training focused on responsive, production-grade web interfaces across desktop, tablet, and mobile viewports.",
    highlights: [
      "Developed responsive and user-friendly web applications using semantic HTML5, modern CSS3, and JavaScript (ES6+), ensuring consistent UI and accessibility across devices.",
      "Engineered and enhanced 5+ modular frontend components while diagnosing and resolving 10+ layout, responsiveness, styling, and cross-browser compatibility issues through systematic debugging.",
      "Optimized frontend code and static media assets to improve page load efficiency while maintaining clean, reusable, and maintainable code structure."
    ]
  },
  {
    id: "exp-waive",
    role: "Founder",
    organization: "WAIVE — University Web & AI Student Club",
    type: "Campus Technical Leadership",
    period: "Feb 2026 – Present",
    location: "Lovely Professional University, Punjab",
    badge: "Leadership",
    metrics: ["Peer Coding Workshops", "Web & AI Initiatives"],
    description: "Founded and led a university student technical club at Lovely Professional University uniting builders across full-stack web engineering and applied AI.",
    highlights: [
      "Organized peer-led workshops on MERN stack development, Git/GitHub version control workflows, and modern frontend architecture.",
      "Mentored student project teams in structuring real-world web applications, API integration, and clean deployment practices."
    ]
  }
];

export const certifications = [
  {
    id: "cert-cpp",
    title: "Programming Using C++",
    issuer: "Infosys Springboard",
    date: "Sep 2025",
    credentialCode: "INFOSYS-CPP-2025",
    topics: ["Object-Oriented Programming", "STL & Data Structures", "Memory Management", "Algorithmic Optimization"],
    verified: true
  },
  {
    id: "cert-python",
    title: "Python and Django Framework for Beginners",
    issuer: "Udemy",
    date: "Oct 2024",
    credentialCode: "UDEMY-PYDJ-2024",
    topics: ["Python Core & Scripting", "Django MVC Architecture", "ORM & Database Migrations", "RESTful Routing"],
    verified: true
  },
  {
    id: "cert-time",
    title: "Effective Time Management",
    issuer: "CodingTantra",
    date: "Mar 2024",
    credentialCode: "CT-ETM-2024",
    topics: ["Agile Sprint Planning", "Priority Matrix Execution", "Deep Work Systems"],
    verified: true
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
    status: "In Progress (2024 – 2028)",
    highlights: [
      "Core Engineering Coursework: Data Structures & Algorithms, Object-Oriented Programming (C++/Java), Database Management Systems (SQL/NoSQL), Operating Systems, and Computer Networks.",
      "Founded WAIVE (Web & AI Student Club) to foster peer-to-peer full-stack engineering.",
      "Built flagship real-time systems including CampusEats and ProcessOptima alongside academic curriculum."
    ]
  },
  {
    degree: "Intermediate Education (Class XII — MPC)",
    field: "Mathematics, Physics, and Chemistry",
    institution: "Sri Sarada Junior College",
    location: "Vijayawada, Andhra Pradesh",
    period: "Jun 2022 – Mar 2024",
    score: "Percentage: 96.6%",
    status: "Graduated with Distinction",
    highlights: [
      "Achieved 96.6% aggregate with top-tier distinction in Mathematics and Analytical Physics.",
      "Developed strong quantitative foundations in calculus, linear algebra, and discrete logic."
    ]
  },
  {
    degree: "Secondary School Certificate (Matriculation — Class X)",
    field: "General Sciences & Mathematics",
    institution: "Aravinda High School",
    location: "Vijayawada, Andhra Pradesh",
    period: "Jun 2020 – Apr 2021",
    score: "Percentage: 92.2%",
    status: "Graduated with High Honors",
    highlights: [
      "Graduated with 92.2% aggregate score.",
      "Active participant in school-level mathematics and science competitions."
    ]
  }
];
