import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { useEnterprise } from '../context/EnterpriseContext';
import {
  ArrowUpRight,
  GithubIcon,
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
  WhatsAppIcon,
  LayersIcon,
  CheckIcon,
  DatabaseIcon,
  CodeIcon
} from './Icons';

export default function Projects() {
  const { openCaseStudy, addToast } = useEnterprise();
  const [selectedRole, setSelectedRole] = useState(0);
  const [anomalySeverity, setAnomalySeverity] = useState('Medium');

  const campusEats = projects.find((p) => p.id === 'campus-eats');
  const sriAdithya = projects.find((p) => p.id === 'sri-adithya-furniture');
  const processOptima = projects.find((p) => p.id === 'process-optima');

  const handleExportJSON = () => {
    const diagnosticPayload = JSON.stringify(
      {
        system: 'ProcessOptima',
        adr: 'ADR-002',
        sampledProcesses: 214,
        severity: anomalySeverity,
        timestamp: new Date().toISOString(),
        recommendation:
          anomalySeverity === 'Normal'
            ? 'Maintain 1000ms sampling interval'
            : 'Trigger GC sweep and isolate PID 4192'
      },
      null,
      2
    );
    navigator.clipboard?.writeText(diagnosticPayload);
    addToast({
      title: 'Diagnostic JSON Snapshot Copied',
      description: `Exported ProcessOptima (${anomalySeverity}) telemetry payload to clipboard.`,
      category: 'TELEMETRY_EXPORT',
      status: 'emerald'
    });
  };

  return (
    <section id="projects" className="py-28 relative border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="badge-subtle mb-4 py-1.5 px-3.5">
              <span>Production Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Selected Engineering Work
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
              Production systems engineered with real-time architectures, documented design decisions, database schemas, and verified benchmarks.
            </p>
          </div>

          <a
            href="https://github.com/ManiDeep1822"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
          >
            <span>View All Repositories on GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Card 1: Flagship CampusEats (Spans 12 columns / Full Width Bento) */}
          <div className="lg:col-span-12 bento-card p-7 sm:p-10 flex flex-col justify-between">
            <div>
              {/* Header Badges & Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-7">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                    Flagship Production System
                  </span>
                  <span className="text-xs text-zinc-400">
                    {campusEats.period}
                  </span>
                  <span className="hidden sm:inline text-zinc-700">|</span>
                  <span className="hidden sm:inline text-xs text-zinc-400">
                    {campusEats.category}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => openCaseStudy('campus-eats')}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 text-xs font-semibold transition-all"
                  >
                    <LayersIcon className="w-3.5 h-3.5" />
                    <span>Inspect Architecture Spec</span>
                  </button>

                  {campusEats.githubUrl && (
                    <a
                      href={campusEats.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
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
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-100 text-zinc-950 font-semibold text-xs hover:bg-white transition-colors"
                    >
                      <span>Live Production</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
                {campusEats.title} — {campusEats.subtitle}
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-3xl mb-8">
                {campusEats.summary}
              </p>

              {/* Interactive Role Switcher & Inspector */}
              <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/90">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="text-xs font-medium text-zinc-300">
                    Multi-Role Portal Architecture (Select a role to inspect):
                  </div>
                  <button
                    type="button"
                    onClick={() => openCaseStudy('campus-eats')}
                    className="text-xs font-medium text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5"
                  >
                    <DatabaseIcon className="w-3.5 h-3.5" />
                    <span>View Database Schema & Code →</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                  {campusEats.roleBreakdown.map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedRole(idx)}
                      className={`p-3.5 rounded-xl text-xs font-medium text-left transition-all ${
                        selectedRole === idx
                          ? 'bg-zinc-800 text-white border border-zinc-700 shadow-sm'
                          : 'bg-zinc-950/60 text-zinc-400 border border-zinc-800/80 hover:text-zinc-200'
                      }`}
                    >
                      <div className="font-semibold text-sm">{item.role}</div>
                      <div className="text-[11px] text-zinc-500 mt-0.5">
                        Isolated Role Portal
                      </div>
                    </button>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/90 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  <span className="text-white font-semibold">
                    {campusEats.roleBreakdown[selectedRole].role} Portal:{' '}
                  </span>
                  <span className="text-zinc-400">
                    {campusEats.roleBreakdown[selectedRole].feature}
                  </span>
                </div>
              </div>

              {/* Engineering Challenges Solved */}
              <div className="mb-8">
                <div className="text-xs font-medium text-zinc-400 mb-4">
                  Key Production Engineering Highlights
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {campusEats.bullets.map((bullet, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/70 text-xs sm:text-sm text-zinc-300 flex flex-col justify-between"
                    >
                      <div className="leading-relaxed mb-4">{bullet}</div>
                      <div className="flex items-center justify-between text-xs text-emerald-400 pt-3 border-t border-zinc-800/60">
                        <span className="flex items-center gap-1.5 font-medium">
                          <CheckIcon className="w-3.5 h-3.5" />
                          <span>Verified in Production</span>
                        </span>
                        <button
                          type="button"
                          onClick={() => openCaseStudy('campus-eats')}
                          className="text-zinc-400 hover:text-white underline"
                        >
                          Read Spec
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tech Stack Logos Bar */}
            <div className="pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
                  <ReactIcon className="w-3.5 h-3.5" colored /> React.js
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
                  <NodeIcon className="w-3.5 h-3.5" colored /> Node.js
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
                  <ExpressIcon className="w-3.5 h-3.5" /> Express.js
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
                  <MongoIcon className="w-3.5 h-3.5" colored /> MongoDB
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
                  <SocketIOIcon className="w-3.5 h-3.5" /> Socket.IO
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
                  <RazorpayIcon className="w-3.5 h-3.5" colored /> Razorpay
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
                  <GoogleIcon className="w-3.5 h-3.5" /> Google OAuth
                </span>
              </div>

              <button
                type="button"
                onClick={() => openCaseStudy('campus-eats')}
                className="text-xs font-medium text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5"
              >
                <CodeIcon className="w-3.5 h-3.5" />
                <span>Inspect Production Code →</span>
              </button>
            </div>
          </div>

          {/* Card 2: ProcessOptima (Spans 6 columns) */}
          <div className="lg:col-span-6 bento-card p-7 sm:p-9 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    Systems Telemetry
                  </span>
                  <span className="text-xs text-zinc-400">
                    {processOptima.period}
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => openCaseStudy('process-optima')}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 text-xs font-medium transition-colors"
                  >
                    <LayersIcon className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Inspect Spec</span>
                  </button>
                  {processOptima.githubUrl && (
                    <a
                      href={processOptima.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 tracking-tight">
                {processOptima.title} — {processOptima.subtitle}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {processOptima.summary}
              </p>

              {/* Anomaly Detection Engine Simulator */}
              <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/90 mb-6">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs mb-3.5">
                  <span className="text-zinc-300 font-medium">
                    Heuristic Engine Simulator:
                  </span>
                  <div className="flex items-center gap-1.5">
                    {['Normal', 'Medium', 'Critical'].map((level) => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setAnomalySeverity(level)}
                        className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                          anomalySeverity === level
                            ? level === 'Normal'
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                              : level === 'Medium'
                              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                              : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                            : 'bg-zinc-950 text-zinc-500 border border-zinc-800'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-xs">
                  <div className="text-zinc-200 font-semibold mb-1.5">
                    {anomalySeverity === 'Normal' &&
                      '214 processes sampled. Zero memory leak anomalies detected.'}
                    {anomalySeverity === 'Medium' &&
                      'Thread contention spike detected on PID 4192 (node daemon).'}
                    {anomalySeverity === 'Critical' &&
                      'Memory leak threshold exceeded: Heap usage > 92% in WorkerPool.'}
                  </div>
                  <div className="text-zinc-400 leading-relaxed">
                    Recommendation:{' '}
                    {anomalySeverity === 'Normal'
                      ? 'Maintain current sampling interval.'
                      : 'Trigger auto-garbage collection and export diagnostic snapshot.'}
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="text-zinc-500">200+ Concurrent OS Metrics</span>
                  <button
                    type="button"
                    onClick={handleExportJSON}
                    className="text-cyan-400 hover:text-cyan-300 font-medium underline focus:outline-none"
                  >
                    Export JSON Diagnostic Report
                  </button>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {processOptima.metrics.slice(0, 2).map((m, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60"
                  >
                    <div className="text-lg font-bold text-white">{m.value}</div>
                    <div className="text-xs text-zinc-500 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack & ADR Footer */}
            <div className="pt-5 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
                  <NodeIcon className="w-3.5 h-3.5" colored /> Node.js
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
                  <JavaScriptIcon className="w-3.5 h-3.5" colored /> JavaScript
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
                  <ChartJSIcon className="w-3.5 h-3.5" colored /> Chart.js
                </span>
              </div>
              <button
                type="button"
                onClick={() => openCaseStudy('process-optima')}
                className="text-xs font-medium text-cyan-400 hover:underline"
              >
                Open Architecture Spec →
              </button>
            </div>
          </div>

          {/* Card 3: Sri Adithya Furniture (Spans 6 columns) */}
          <div className="lg:col-span-6 bento-card p-7 sm:p-9 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    Commercial Client Delivery
                  </span>
                  <span className="text-xs text-zinc-400">
                    {sriAdithya.period}
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => openCaseStudy('sri-adithya-furniture')}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 text-xs font-medium transition-colors"
                  >
                    <LayersIcon className="w-3.5 h-3.5 text-amber-400" />
                    <span>Inspect Spec</span>
                  </button>
                  {sriAdithya.liveUrl && (
                    <a
                      href={sriAdithya.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-100 text-zinc-950 text-xs font-semibold hover:bg-white"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 tracking-tight">
                {sriAdithya.title} — {sriAdithya.subtitle}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {sriAdithya.summary}
              </p>

              {/* Real World Impact Showcase */}
              <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/90 mb-6">
                <div className="text-xs font-medium text-zinc-300 mb-3.5">
                  Production Impact & Optimization
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                    <div className="text-xl font-bold text-emerald-400">~80%</div>
                    <div className="text-xs text-zinc-300 mt-0.5">Load Time Reduction</div>
                    <div className="text-[11px] text-zinc-500 mt-0.5">
                      WebP asset compression
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                    <div className="text-xl font-bold text-white">20+</div>
                    <div className="text-xs text-zinc-300 mt-0.5">Curated SKUs</div>
                    <div className="text-[11px] text-zinc-500 mt-0.5">
                      Mobile-first catalog
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs flex items-center justify-between">
                  <span className="text-zinc-300 flex items-center gap-2">
                    <WhatsAppIcon className="w-4 h-4 text-emerald-400" colored />
                    <span>WhatsApp SKU Deep-Linking</span>
                  </span>
                  <span className="text-emerald-400 font-semibold">1-Click Conversion</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2.5 mb-6 text-xs sm:text-sm text-zinc-300">
                {sriAdithya.bullets.slice(0, 2).map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <CheckIcon className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-1" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Bar */}
            <div className="pt-5 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
                  <ReactIcon className="w-3.5 h-3.5" colored /> React.js
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
                  <TailwindIcon className="w-3.5 h-3.5" colored /> Tailwind CSS
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
                  <WhatsAppIcon className="w-3.5 h-3.5" colored /> WhatsApp API
                </span>
              </div>

              <button
                type="button"
                onClick={() => openCaseStudy('sri-adithya-furniture')}
                className="text-xs font-medium text-amber-400 hover:underline"
              >
                Open Architecture Spec →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
