import React, { useState, useEffect } from 'react';
import { useEnterprise } from '../context/EnterpriseContext';
import { projects } from '../data/portfolioData';
import {
  XIcon,
  LayersIcon,
  DatabaseIcon,
  CodeIcon,
  CpuIcon,
  CopyIcon,
  CheckIcon,
  ExternalLink,
  GithubIcon,
  ShieldIcon,
  ChevronRightIcon
} from './Icons';

export default function CaseStudyDrawer() {
  const { activeProject, openCaseStudy, closeCaseStudy, addToast } = useEnterprise();
  const [activeTab, setActiveTab] = useState('architecture');
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    if (activeProject) {
      setActiveTab('architecture');
      setCopiedCode(false);
    }
  }, [activeProject?.id]);

  if (!activeProject) return null;

  const handleCopyCode = () => {
    if (!activeProject.codeSnippet?.code) return;
    navigator.clipboard?.writeText(activeProject.codeSnippet.code);
    setCopiedCode(true);
    addToast({
      title: 'Production Snippet Copied',
      description: `${activeProject.codeSnippet.filename} copied to clipboard.`,
      category: 'CODE_INSPECT',
      status: 'emerald'
    });
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const tabs = [
    { id: 'architecture', label: 'Architecture & ADR', icon: <LayersIcon className="w-3.5 h-3.5" /> },
    { id: 'schema', label: 'Data Schema', icon: <DatabaseIcon className="w-3.5 h-3.5" /> },
    { id: 'code', label: 'Production Code', icon: <CodeIcon className="w-3.5 h-3.5" /> },
    { id: 'execution', label: 'Execution & Roles', icon: <CpuIcon className="w-3.5 h-3.5" /> }
  ];

  return (
    <div
      className="fixed inset-0 z-[85] flex justify-end bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={closeCaseStudy}
      role="dialog"
      aria-modal="true"
      aria-label={`${activeProject.adrId} Engineering Specification`}
    >
      <div
        className="relative w-full max-w-3xl bg-zinc-950 border-l border-zinc-800 h-full flex flex-col shadow-2xl shadow-black overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top ADR Switcher & Close Bar */}
        <div className="px-4 sm:px-6 py-3 bg-zinc-900/70 border-b border-zinc-800 flex items-center justify-between gap-2 shrink-0">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {projects.map((p) => {
              const isCurrent = p.id === activeProject.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => openCaseStudy(p.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 shrink-0 border ${
                    isCurrent
                      ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40 font-semibold'
                      : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-zinc-200 hover:border-zinc-700'
                  }`}
                >
                  <span>{p.adrId}</span>
                  <span className="hidden sm:inline text-zinc-500">·</span>
                  <span className="hidden sm:inline">{p.title}</span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={closeCaseStudy}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-700/80 text-xs font-mono shrink-0 transition-colors"
            aria-label="Close Architecture Drawer"
          >
            <span>ESC</span>
            <XIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Project Header & Key Telemetry */}
        <div className="px-4 sm:px-6 pt-5 pb-4 border-b border-zinc-800/90 bg-zinc-950 shrink-0">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-[11px] font-mono font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded">
                {activeProject.adrId}
              </span>
              <span className="text-xs font-mono text-zinc-400">
                {activeProject.category}
              </span>
              <span className="text-zinc-700">•</span>
              <span className="text-xs font-mono text-zinc-500">
                {activeProject.period}
              </span>
            </div>
            <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono bg-zinc-900 text-zinc-400 border border-zinc-800 rounded">
              Shortcut: {activeProject.shortcut}
            </kbd>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-zinc-100 tracking-tight">
            {activeProject.title} — {activeProject.subtitle}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1.5 leading-relaxed">
            {activeProject.summary}
          </p>

          {/* Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
            {activeProject.metrics.map((m) => (
              <div
                key={m.label}
                className="px-3 py-2 rounded-lg bg-zinc-900/70 border border-zinc-800/90"
              >
                <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                  {m.label}
                </div>
                <div className="text-xs sm:text-sm font-mono font-semibold text-zinc-100 mt-0.5">
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-1.5 mt-4 overflow-x-auto no-scrollbar pt-1">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all shrink-0 border ${
                    isActive
                      ? 'bg-zinc-100 text-zinc-950 border-zinc-100 font-semibold shadow-sm'
                      : 'bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:text-zinc-200 hover:bg-zinc-900'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div
          className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6"
          data-lenis-prevent="true"
        >
          {activeTab === 'architecture' && (
            <>
              {/* System Topology Overview */}
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/90">
                <div className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 mb-1">
                  System Topology & Data Flow
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {activeProject.architecture.overview}
                </p>

                {/* Interactive Node Pipeline Diagram */}
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 relative">
                  {activeProject.architecture.nodes.map((node, index) => (
                    <div
                      key={node.id}
                      className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-emerald-500/40 transition-colors relative group"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-zinc-900 text-emerald-400 border border-zinc-800">
                          STAGE 0{index + 1} · {node.id.toUpperCase()}
                        </span>
                        <ChevronRightIcon className="w-3.5 h-3.5 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
                      </div>
                      <h4 className="text-sm font-semibold text-zinc-100">
                        {node.title}
                      </h4>
                      <div className="text-xs font-mono text-blue-400 mt-0.5">
                        {node.tech}
                      </div>
                      <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                        {node.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architectural Trade-offs (ADRs) */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-2">
                  <ShieldIcon className="w-4 h-4 text-emerald-400" />
                  <span>Key Engineering Decisions & Trade-Offs</span>
                </h3>
                <div className="space-y-3">
                  {activeProject.architecture.tradeoffs.map((item, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/90"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          DECISION #{i + 1}
                        </span>
                        <h4 className="text-sm font-semibold text-zinc-100">
                          {item.decision}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {item.rationale}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'schema' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-zinc-100">
                    Data Models & Indexing Strategy
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Production data structures and query optimization indexes for {activeProject.title}.
                  </p>
                </div>
              </div>

              {activeProject.databaseSchema.map((schema) => (
                <div
                  key={schema.collection}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/30 overflow-hidden"
                >
                  <div className="px-4 py-3 bg-zinc-900/80 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <DatabaseIcon className="w-4 h-4 text-emerald-400" />
                      <span className="font-mono text-xs sm:text-sm font-bold text-zinc-100">
                        {schema.collection}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {schema.indexes.map((idx, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-800"
                        >
                          INDEX: {idx}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="divide-y divide-zinc-800/60">
                    {schema.fields.map((field) => (
                      <div
                        key={field.name}
                        className="px-4 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 text-xs"
                      >
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="font-mono font-semibold text-emerald-300">
                            {field.name}
                          </span>
                          <span className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-zinc-900 text-blue-400 border border-zinc-800">
                            {field.type}
                          </span>
                        </div>
                        <span className="text-zinc-400 sm:text-right">
                          {field.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'code' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <h3 className="text-sm font-semibold text-zinc-100">
                    Production Implementation Excerpt
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Verified implementation from {activeProject.title} repository.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 text-xs font-mono transition-colors shrink-0"
                >
                  {copiedCode ? (
                    <>
                      <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <CopyIcon className="w-3.5 h-3.5" />
                      <span>Copy Snippet</span>
                    </>
                  )}
                </button>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-[#070709] overflow-hidden">
                <div className="px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    <span className="ml-2 font-mono text-xs text-zinc-300">
                      {activeProject.codeSnippet.filename}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                    {activeProject.codeSnippet.language}
                  </span>
                </div>
                <pre className="p-4 text-xs font-mono text-zinc-200 overflow-x-auto leading-relaxed">
                  <code>{activeProject.codeSnippet.code}</code>
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'execution' && (
            <div className="space-y-5">
              {activeProject.roleBreakdown && (
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                    Multi-Role Portal Isolation
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeProject.roleBreakdown.map((item) => (
                      <div
                        key={item.role}
                        className="p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800"
                      >
                        <div className="text-xs font-mono font-bold text-emerald-400 uppercase">
                          {item.role}
                        </div>
                        <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                          {item.feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                  Key Engineering Milestones
                </h3>
                <ul className="space-y-2.5">
                  {activeProject.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 text-xs sm:text-sm text-zinc-300 leading-relaxed flex items-start gap-3"
                    >
                      <span className="font-mono text-xs text-emerald-400 font-bold mt-0.5">
                        0{idx + 1}
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2.5">
                  Production Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {activeProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sticky Drawer Footer with Live Demo & Source Actions */}
        <div className="px-4 sm:px-6 py-3.5 bg-zinc-900/80 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-xs font-mono text-zinc-400">
            Status: <span className="text-emerald-400">{activeProject.status}</span>
          </div>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            {activeProject.githubUrl && (
              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 text-xs font-medium transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
            {activeProject.liveUrl && (
              <a
                href={activeProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs transition-colors"
              >
                <span>Open Live Production</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
