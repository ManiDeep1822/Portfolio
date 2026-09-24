import React, { useState } from 'react';
import { 
  ReactIcon,
  NodeIcon,
  ExpressIcon,
  MongoIcon,
  PostgresIcon,
  MySQLIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  PythonIcon,
  CppIcon,
  JavaIcon,
  SocketIOIcon,
  RazorpayIcon,
  GoogleIcon,
  GitIcon,
  GithubIcon,
  PostmanIcon,
  ViteIcon,
  TailwindIcon,
  ChartJSIcon,
  HTML5Icon,
  CSS3Icon,
  VercelIcon,
  TerminalIcon,
  DatabaseIcon,
  LayersIcon,
  CpuIcon,
  ShieldIcon
} from './Icons';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & Real-Time' },
    { id: 'databases', label: 'Databases' },
    { id: 'tools', label: 'Tools & DevOps' },
  ];

  const skillList = [
    // Languages
    { name: 'JavaScript (ES6+)', category: 'languages', icon: JavaScriptIcon, tag: 'Primary', desc: 'Modern async/await, closures, event loop, functional patterns' },
    { name: 'Python', category: 'languages', icon: PythonIcon, tag: 'Scripting & AI', desc: 'Automation, data parsing, Django backend foundations' },
    { name: 'C++', category: 'languages', icon: CppIcon, tag: 'Certified', desc: 'Data structures, memory allocation, algorithms (Infosys certified)' },
    { name: 'Java', category: 'languages', icon: JavaIcon, tag: 'Core OOP', desc: 'Object-oriented architecture, design patterns, multithreading' },
    { name: 'C', category: 'languages', icon: CppIcon, tag: 'Systems', desc: 'Pointers, low-level OS memory, standard library' },

    // Frontend
    { name: 'React.js', category: 'frontend', icon: ReactIcon, tag: 'Primary UI', desc: 'Hooks, custom state machines, component lifecycle, virtual DOM' },
    { name: 'Vite', category: 'frontend', icon: ViteIcon, tag: 'Bundler', desc: 'Ultra-fast HMR, Rollup chunk optimization, tree shaking' },
    { name: 'Tailwind CSS', category: 'frontend', icon: TailwindIcon, tag: 'Design System', desc: 'Utility-first architectures, responsive grids, custom theme tokens' },
    { name: 'HTML5 Semantic', category: 'frontend', icon: HTML5Icon, tag: 'Web Standards', desc: 'Accessible DOM semantics, WCAG compliance, SEO optimization' },
    { name: 'CSS3 & Modern UX', category: 'frontend', icon: CSS3Icon, tag: 'Styling', desc: 'Flexbox, Grid, keyframe animations, media queries' },

    // Backend & Real-Time
    { name: 'Node.js', category: 'backend', icon: NodeIcon, tag: 'Runtime', desc: 'Event-driven asynchronous I/O, streams, child processes, microservices' },
    { name: 'Express.js', category: 'backend', icon: ExpressIcon, tag: 'REST Framework', desc: 'Middleware pipelines, route handlers, error barriers, JWT auth' },
    { name: 'Socket.IO', category: 'backend', icon: SocketIOIcon, tag: 'WebSockets', desc: 'Bi-directional low-latency event communication, room multiplexing' },
    { name: 'REST Architecture', category: 'backend', icon: TerminalIcon, tag: 'API Design', desc: 'Stateless endpoints, idempotency, status codes, payload contracts' },

    // Databases
    { name: 'MongoDB', category: 'databases', icon: MongoIcon, tag: 'NoSQL', desc: 'Document schemas, aggregation pipelines, indexing, Atlas clustering' },
    { name: 'PostgreSQL', category: 'databases', icon: PostgresIcon, tag: 'SQL Relational', desc: 'ACID transactions, relational normalization, complex JOINs' },
    { name: 'MySQL', category: 'databases', icon: MySQLIcon, tag: 'RDBMS', desc: 'Relational database management, foreign key integrity' },

    // Tools & DevOps
    { name: 'Git & GitHub', category: 'tools', icon: GitIcon, tag: 'Version Control', desc: 'Branching strategies, interactive rebasing, PR workflows, CI hooks' },
    { name: 'Postman', category: 'tools', icon: PostmanIcon, tag: 'API Testing', desc: 'Automated test assertions, collection runners, environment variables' },
    { name: 'Razorpay', category: 'tools', icon: RazorpayIcon, tag: 'Payment Gateway', desc: 'Server-side order creation, webhook verification, signature audits' },
    { name: 'Google OAuth 2.0', category: 'tools', icon: GoogleIcon, tag: 'Identity & Auth', desc: 'Token validation, consent flows, secure user session management' },
    { name: 'Vercel Deployment', category: 'tools', icon: VercelIcon, tag: 'Hosting & CI', desc: 'Automated build pipeline optimization, edge caching, env configs' },
    { name: 'Chart.js', category: 'tools', icon: ChartJSIcon, tag: 'Data Viz', desc: 'Real-time telemetry trend graphs, dynamic data streaming' }
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillList
    : skillList.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="badge-subtle mb-3">
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Skills & Technologies
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              Curated tools and technologies with authentic vector representations, battle-tested across client and systems projects.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-zinc-900 border border-zinc-800">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-zinc-800 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill, idx) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-all hover:bg-zinc-900/80 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
                      <IconComponent className="w-5 h-5 text-zinc-300 group-hover:text-white" colored={true} />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-400">
                      {skill.tag}
                    </span>
                  </div>

                  <h3 className="text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span className="capitalize">{skill.category}</span>
                  <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Computer Science Foundation Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="text-sm font-semibold text-zinc-200 mb-1 flex items-center gap-2">
              <CpuIcon className="w-4 h-4 text-zinc-400" />
              <span>Core Computer Science Foundation</span>
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Formal academic training in Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Management Systems, and Operating Systems at Lovely Professional University.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
              DSA
            </span>
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
              OOP Concepts
            </span>
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
              OS Fundamentals
            </span>
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
              DBMS Normalization
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
