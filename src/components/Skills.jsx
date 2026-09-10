import React, { useState } from 'react';
import { Sparkles, Code2, Server, Database, Wrench, Layers, Terminal, Cpu, Zap } from 'lucide-react';
import { skills, skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSkills = selectedCategory === 'all'
    ? skills
    : skills.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
            Comprehensive <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Engineered across robust languages, real-time protocols, resilient databases, and modern creative web tooling.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-lg shadow-emerald-500/25 scale-105'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800/80 border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid with 3D Hover & Progress */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-card p-5 rounded-2xl border border-white/10 group hover:border-emerald-500/40 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle top indicator line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:text-cyan-300 group-hover:bg-emerald-500/10 transition-colors flex-shrink-0">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-white text-base group-hover:text-emerald-300 transition-colors font-display truncate">
                      {skill.name}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400 capitalize block truncate">
                      {skill.category}
                    </span>
                  </div>
                </div>

                <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 whitespace-nowrap flex-shrink-0">
                  {skill.tag}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-1.5">
                  <span>Proficiency</span>
                  <span className="text-emerald-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out group-hover:brightness-125"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Highlights Ribbon */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 bg-gradient-to-r from-emerald-950/20 via-slate-900/60 to-cyan-950/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center sm:text-left">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white font-display text-base">Real-Time Concurrency</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Socket.IO room multiplexing, bi-directional order dispatching, and sub-second live state synchronization.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white font-display text-base">Heuristic Anomaly Engine</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Rule-based anomaly detection evaluating concurrent OS process behavior with severity-ranked alerts.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white font-display text-base">MERN Full-Stack Architecture</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Scalable REST APIs, OAuth identity tokens, Razorpay checkout safety, and automated build pipelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
