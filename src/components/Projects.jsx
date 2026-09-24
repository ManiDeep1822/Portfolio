import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { 
  ArrowUpRight, 
  GithubIcon, 
  ExternalLink,
  ReactIcon,
  NodeIcon,
  ExpressIcon,
  MongoIcon,
  SocketIOIcon,
  RazorpayIcon,
  GoogleIcon,
  TailwindIcon,
  ChartJSIcon,
  JavaScriptIcon,
  HTML5Icon,
  CSS3Icon,
  WhatsAppIcon,
  ActivityIcon,
  ShieldIcon,
  LayersIcon,
  CheckIcon
} from './Icons';

export default function Projects() {
  const [selectedRole, setSelectedRole] = useState(0);
  const [anomalySeverity, setAnomalySeverity] = useState('Medium');
  const [exportNotice, setExportNotice] = useState(false);

  const campusEats = projects.find(p => p.id === 'campus-eats');
  const sriAdithya = projects.find(p => p.id === 'sri-adithya-furniture');
  const processOptima = projects.find(p => p.id === 'process-optima');

  const handleExportJSON = () => {
    setExportNotice(true);
    setTimeout(() => setExportNotice(false), 2500);
  };

  return (
    <section id="projects" className="py-24 relative border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="badge-subtle mb-3">
              <span>Featured Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Selected Case Studies
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              Real-world systems engineered with modern architectures, verified benchmarks, and zero compromise on stability.
            </p>
          </div>

          <a
            href="https://github.com/ManiDeep1822"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <span>View All Repositories on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Flagship CampusEats (Spans 12 columns / Full Width Bento) */}
          <div className="lg:col-span-12 bento-card p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              {/* Header Badges & Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Flagship System
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">
                    {campusEats.period}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {campusEats.githubUrl && (
                    <a
                      href={campusEats.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                      title="Source Code"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {campusEats.liveUrl && (
                    <a
                      href={campusEats.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 text-zinc-950 font-semibold text-xs hover:bg-white transition-colors"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                {campusEats.title} — {campusEats.subtitle}
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-3xl mb-8">
                {campusEats.summary}
              </p>

              {/* Interactive Role Switcher & Inspector */}
              <div className="mb-8 p-4 sm:p-5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
                  Multi-Role Architecture Inspector (Click Role to Inspect):
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                  {campusEats.roleBreakdown.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedRole(idx)}
                      className={`px-3 py-2 rounded-lg text-xs font-medium text-left transition-all ${
                        selectedRole === idx
                          ? 'bg-zinc-800 text-white border border-zinc-700 shadow-sm'
                          : 'bg-zinc-950/60 text-zinc-400 border border-zinc-800/80 hover:text-zinc-200'
                      }`}
                    >
                      <div className="font-semibold">{item.role}</div>
                      <div className="text-[10px] text-zinc-500 truncate">Portal {idx + 1}</div>
                    </button>
                  ))}
                </div>

                <div className="p-3.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300 flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">➜</span>
                  <div>
                    <span className="text-white font-semibold">{campusEats.roleBreakdown[selectedRole].role}: </span>
                    <span className="text-zinc-400">{campusEats.roleBreakdown[selectedRole].feature}</span>
                  </div>
                </div>
              </div>

              {/* Hard Engineering Challenges Solved */}
              <div className="mb-8">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
                  Production Engineering Challenges Solved:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {campusEats.bullets.map((bullet, idx) => (
                    <div key={idx} className="p-3.5 rounded-lg bg-zinc-900/40 border border-zinc-800/60 text-xs text-zinc-300 flex flex-col justify-between">
                      <div className="leading-relaxed mb-2">{bullet}</div>
                      <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono">
                        <CheckIcon className="w-3 h-3" />
                        <span>Resolved in Production</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tech Stack Logos Bar */}
            <div className="pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-zinc-500 mr-2">Stack:</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
                  <ReactIcon className="w-3.5 h-3.5" colored={true} /> React.js
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
                  <NodeIcon className="w-3.5 h-3.5" colored={true} /> Node.js
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
                  <ExpressIcon className="w-3.5 h-3.5" /> Express
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
                  <MongoIcon className="w-3.5 h-3.5" colored={true} /> MongoDB
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
                  <SocketIOIcon className="w-3.5 h-3.5" /> Socket.IO
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
                  <RazorpayIcon className="w-3.5 h-3.5" colored={true} /> Razorpay
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
                  <GoogleIcon className="w-3.5 h-3.5" /> Google OAuth
                </span>
              </div>

              <div className="text-xs font-mono text-zinc-500">
                Sub-100ms Socket Latency
              </div>
            </div>
          </div>

          {/* Card 2: ProcessOptima (Spans 6 columns) */}
          <div className="lg:col-span-6 bento-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    AI & Telemetry
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">
                    {processOptima.period}
                  </span>
                </div>

                {processOptima.githubUrl && (
                  <a
                    href={processOptima.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
                    title="GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {processOptima.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                {processOptima.summary}
              </p>

              {/* Anomaly Detection Engine Simulator */}
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 mb-6">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-zinc-400">Heuristic Engine Status:</span>
                  <div className="flex items-center gap-1">
                    {['Normal', 'Medium', 'Critical'].map(level => (
                      <button
                        key={level}
                        onClick={() => setAnomalySeverity(level)}
                        className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-all ${
                          anomalySeverity === level
                            ? level === 'Normal' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                              : level === 'Medium' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                              : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                            : 'bg-zinc-950 text-zinc-500 border border-zinc-800'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded bg-zinc-950 border border-zinc-800 text-xs font-mono">
                  <div className="text-zinc-300 font-semibold mb-1">
                    {anomalySeverity === 'Normal' && '● 214 processes sampled. Zero memory leak anomalies detected.'}
                    {anomalySeverity === 'Medium' && '▲ Thread contention spike detected on PID 4192 (node daemon).'}
                    {anomalySeverity === 'Critical' && '✖ Memory leak threshold exceeded: Heap usage > 92% in WorkerPool.'}
                  </div>
                  <div className="text-[11px] text-zinc-500">
                    Recommendation: {anomalySeverity === 'Normal' ? 'Maintain current sampling interval.' : 'Trigger auto-garbage collection and export diagnostic snapshot.'}
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-500">200+ Concurrent OS Metrics</span>
                  <button
                    onClick={handleExportJSON}
                    className="text-[11px] font-mono text-zinc-300 hover:text-white underline focus:outline-none"
                  >
                    {exportNotice ? 'Diagnostic Snapshot Copied!' : 'Export JSON Diagnostic Report'}
                  </button>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {processOptima.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
                    <div className="text-base font-bold text-white">{m.value}</div>
                    <div className="text-[11px] text-zinc-500 font-mono">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Bar */}
            <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300">
                <NodeIcon className="w-3 h-3" colored={true} /> Node.js
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300">
                <JavaScriptIcon className="w-3 h-3" colored={true} /> JavaScript
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300">
                <ChartJSIcon className="w-3 h-3" colored={true} /> Chart.js
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300">
                REST APIs
              </span>
            </div>
          </div>

          {/* Card 3: Sri Adithya Furniture (Spans 6 columns) */}
          <div className="lg:col-span-6 bento-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    Commercial Client Delivery
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">
                    {sriAdithya.period}
                  </span>
                </div>

                {sriAdithya.liveUrl && (
                  <a
                    href={sriAdithya.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-xs font-semibold text-zinc-300 hover:text-white"
                  >
                    <span>sriadithyafurniture.com</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {sriAdithya.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                {sriAdithya.summary}
              </p>

              {/* Real World Impact Showcase */}
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 mb-6">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
                  Production Impact & Optimization:
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="p-3 rounded bg-zinc-950 border border-zinc-800">
                    <div className="text-xl font-bold text-emerald-400">~80%</div>
                    <div className="text-[11px] text-zinc-400">Load Time Reduction</div>
                    <div className="text-[10px] text-zinc-500 mt-0.5">WebP asset compression</div>
                  </div>
                  <div className="p-3 rounded bg-zinc-950 border border-zinc-800">
                    <div className="text-xl font-bold text-white">20+</div>
                    <div className="text-[11px] text-zinc-400">Curated Products</div>
                    <div className="text-[10px] text-zinc-500 mt-0.5">Mobile-first catalog</div>
                  </div>
                </div>

                <div className="p-3 rounded bg-zinc-950 border border-zinc-800 text-xs font-mono flex items-center justify-between">
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" colored={true} />
                    WhatsApp Direct Inquiry
                  </span>
                  <span className="text-emerald-400 font-semibold">1-Click Conversion</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2 mb-6 text-xs text-zinc-300">
                {sriAdithya.bullets.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-zinc-500 mt-0.5">▪</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Bar */}
            <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300">
                <ReactIcon className="w-3 h-3" colored={true} /> React.js
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300">
                <TailwindIcon className="w-3 h-3" colored={true} /> Tailwind CSS
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300">
                <WhatsAppIcon className="w-3 h-3" colored={true} /> WhatsApp API
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300">
                Custom Domain
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
