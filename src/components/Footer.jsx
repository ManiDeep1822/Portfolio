import React from 'react';
import { GithubIcon, LinkedinIcon, EyeIcon, FileDown, SearchIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { useEnterprise } from '../context/EnterpriseContext';

export default function Footer() {
  const { openCommandPalette, openResumeModal, downloadResume } = useEnterprise();

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 py-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-900">
          {/* Identity & Status */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-subtle" />
              <span className="text-sm font-semibold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-zinc-500 mt-1.5">
              B.Tech Computer Science & Engineering • Lovely Professional University
            </p>
          </div>

          {/* Enterprise Quick Actions & Socials */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={openCommandPalette}
              className="px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-zinc-300 flex items-center gap-2 transition-colors"
            >
              <SearchIcon className="w-3.5 h-3.5 text-zinc-400" />
              <span>Command Palette</span>
              <kbd className="px-1.5 py-0.5 bg-zinc-950 text-zinc-400 border border-zinc-800 rounded text-[10px] font-mono">
                ⌘K
              </kbd>
            </button>

            <button
              type="button"
              onClick={openResumeModal}
              className="px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-zinc-300 flex items-center gap-2 transition-colors"
            >
              <EyeIcon className="w-3.5 h-3.5 text-zinc-400" />
              <span>Preview CV</span>
            </button>

            <button
              type="button"
              onClick={downloadResume}
              className="px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-zinc-300 flex items-center gap-2 transition-colors"
            >
              <FileDown className="w-3.5 h-3.5 text-zinc-400" />
              <span>Download PDF</span>
            </button>

            <div className="h-4 w-px bg-zinc-800 mx-1 hidden sm:block" />

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="px-3.5 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Back to top ↑
            </button>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. Engineered with React, Vite & Tailwind CSS.
          </div>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-zinc-400">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
