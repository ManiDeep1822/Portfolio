import React from 'react';
import { experiences, certifications } from '../data/portfolioData';
import { 
  AwardIcon, 
  ShieldIcon, 
  BookOpenIcon, 
  CheckIcon,
  ExternalLink 
} from './Icons';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="badge-subtle mb-3">
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Experience & Credentials
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            Structured software development training, engineering leadership, and verified subject certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Experience Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-zinc-400" />
              <span>Professional Training & Leadership</span>
            </h3>

            <div className="space-y-4">
              {experiences.map((exp, idx) => (
                <div key={idx} className="bento-card p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">
                        {exp.badge}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-white mt-2">
                        {exp.role}
                      </h4>
                      <p className="text-xs font-semibold text-zinc-300 mt-0.5">
                        {exp.organization}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-mono text-zinc-400 block">{exp.period}</span>
                      <span className="text-[11px] font-mono text-zinc-500 block mt-0.5">{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mt-4 pt-3 border-t border-zinc-800/80">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Verified Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Verified Certifications</span>
            </h3>

            <div className="space-y-3.5">
              {certifications.map((cert, idx) => (
                <div key={idx} className="bento-card p-5 group">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 flex-shrink-0 group-hover:border-zinc-700 transition-colors">
                      <AwardIcon className="w-4 h-4 text-zinc-300 group-hover:text-white" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-bold text-white leading-tight">
                          {cert.title}
                        </h4>
                        <span className="text-[10px] font-mono text-zinc-400 whitespace-nowrap">
                          {cert.date}
                        </span>
                      </div>

                      <p className="text-xs font-medium text-zinc-300 mt-1">
                        Issued by: {cert.issuer}
                      </p>

                      <p className="text-[11px] text-zinc-500 mt-1 leading-normal font-mono">
                        Topics: {cert.topics}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Verified Credentials Callout */}
              <div className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/80 text-xs font-mono text-zinc-400 flex items-center justify-between">
                <span>Verification Authority:</span>
                <span className="text-zinc-200">Infosys & Udemy Verified</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
