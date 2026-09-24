import React, { useState } from 'react';
import { personalInfo, education } from '../data/portfolioData';
import { 
  BookOpenIcon, 
  AwardIcon, 
  LayersIcon, 
  CpuIcon, 
  ShieldIcon,
  CheckIcon 
} from './Icons';

export default function About() {
  const [activeTab, setActiveTab] = useState('narrative');

  return (
    <section id="about" className="py-24 relative border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="badge-subtle mb-3">
              <span>Background & Formation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Engineering Profile
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              Academic rigor, community leadership at LPU, and an obsessive focus on building resilient software.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-900 border border-zinc-800">
            <button
              onClick={() => setActiveTab('narrative')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'narrative'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Engineering Narrative
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'education'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Academic Record
            </button>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Portrait & Verified Identity */}
          <div className="lg:col-span-4 bento-card p-6 flex flex-col items-center text-center">
            <div className="w-full max-w-[240px] aspect-[4/5] rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 mb-5 relative group">
              <img
                src={personalInfo.photoPath}
                alt={personalInfo.name}
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <div className="text-xs font-semibold text-white truncate">{personalInfo.shortName}</div>
                <div className="text-[10px] font-mono text-zinc-400">LPU Computer Science</div>
              </div>
            </div>

            <h3 className="text-lg font-bold text-white tracking-tight">
              {personalInfo.name}
            </h3>
            <p className="text-xs font-mono text-zinc-400 mt-1">
              Full-Stack Software Engineer
            </p>

            <div className="w-full mt-6 pt-5 border-t border-zinc-800/80 text-left text-xs font-mono space-y-2.5">
              <div className="flex justify-between items-center text-zinc-400">
                <span className="text-zinc-500">Institution:</span>
                <span className="text-zinc-200">LPU, Punjab</span>
              </div>
              <div className="flex justify-between items-center text-zinc-400">
                <span className="text-zinc-500">Program:</span>
                <span className="text-zinc-200">B.Tech CSE (2024–28)</span>
              </div>
              <div className="flex justify-between items-center text-zinc-400">
                <span className="text-zinc-500">Current CGPA:</span>
                <span className="text-emerald-400 font-semibold">7.68 / 10.0</span>
              </div>
              <div className="flex justify-between items-center text-zinc-400">
                <span className="text-zinc-500">Intermediate:</span>
                <span className="text-emerald-400 font-semibold">96.6% Distinction</span>
              </div>
            </div>
          </div>

          {/* Right Column: Tab Content */}
          <div className="lg:col-span-8">
            {activeTab === 'narrative' ? (
              <div className="space-y-6">
                
                {/* Executive Summary */}
                <div className="bento-card p-6 sm:p-8">
                  <h3 className="text-lg font-bold text-white mb-3">
                    Systems Philosophy & Focus
                  </h3>
                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-4">
                    I believe great software is defined by clarity, predictability, and resilience under real-world traffic. My focus spans full-stack MERN architectures and low-latency Socket.IO event streams, where state synchronization and error boundaries determine user trust.
                  </p>
                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                    Rather than building surface-level clones, I focus on the hard edge cases: eliminating infinite render loops in React, handling stale closures in asynchronous state machines, and ensuring transactional consistency across third-party webhooks like Razorpay.
                  </p>
                </div>

                {/* WAIVE Club Leadership Spotlight */}
                <div className="bento-card p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">
                        Campus Leadership
                      </span>
                      <h3 className="text-lg font-bold text-white">
                        WAIVE — University Student Club
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-zinc-400">
                      Feb 2026 – Present
                    </span>
                  </div>

                  <p className="text-xs font-mono text-zinc-400 mb-4">
                    Founder | Lovely Professional University
                  </p>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    Founded WAIVE as a student club at Lovely Professional University to bridge classroom theory with hands-on software development. Built a vibrant peer developer community focused on full-stack web architectures, modern tooling, and emerging AI integrations.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-zinc-800">
                    <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/80">
                      <div className="text-xs font-semibold text-zinc-200">Peer Workshops</div>
                      <div className="text-[11px] text-zinc-500 mt-1">Organized hands-on MERN & Git bootcamps</div>
                    </div>
                    <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/80">
                      <div className="text-xs font-semibold text-zinc-200">Hackathon Teams</div>
                      <div className="text-[11px] text-zinc-500 mt-1">Mentored collaborative project building</div>
                    </div>
                    <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/80">
                      <div className="text-xs font-semibold text-zinc-200">Open Source</div>
                      <div className="text-[11px] text-zinc-500 mt-1">Promoted transparent coding workflows</div>
                    </div>
                  </div>
                </div>

              </div>
            ) : (
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="bento-card p-6">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-white">
                          {edu.degree}
                        </h4>
                        <div className="text-xs font-semibold text-zinc-300 mt-0.5">
                          {edu.institution} — <span className="text-zinc-400 font-normal">{edu.location}</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-mono text-zinc-400 block">{edu.period}</span>
                        <span className="text-xs font-mono text-emerald-400 font-semibold block mt-0.5">{edu.score}</span>
                      </div>
                    </div>

                    <div className="text-xs text-zinc-400 font-mono mb-3">
                      Field: {edu.field}
                    </div>

                    <ul className="space-y-1.5 pt-3 border-t border-zinc-800/80 text-xs text-zinc-400">
                      {edu.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckIcon className="w-3.5 h-3.5 text-zinc-500 mt-0.5 flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
