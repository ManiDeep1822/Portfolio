import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { personalInfo, stats } from '../data/portfolioData';
import { 
  FileDown, 
  ArrowUpRight, 
  TerminalIcon, 
  ActivityIcon, 
  LayersIcon, 
  CheckIcon, 
  CopyIcon,
  GithubIcon,
  LinkedinIcon,
  WhatsAppIcon
} from './Icons';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('events');
  const [isSimulating, setIsSimulating] = useState(true);
  const [copied, setCopied] = useState(false);
  const [eventLogs, setEventLogs] = useState([
    { id: 1, time: '14:24:01', source: 'CampusEats.Gateway', type: 'AUTH', text: 'Google OAuth session validated [Role: Student]', status: '200 OK' },
    { id: 2, time: '14:24:03', source: 'Razorpay.Webhook', type: 'PAYMENT', text: 'Captured order payment payload [TXN_98412]', status: 'VERIFIED' },
    { id: 3, time: '14:24:04', source: 'Socket.IO:443', type: 'DISPATCH', text: 'Emitted order:incoming to Vendor [Tiffin Hub]', status: '< 85ms' },
    { id: 4, time: '14:24:06', source: 'ProcessOptima.Engine', type: 'METRIC', text: 'Heuristic anomaly scan clear (214 PID nodes)', status: 'HEALTHY' },
  ]);

  // Live simulation ticker for realism
  useEffect(() => {
    if (!isSimulating) return;

    const streamSources = [
      { source: 'Socket.IO:443', type: 'DISPATCH', text: 'Delivery partner assigned [GPS Broadcast]', status: '< 72ms' },
      { source: 'MongoReplica', type: 'DB_SYNC', text: 'Order indexed in activeOrders collection', status: 'COMMITTED' },
      { source: 'CampusEats.API', type: 'CACHE', text: 'Menu cache hit for vendor catalog', status: '304 NOT_MOD' },
      { source: 'ProcessOptima.Worker', type: 'TELEMETRY', text: 'CPU load 18.4% | RAM allocation 4.1GB', status: 'NOMINAL' },
      { source: 'Razorpay.Security', type: 'SIGNATURE', text: 'HMAC-SHA256 signature verified', status: 'SECURED' }
    ];

    let counter = 5;
    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      const randomEvent = streamSources[Math.floor(Math.random() * streamSources.length)];

      setEventLogs(prev => [
        { id: counter++, time: timeStr, ...randomEvent },
        ...prev.slice(0, 5)
      ]);
    }, 3200);

    return () => clearInterval(interval);
  }, [isSimulating]);

  const handleResumeDownload = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ffffff', '#a1a1aa', '#10b981', '#3b82f6']
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="pt-28 pb-20 lg:pt-36 lg:pb-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Brand & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="badge-subtle mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-subtle" />
              <span>Available for Software Engineering Roles & Internships</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Engineering <span className="text-heading">real-time systems</span> with speed, scale & precision.
            </h1>

            {/* Sub-narrative */}
            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl mb-8">
              I'm <span className="text-zinc-100 font-medium">{personalInfo.name}</span>, a Computer Science student at <span className="text-zinc-200">Lovely Professional University</span>. I build high-concurrency MERN platforms, event-driven Socket.IO architectures, and high-performance web products with clean systems design.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="btn-primary"
              >
                <span>View Case Studies</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Indla_Mohana_Venkata_Mani_Deep_Resume.pdf"
                onClick={handleResumeDownload}
                className="btn-secondary"
                title="Download Official Resume"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="px-4 py-2.5 text-xs sm:text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                Get In Touch →
              </a>
            </div>

            {/* Quick Contact & Verified Identity Strip */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-zinc-800/80 w-full text-xs font-mono text-zinc-400">
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 hover:text-zinc-200 transition-colors focus:outline-none"
                title="Click to copy email"
              >
                {copied ? <CheckIcon className="w-3.5 h-3.5 text-emerald-400" /> : <CopyIcon className="w-3.5 h-3.5 text-zinc-500" />}
                <span>{copied ? 'Copied to Clipboard!' : personalInfo.email}</span>
              </button>

              <span className="text-zinc-700 hidden sm:inline">|</span>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-zinc-200 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>github.com/ManiDeep1822</span>
              </a>

              <span className="text-zinc-700 hidden sm:inline">|</span>

              <span className="text-zinc-500">Jalandhar, Punjab, IN</span>
            </div>

          </div>

          {/* Right Column: Live Engineering Telemetry Terminal */}
          <div className="lg:col-span-5 w-full">
            <div className="terminal-window overflow-hidden">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/90 border-b border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs text-zinc-400 ml-2 font-mono">systems_monitor.sh</span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setIsSimulating(!isSimulating)}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700 transition-colors"
                  >
                    {isSimulating ? 'PAUSE' : 'LIVE'}
                  </button>
                </div>
              </div>

              {/* Terminal Tabs */}
              <div className="flex items-center border-b border-zinc-800/80 bg-zinc-950/60 px-3 pt-2 text-xs font-mono">
                <button
                  onClick={() => setActiveTab('events')}
                  className={`flex items-center gap-2 px-3 py-1.5 border-b-2 transition-all ${
                    activeTab === 'events'
                      ? 'border-emerald-500 text-emerald-400 bg-zinc-900/50'
                      : 'border-transparent text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <TerminalIcon className="w-3.5 h-3.5" />
                  <span>Real-Time Stream</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('architecture')}
                  className={`flex items-center gap-2 px-3 py-1.5 border-b-2 transition-all ${
                    activeTab === 'architecture'
                      ? 'border-emerald-500 text-emerald-400 bg-zinc-900/50'
                      : 'border-transparent text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <LayersIcon className="w-3.5 h-3.5" />
                  <span>Topology</span>
                </button>
              </div>

              {/* Terminal Content Body */}
              <div className="p-4 min-h-[300px] flex flex-col justify-between text-xs font-mono">
                {activeTab === 'events' ? (
                  <div className="space-y-2.5">
                    {eventLogs.map((log) => (
                      <div key={log.id} className="flex items-start justify-between gap-2 border-b border-zinc-900/80 pb-2">
                        <div className="flex flex-col gap-0.5">
                          <div className="flex items-center gap-2">
                            <span className="text-zinc-500 text-[10px]">{log.time}</span>
                            <span className="text-zinc-300 font-semibold">{log.source}</span>
                            <span className="px-1.5 py-0.2 rounded text-[10px] bg-zinc-800 text-zinc-400">
                              {log.type}
                            </span>
                          </div>
                          <span className="text-zinc-400 text-[11px] leading-tight mt-0.5">{log.text}</span>
                        </div>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded whitespace-nowrap ${
                          log.status.includes('OK') || log.status.includes('VERIFIED') || log.status.includes('HEALTHY') || log.status.includes('ms')
                            ? 'text-emerald-400 bg-emerald-500/10'
                            : 'text-zinc-400 bg-zinc-800'
                        }`}>
                          {log.status}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4 py-2">
                    <div className="text-[11px] text-zinc-400">
                      // CampusEats Distributed Stack Topology
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2.5 rounded bg-zinc-900/80 border border-zinc-800">
                        <div className="text-zinc-400 font-semibold mb-1">Client Interface</div>
                        <div className="text-zinc-500">React 19 + Vite SPA</div>
                        <div className="text-emerald-400 text-[10px] mt-1">● Redux Toolkit State</div>
                      </div>
                      <div className="p-2.5 rounded bg-zinc-900/80 border border-zinc-800">
                        <div className="text-zinc-400 font-semibold mb-1">WebSocket Gateway</div>
                        <div className="text-zinc-500">Socket.IO Sub-100ms</div>
                        <div className="text-emerald-400 text-[10px] mt-1">● Bi-directional Sync</div>
                      </div>
                      <div className="p-2.5 rounded bg-zinc-900/80 border border-zinc-800">
                        <div className="text-zinc-400 font-semibold mb-1">API Backend</div>
                        <div className="text-zinc-500">Node.js + Express</div>
                        <div className="text-emerald-400 text-[10px] mt-1">● 4 Role Authorization</div>
                      </div>
                      <div className="p-2.5 rounded bg-zinc-900/80 border border-zinc-800">
                        <div className="text-zinc-400 font-semibold mb-1">Persistence</div>
                        <div className="text-zinc-500">MongoDB Atlas</div>
                        <div className="text-emerald-400 text-[10px] mt-1">● Sharded Collections</div>
                      </div>
                    </div>
                    <div className="p-2.5 rounded bg-zinc-900/50 border border-zinc-800/80 text-[11px] text-zinc-400 flex items-center justify-between">
                      <span>Live Health Status:</span>
                      <span className="text-emerald-400 font-semibold">99.9% Uptime across nodes</span>
                    </div>
                  </div>
                )}

                {/* Terminal Footer status line */}
                <div className="pt-3 mt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Listening on port 443 (TLS v1.3)
                  </span>
                  <span>4 active channels</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Core Metrics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-zinc-800/80">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-zinc-300">
                {stat.label}
              </span>
              <span className="text-[11px] text-zinc-500 mt-0.5">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
