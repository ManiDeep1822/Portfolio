import React from 'react';
import { personalInfo, stats, projects } from '../data/portfolioData';
import { useEnterprise } from '../context/EnterpriseContext';
import {
  FileDown,
  ArrowUpRight,
  LayersIcon,
  CopyIcon,
  GithubIcon,
  EyeIcon,
  ChevronRightIcon
} from './Icons';

export default function Hero() {
  const {
    openCaseStudy,
    openResumeModal,
    downloadResume,
    copyEmail,
    scrollToSection
  } = useEnterprise();

  return (
    <section
      id="home"
      className="pt-36 pb-24 lg:pt-44 lg:pb-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Executive Identity & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="badge-subtle mb-7 py-1.5 px-3.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-subtle" />
              <span>{personalInfo.availability}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6">
              Engineering <span className="text-heading">real-time systems</span> with speed, scale & precision.
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl mb-10">
              I'm <span className="text-zinc-100 font-semibold">{personalInfo.name}</span>, a Computer Science & Engineering undergraduate at{' '}
              <span className="text-zinc-200">Lovely Professional University</span>. I architect high-concurrency MERN platforms, low-latency Socket.IO event streams, and resilient production web systems.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-12 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollToSection('#projects')}
                className="btn-primary px-6 py-3"
              >
                <span>Explore Case Studies</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={openResumeModal}
                className="btn-secondary px-5 py-3"
              >
                <EyeIcon className="w-4 h-4 text-zinc-300" />
                <span>Preview Resume</span>
              </button>

              <button
                type="button"
                onClick={downloadResume}
                className="btn-secondary px-5 py-3"
              >
                <FileDown className="w-4 h-4 text-zinc-300" />
                <span>Download PDF</span>
              </button>
            </div>

            {/* Verified Identity Strip */}
            <div className="flex flex-wrap items-center gap-6 pt-7 border-t border-zinc-800/80 w-full text-xs text-zinc-400">
              <button
                type="button"
                onClick={copyEmail}
                className="flex items-center gap-2 hover:text-zinc-100 transition-colors focus:outline-none group"
                title="Copy email to clipboard"
              >
                <CopyIcon className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-400" />
                <span>{personalInfo.email}</span>
              </button>

              <span className="text-zinc-800 hidden sm:inline">|</span>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-zinc-100 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-zinc-500" />
                <span>github.com/ManiDeep1822</span>
              </a>

              <span className="text-zinc-800 hidden sm:inline">|</span>

              <span className="text-zinc-500">Jalandhar, Punjab, India</span>
            </div>
          </div>

          {/* Right Column: Executive Engineering Overview Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bento-card p-6 sm:p-8 border border-zinc-800/90 shadow-2xl">
              <div className="flex items-center justify-between gap-4 pb-5 mb-5 border-b border-zinc-800/80">
                <div>
                  <span className="text-xs font-medium text-emerald-400 block mb-1">
                    Architecture Portfolio
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Executive Systems Overview
                  </h2>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  3 Production Systems
                </span>
              </div>

              <div className="space-y-3.5">
                {projects.map((proj) => (
                  <button
                    key={proj.id}
                    type="button"
                    onClick={() => openCaseStudy(proj.id)}
                    className="w-full p-4 rounded-xl bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800/90 hover:border-zinc-700 text-left transition-all group"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                          {proj.title}
                        </span>
                        <span className="text-xs text-zinc-500">
                          {proj.category}
                        </span>
                      </div>
                      <ChevronRightIcon className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" />
                    </div>

                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 mb-3">
                      {proj.subtitle} — {proj.metrics.map((m) => m.value).slice(0, 2).join(', ')}.
                    </p>

                    <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-2.5 border-t border-zinc-800/60">
                      <span className="text-zinc-400 font-medium">
                        {proj.techStack.slice(0, 4).join(' · ')}
                      </span>
                      <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                        <LayersIcon className="w-3 h-3" />
                        <span>View Spec</span>
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                <span>Click any system to inspect schema & code</span>
                <button
                  type="button"
                  onClick={() => openCaseStudy('campus-eats')}
                  className="text-white hover:text-emerald-400 font-medium transition-colors"
                >
                  Open Flagship Spec →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Benchmark Strip */}
        <div className="mt-20 pt-12 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col justify-between"
            >
              <span className="text-xs font-medium text-zinc-400 mb-2">
                {stat.label}
              </span>
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1.5">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-500 leading-relaxed">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
