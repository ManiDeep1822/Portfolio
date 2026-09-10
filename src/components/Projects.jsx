import React, { useState } from 'react';
import { ExternalLink, Sparkles, Layers, ShieldAlert, CheckCircle2, ChevronRight, Activity, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [activeRoleModal, setActiveRoleModal] = useState(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FEATURED ENGINEERING PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
            Production & Real-World <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Real systems engineered with modern frontend architectures, sub-second WebSocket synchronization, and client delivery.
          </p>
        </div>

        {/* Projects Stack */}
        <div className="space-y-12">
          {projects.map((proj, idx) => (
            <div
              key={proj.id}
              className="glass-card p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/10 hover:border-emerald-500/30 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Background gradient hint */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                {/* Left Column: Title, Subtitle, Tech, Metrics */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full">
                  <div>
                    {/* Badge & Timeline */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                        {proj.badge}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {proj.period}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display group-hover:text-emerald-300 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-sm font-medium text-cyan-400 mt-1 mb-4">
                      {proj.subtitle}
                    </p>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {proj.summary}
                    </p>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {proj.metrics.map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="p-3 rounded-xl bg-white/[0.03] border border-white/10"
                        >
                          <div className="text-xs text-slate-400 font-mono">{m.label}</div>
                          <div className="text-sm font-bold text-white mt-0.5">{m.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Links */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-cyber-secondary flex items-center gap-2 px-4 py-2.5 text-xs uppercase tracking-wider font-bold whitespace-nowrap flex-shrink-0"
                      >
                        <GithubIcon className="w-4 h-4 flex-shrink-0" />
                        <span className="whitespace-nowrap">Source Code</span>
                      </a>
                    )}

                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-cyber-primary flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-bold whitespace-nowrap flex-shrink-0"
                      >
                        <span className="whitespace-nowrap">Live Preview</span>
                        <ArrowUpRight className="w-4 h-4 flex-shrink-0" />
                      </a>
                    )}

                    {/* Interactive Role Breakdown Trigger */}
                    <button
                      onClick={() => setActiveRoleModal(activeRoleModal === proj.id ? null : proj.id)}
                      className="px-3 py-2 rounded-xl text-xs font-mono text-slate-400 hover:text-emerald-300 hover:bg-white/5 transition-all whitespace-nowrap flex-shrink-0"
                    >
                      {activeRoleModal === proj.id ? 'Hide Architecture' : 'View Architecture'}
                    </button>
                  </div>
                </div>

                {/* Right Column: Deep Engineering Highlights & Tech Pills */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Key Engineering Achievements:</span>
                    </h4>

                    {/* Detailed Resume Bullets */}
                    <div className="space-y-3">
                      {proj.bullets.map((bullet, bIdx) => (
                        <div
                          key={bIdx}
                          className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 text-sm text-slate-300 leading-relaxed flex items-start gap-3 hover:border-emerald-500/20 transition-colors"
                        >
                          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 mt-2 flex-shrink-0" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* Interactive Architecture Dropdown / View */}
                    {activeRoleModal === proj.id && (
                      <div className="mt-4 p-5 rounded-2xl bg-[#090d16] border border-emerald-500/30 animate-fadeIn">
                        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-3">
                          <Layers className="w-4 h-4" />
                          <span>System Architecture & Role Workflows:</span>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {proj.roleBreakdown.map((r, rIdx) => (
                            <div key={rIdx} className="p-3 rounded-xl bg-slate-900/80 border border-white/10">
                              <span className="text-xs font-bold text-white font-mono">{r.role}</span>
                              <p className="text-xs text-slate-400 mt-1">{r.feature}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="text-xs font-mono text-slate-400 mb-2">Technologies Used:</div>
                    <div className="flex flex-wrap gap-2">
                      {proj.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white/[0.04] text-slate-300 border border-white/10 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
