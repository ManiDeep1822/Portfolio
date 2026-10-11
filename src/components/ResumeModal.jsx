import React, { useState } from 'react';
import { useEnterprise } from '../context/EnterpriseContext';
import {
  personalInfo,
  projects,
  experiences,
  certifications,
  education
} from '../data/portfolioData';
import {
  XIcon,
  FileDown,
  ExternalLink,
  LayersIcon,
  CheckIcon
} from './Icons';

export default function ResumeModal() {
  const {
    isResumeModalOpen,
    closeResumeModal,
    downloadResume,
    openCaseStudy
  } = useEnterprise();

  const [viewMode, setViewMode] = useState('ats');

  if (!isResumeModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[88] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={closeResumeModal}
      role="dialog"
      aria-modal="true"
      aria-label="Executive Resume Inspector"
    >
      <div
        className="w-full max-w-5xl h-[92vh] bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl shadow-black flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="px-5 sm:px-7 py-4 bg-zinc-900/80 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
                Curriculum Vitae
              </span>
            </div>

            {/* View Switcher */}
            <div className="inline-flex rounded-xl bg-zinc-950 p-1 border border-zinc-800">
              <button
                type="button"
                onClick={() => setViewMode('ats')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  viewMode === 'ats'
                    ? 'bg-zinc-800 text-zinc-100 font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Interactive Executive View
              </button>
              <button
                type="button"
                onClick={() => setViewMode('pdf')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  viewMode === 'pdf'
                    ? 'bg-zinc-800 text-zinc-100 font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Native PDF Document
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-700 text-xs font-medium transition-colors"
            >
              <span>Open PDF Tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={downloadResume}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs transition-colors"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              type="button"
              onClick={closeResumeModal}
              className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-800 text-xs font-medium"
              aria-label="Close Resume Inspector"
            >
              <span>Close</span>
              <XIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Body */}
        {viewMode === 'pdf' ? (
          <div className="flex-1 bg-zinc-900 flex flex-col">
            <iframe
              src={`${personalInfo.resumePath}#view=FitH`}
              title="Indla Mohana Venkata Mani Deep Official Resume PDF"
              className="w-full flex-1 border-0"
            />
          </div>
        ) : (
          <div
            className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6 bg-zinc-950"
            data-lenis-prevent="true"
          >
            {/* Executive Header */}
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-3">
                  <CheckIcon className="w-3.5 h-3.5" />
                  <span>Verified Official Curriculum Vitae</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 tracking-tight">
                  {personalInfo.name}
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1.5">
                  {personalInfo.title} • B.Tech Computer Science & Engineering @ {personalInfo.university}
                </p>
              </div>
              <div className="flex flex-col sm:items-end text-xs text-zinc-400 space-y-1.5">
                <span>Email: {personalInfo.email}</span>
                <span>Mobile: {personalInfo.phone}</span>
                <span>GitHub: github.com/ManiDeep1822</span>
                <span>LinkedIn: linkedin.com/in/manideep-developer</span>
              </div>
            </div>

            {/* Technical Skills Summary */}
            <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/90 space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Technical Skills Matrix
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80">
                  <span className="text-zinc-400 block mb-1">Languages</span>
                  <span className="text-zinc-100 font-medium text-sm">
                    C++, JavaScript (ES6+), Python, Java, SQL
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80">
                  <span className="text-zinc-400 block mb-1">Frameworks & Libraries</span>
                  <span className="text-zinc-100 font-medium text-sm">
                    React.js, Node.js, Express.js, Socket.IO, HTML5, CSS3, Tailwind CSS
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80">
                  <span className="text-zinc-400 block mb-1">Databases</span>
                  <span className="text-zinc-100 font-medium text-sm">
                    MongoDB (Atlas & Mongoose), PostgreSQL, MySQL
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80">
                  <span className="text-zinc-400 block mb-1">Tools, Platforms & Core Competencies</span>
                  <span className="text-zinc-100 font-medium text-sm">
                    Git, GitHub, Postman, Razorpay, Google OAuth, Chart.js, Vercel, REST APIs, Real-Time WebSockets
                  </span>
                </div>
              </div>
            </div>

            {/* Training & Experience */}
            <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/90 space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Technical Training & Leadership
              </h3>
              <div className="space-y-4">
                {experiences.map((exp) => (
                  <div
                    key={exp.id}
                    className="p-5 rounded-xl bg-zinc-950 border border-zinc-800/80"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-zinc-100">
                          {exp.role}
                        </h4>
                        <div className="text-xs text-blue-400 font-medium mt-0.5">
                          {exp.organization}
                        </div>
                      </div>
                      <span className="text-xs text-zinc-400">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="mt-3 space-y-2 text-xs sm:text-sm text-zinc-300 list-disc list-inside">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="leading-relaxed">
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Production Projects */}
            <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/90 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  Production Engineering Projects
                </h3>
                <span className="text-xs text-zinc-500">
                  Click any project to inspect Architecture Spec
                </span>
              </div>
              <div className="space-y-4">
                {projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h4 className="text-sm sm:text-base font-bold text-zinc-100">
                        {proj.title} — {proj.subtitle}
                      </h4>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-zinc-400">
                          {proj.period}
                        </span>
                        <button
                          type="button"
                          onClick={() => openCaseStudy(proj.id)}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-emerald-400 border border-zinc-700 text-xs font-medium"
                        >
                          <LayersIcon className="w-3.5 h-3.5" />
                          <span>Inspect Spec</span>
                        </button>
                      </div>
                    </div>
                    <div className="text-xs text-blue-400 font-medium mt-1.5">
                      Tech Stack: {proj.techStack.join(', ')}
                    </div>
                    <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-zinc-300 list-disc list-inside">
                      {proj.bullets.map((b, i) => (
                        <li key={i} className="leading-relaxed">
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/90 space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  Education
                </h3>
                <div className="space-y-3.5">
                  {education.map((edu, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs sm:text-sm font-bold text-zinc-100">
                          {edu.institution}
                        </span>
                        <span className="text-xs text-emerald-400 font-semibold">
                          {edu.score}
                        </span>
                      </div>
                      <div className="text-xs text-zinc-300 mt-1">
                        {edu.degree} — {edu.field}
                      </div>
                      <div className="text-xs text-zinc-500 mt-1">
                        {edu.period} • {edu.location}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/90 space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  Verified Certifications
                </h3>
                <div className="space-y-3.5">
                  {certifications.map((cert) => (
                    <div
                      key={cert.id}
                      className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs sm:text-sm font-bold text-zinc-100">
                          {cert.title}
                        </span>
                        <span className="text-xs text-zinc-400">
                          {cert.date}
                        </span>
                      </div>
                      <div className="text-xs text-blue-400 font-medium mt-1">
                        Issuer: {cert.issuer}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
