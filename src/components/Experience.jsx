import React from 'react';
import { Briefcase, Award, ShieldCheck, Clock, Calendar, CheckCircle2, Sparkles, Rocket } from 'lucide-react';
import { experiences, certifications } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>EXPERIENCE & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
            Experience & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Practical software development training, student club leadership, and verified technical credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Experience Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-white font-display flex items-center gap-2 mb-4">
              <Briefcase className="w-5 h-5 text-emerald-400" />
              <span>Practical Experience & Training</span>
            </h3>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-gradient-to-b before:from-emerald-500 before:via-cyan-500 before:to-transparent">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-10 group">
                  {/* Timeline dot */}
                  <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-emerald-400 group-hover:scale-125 transition-transform" />

                  <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                          {exp.badge}
                        </span>
                        <h4 className="text-lg sm:text-xl font-bold text-white font-display mt-2">
                          {exp.role}
                        </h4>
                        <p className="text-sm font-semibold text-cyan-400">
                          {exp.organization}
                        </p>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-mono text-slate-400 block">
                          {exp.period}
                        </span>
                        <span className="text-xs font-mono text-slate-500 block mt-0.5">
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed mt-3">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Verified Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white font-display flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-cyan-400" />
              <span>Verified Certifications</span>
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="glass-card p-5 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                      {cert.icon === 'Award' && <Award className="w-5 h-5" />}
                      {cert.icon === 'ShieldCheck' && <ShieldCheck className="w-5 h-5" />}
                      {cert.icon === 'Clock' && <Clock className="w-5 h-5" />}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm sm:text-base font-bold text-white font-display truncate">
                          {cert.title}
                        </h4>
                        <span className="text-[11px] font-mono text-slate-400 whitespace-nowrap">
                          {cert.date}
                        </span>
                      </div>

                      <p className="text-xs font-semibold text-emerald-400 mt-0.5">
                        {cert.issuer}
                      </p>

                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                        {cert.topics}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Verified Training Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/30 to-slate-900 border border-emerald-500/20">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Responsive Web Engineering Verified</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Demonstrated mastery across semantic HTML5, modern flexbox & grid systems, cross-browser compatibility debugging, and image compression workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
