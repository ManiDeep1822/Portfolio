import React from 'react';
import { experiences, certifications } from '../data/portfolioData';
import { useEnterprise } from '../context/EnterpriseContext';
import { AwardIcon, CheckIcon, EyeIcon } from './Icons';

export default function Experience() {
  const { openResumeModal } = useEnterprise();

  return (
    <section id="experience" className="py-28 relative border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="badge-subtle mb-4 py-1.5 px-3.5">
              <span>Career Milestones & Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Experience & Certifications
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
              Hands-on frontend engineering training, campus technical leadership, and verified subject certifications.
            </p>
          </div>

          <button
            type="button"
            onClick={openResumeModal}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-zinc-200 transition-colors self-start md:self-auto"
          >
            <EyeIcon className="w-4 h-4 text-zinc-400" />
            <span>Inspect Full Curriculum Vitae</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Experience Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Technical Training & Leadership</span>
            </h3>

            <div className="space-y-5">
              {experiences.map((exp) => (
                <div key={exp.id} className="bento-card p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {exp.badge}
                        </span>
                        {exp.metrics?.map((m, mIdx) => (
                          <span
                            key={mIdx}
                            className="px-2.5 py-0.5 rounded-full text-xs bg-zinc-900 text-zinc-400 border border-zinc-800"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-white mt-3">
                        {exp.role}
                      </h4>
                      <p className="text-xs sm:text-sm font-semibold text-zinc-300 mt-1">
                        {exp.organization}
                      </p>
                    </div>

                    <div className="text-left sm:text-right">
                      <span className="text-xs font-medium text-zinc-300 block">
                        {exp.period}
                      </span>
                      <span className="text-xs text-zinc-500 block mt-0.5">
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mt-4 pt-4 border-t border-zinc-800/80">
                    {exp.description}
                  </p>

                  {exp.highlights && (
                    <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-zinc-300">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                          <CheckIcon className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Verified Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span>Verified Certifications</span>
            </h3>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.id} className="bento-card p-6 group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 shrink-0 group-hover:border-zinc-700 transition-colors">
                      <AwardIcon className="w-4 h-4 text-emerald-400" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                          {cert.title}
                        </h4>
                        <span className="text-xs text-zinc-400 whitespace-nowrap">
                          {cert.date}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-2 mt-1">
                        <p className="text-xs font-medium text-zinc-300">
                          Issued by {cert.issuer}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mt-3.5">
                        {Array.isArray(cert.topics) &&
                          cert.topics.map((topic, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-400"
                            >
                              {topic}
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Verified Credentials Callout */}
              <div className="p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 text-xs text-zinc-400 flex items-center justify-between">
                <span>Verification Authority:</span>
                <span className="text-emerald-400 font-medium">
                  Infosys, Udemy & CodingTantra
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
