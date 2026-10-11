import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useEnterprise } from '../context/EnterpriseContext';
import { personalInfo, projects } from '../data/portfolioData';
import {
  SearchIcon,
  TerminalIcon,
  LayersIcon,
  EyeIcon,
  FileDown,
  CopyIcon,
  GithubIcon,
  LinkedinIcon,
  WhatsAppIcon,
  ArrowUpRight,
  XIcon,
  CpuIcon
} from './Icons';

export default function CommandPalette() {
  const {
    isCommandOpen,
    closeCommandPalette,
    openCaseStudy,
    openResumeModal,
    downloadResume,
    copyEmail,
    copyPhone,
    scrollToSection,
    addToast
  } = useEnterprise();

  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const commands = useMemo(
    () => [
      // Architecture Case Studies
      ...projects.map((p) => ({
        id: `adr-${p.id}`,
        group: 'Architecture Decision Records (ADRs)',
        title: `${p.adrId}: Inspect ${p.title} Architecture`,
        subtitle: `${p.category} · ${p.metrics[0]?.value} · Schema & Code`,
        shortcut: p.shortcut,
        icon: <LayersIcon className="w-4 h-4 text-emerald-400" />,
        action: () => openCaseStudy(p.id)
      })),
      // Resume & Credentials
      {
        id: 'resume-preview',
        group: 'Resume & Executive Credentials',
        title: 'Preview Executive Resume (In-Browser Inspector)',
        subtitle: 'Interactive ATS Executive Summary + Embedded Native PDF Viewer',
        shortcut: 'R',
        icon: <EyeIcon className="w-4 h-4 text-blue-400" />,
        action: () => openResumeModal()
      },
      {
        id: 'resume-download',
        group: 'Resume & Executive Credentials',
        title: 'Download Official Resume PDF',
        subtitle: `${personalInfo.resumeDownloadName} · Verified 1-Page CV`,
        shortcut: 'D',
        icon: <FileDown className="w-4 h-4 text-emerald-400" />,
        action: () => {
          closeCommandPalette();
          downloadResume();
        }
      },
      // Direct Actions
      {
        id: 'copy-email',
        group: 'Direct Engineering Actions',
        title: `Copy Email Address (${personalInfo.email})`,
        subtitle: 'Copy to system clipboard for direct outreach',
        shortcut: 'C',
        icon: <CopyIcon className="w-4 h-4 text-zinc-300" />,
        action: () => {
          closeCommandPalette();
          copyEmail();
        }
      },
      {
        id: 'copy-phone',
        group: 'Direct Engineering Actions',
        title: `Copy Phone Number (${personalInfo.phone})`,
        subtitle: 'Direct voice / SMS / WhatsApp contact',
        shortcut: 'P',
        icon: <CopyIcon className="w-4 h-4 text-zinc-300" />,
        action: () => {
          closeCommandPalette();
          copyPhone();
        }
      },
      {
        id: 'open-whatsapp',
        group: 'Direct Engineering Actions',
        title: 'Initiate Direct WhatsApp Engineering Inquiry',
        subtitle: 'Opens pre-formatted engineering conversation in WhatsApp',
        shortcut: 'W',
        icon: <WhatsAppIcon className="w-4 h-4" colored />,
        action: () => {
          closeCommandPalette();
          window.open(
            'https://wa.me/917661822103?text=Hi%20Mani%20Deep%2C%20I%20reviewed%20your%20engineering%20portfolio%20and%20would%20like%20to%20connect.',
            '_blank',
            'noopener,noreferrer'
          );
          addToast({
            title: 'Launched WhatsApp Channel',
            description: 'Direct engineering inquiry (+91 7661822103)',
            category: 'EXTERNAL_LINK',
            shortcut: 'W',
            status: 'emerald'
          });
        }
      },
      {
        id: 'open-github',
        group: 'Direct Engineering Actions',
        title: 'Open GitHub Profile (@ManiDeep1822)',
        subtitle: 'Inspect source repositories, commits & build workflows',
        shortcut: 'G',
        icon: <GithubIcon className="w-4 h-4 text-zinc-200" />,
        action: () => {
          closeCommandPalette();
          window.open(personalInfo.github, '_blank', 'noopener,noreferrer');
          addToast({
            title: 'Opened GitHub Profile',
            description: 'github.com/ManiDeep1822',
            category: 'EXTERNAL_LINK',
            shortcut: 'G',
            status: 'blue'
          });
        }
      },
      {
        id: 'open-linkedin',
        group: 'Direct Engineering Actions',
        title: 'Open LinkedIn Profile (in/manideep-developer)',
        subtitle: 'Professional network & verified credentials',
        shortcut: 'L',
        icon: <LinkedinIcon className="w-4 h-4" colored />,
        action: () => {
          closeCommandPalette();
          window.open(personalInfo.linkedin, '_blank', 'noopener,noreferrer');
          addToast({
            title: 'Opened LinkedIn Profile',
            description: 'linkedin.com/in/manideep-developer',
            category: 'EXTERNAL_LINK',
            shortcut: 'L',
            status: 'blue'
          });
        }
      },
      // Section Navigation
      {
        id: 'nav-home',
        group: 'Section Navigation',
        title: '01. Overview & Live System Telemetry',
        subtitle: 'Jump to Hero section',
        shortcut: '1',
        icon: <TerminalIcon className="w-4 h-4 text-zinc-400" />,
        action: () => scrollToSection('#home', 'Overview', '1')
      },
      {
        id: 'nav-projects',
        group: 'Section Navigation',
        title: '02. Production Case Studies & ADRs',
        subtitle: 'CampusEats, ProcessOptima, Sri Adithya Furniture',
        shortcut: '2',
        icon: <CpuIcon className="w-4 h-4 text-zinc-400" />,
        action: () => scrollToSection('#projects', 'Production Case Studies', '2')
      },
      {
        id: 'nav-skills',
        group: 'Section Navigation',
        title: '03. Technical Skills Matrix (Interactive)',
        subtitle: 'Filter by stack & inspect project production usage',
        shortcut: '3',
        icon: <TerminalIcon className="w-4 h-4 text-zinc-400" />,
        action: () => scrollToSection('#skills', 'Technical Matrix', '3')
      },
      {
        id: 'nav-about',
        group: 'Section Navigation',
        title: '04. Academic Pedigree & Campus Leadership',
        subtitle: 'LPU B.Tech CSE, 96.6% Intermediate, WAIVE Club Founder',
        shortcut: '4',
        icon: <TerminalIcon className="w-4 h-4 text-zinc-400" />,
        action: () => scrollToSection('#about', 'Academic & Leadership', '4')
      },
      {
        id: 'nav-experience',
        group: 'Section Navigation',
        title: '05. Experience & Verified Certifications',
        subtitle: 'SkillCraft Technologies, Infosys Springboard, Udemy',
        shortcut: '5',
        icon: <TerminalIcon className="w-4 h-4 text-zinc-400" />,
        action: () => scrollToSection('#experience', 'Experience & Credentials', '5')
      },
      {
        id: 'nav-contact',
        group: 'Section Navigation',
        title: '06. Direct Engineering Dispatch & Contact',
        subtitle: 'Send direct message or schedule technical interview',
        shortcut: '6',
        icon: <ArrowUpRight className="w-4 h-4 text-zinc-400" />,
        action: () => scrollToSection('#contact', 'Direct Dispatch', '6')
      }
    ],
    [
      openCaseStudy,
      openResumeModal,
      downloadResume,
      copyEmail,
      copyPhone,
      scrollToSection,
      closeCommandPalette,
      addToast
    ]
  );

  const filteredCommands = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (cmd) =>
        cmd.title.toLowerCase().includes(q) ||
        cmd.subtitle.toLowerCase().includes(q) ||
        cmd.group.toLowerCase().includes(q) ||
        cmd.shortcut.toLowerCase().includes(q)
    );
  }, [commands, query]);

  useEffect(() => {
    if (isCommandOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 30);
    }
  }, [isCommandOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (!isCommandOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          filteredCommands.length > 0 ? (prev + 1) % filteredCommands.length : 0
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          filteredCommands.length > 0
            ? (prev - 1 + filteredCommands.length) % filteredCommands.length
            : 0
        );
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const target = filteredCommands[selectedIndex];
        if (target) {
          target.action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCommandOpen, filteredCommands, selectedIndex]);

  if (!isCommandOpen) return null;

  // Group filtered commands while keeping flat index for keyboard navigation
  const groups = [];
  let runningIdx = 0;
  for (const cmd of filteredCommands) {
    let grp = groups.find((g) => g.name === cmd.group);
    if (!grp) {
      grp = { name: cmd.group, items: [] };
      groups.push(grp);
    }
    grp.items.push({ ...cmd, flatIndex: runningIdx++ });
  }

  return (
    <div
      className="fixed inset-0 z-[90] flex items-start justify-center pt-12 sm:pt-20 px-3 sm:px-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-150"
      onClick={closeCommandPalette}
      role="dialog"
      aria-modal="true"
      aria-label="Enterprise Command Palette"
    >
      <div
        className="w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl shadow-black overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Search Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-zinc-800/90 bg-zinc-900/40">
          <SearchIcon className="w-4 h-4 text-emerald-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, ADR spec (CampusEats, ProcessOptima), or shortcut..."
            className="w-full bg-transparent text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs font-mono text-zinc-400 hover:text-zinc-200 px-1.5 py-0.5 rounded bg-zinc-800"
            >
              Clear
            </button>
          )}
          <button
            onClick={closeCommandPalette}
            className="flex items-center gap-1 px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400 hover:text-zinc-200 shrink-0"
            aria-label="Close Command Palette"
          >
            <span>ESC</span>
            <XIcon className="w-3.5 h-3.5 sm:hidden" />
          </button>
        </div>

        {/* Command List */}
        <div className="max-h-[68vh] sm:max-h-[420px] overflow-y-auto p-2 divide-y divide-zinc-900/60">
          {groups.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-sm font-medium text-zinc-400">
                No matching engineering command or ADR found for "{query}"
              </p>
              <p className="text-xs font-mono text-zinc-600 mt-1">
                Try searching "ADR", "Resume", "CampusEats", "Socket", or "Email"
              </p>
            </div>
          ) : (
            groups.map((group) => (
              <div key={group.name} className="py-2 first:pt-1 last:pb-1">
                <div className="px-3 pb-1.5 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-zinc-500">
                    {group.name}
                  </span>
                </div>
                <div className="space-y-0.5">
                  {group.items.map((item) => {
                    const isSelected = item.flatIndex === selectedIndex;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onMouseEnter={() => setSelectedIndex(item.flatIndex)}
                        onClick={item.action}
                        className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-left transition-colors ${
                          isSelected
                            ? 'bg-zinc-900 text-zinc-100 border border-zinc-700/80'
                            : 'text-zinc-300 border border-transparent hover:bg-zinc-900/60'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${
                              isSelected
                                ? 'bg-zinc-950 border-emerald-500/40'
                                : 'bg-zinc-900/80 border-zinc-800'
                            }`}
                          >
                            {item.icon}
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs sm:text-sm font-medium text-zinc-100 truncate">
                              {item.title}
                            </p>
                            <p className="text-[11px] text-zinc-500 truncate mt-0.5">
                              {item.subtitle}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <kbd
                            className={`px-2 py-0.5 text-[10px] font-mono rounded border ${
                              isSelected
                                ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                                : 'bg-zinc-900 text-zinc-400 border-zinc-800'
                            }`}
                          >
                            {item.shortcut}
                          </kbd>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Telemetry & Keyboard Legend */}
        <div className="px-4 py-2.5 bg-zinc-900/60 border-t border-zinc-800/90 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-zinc-500">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-zinc-950 border border-zinc-800 rounded text-zinc-400">
                ↑↓
              </kbd>
              Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-zinc-950 border border-zinc-800 rounded text-zinc-400">
                ↵
              </kbd>
              Execute
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-zinc-950 border border-zinc-800 rounded text-zinc-400">
                Shift+1..3
              </kbd>
              Open ADRs
            </span>
          </div>
          <span className="text-emerald-400/90">
            {personalInfo.version}
          </span>
        </div>
      </div>
    </div>
  );
}
