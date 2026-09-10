import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#06090f] py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/5">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-lg font-bold text-white font-display">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Indla Mohana Venkata Mani Deep</span>
            </div>
            <p className="text-xs text-slate-400 font-mono mt-1">
              Full-Stack Developer • Lovely Professional University
            </p>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-emerald-500/40 transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-purple-500/40 transition-all"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <div className="w-px h-6 bg-white/10 mx-1" />

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 transition-all shadow-sm"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Tech Stack */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Indla Mohana Venkata Mani Deep. Designed for high-impact performance.
          </div>

          <div className="flex flex-wrap items-center gap-3 text-[11px]">
            <span className="px-2 py-0.5 rounded bg-white/5 text-slate-400">React + Vite</span>
            <span className="px-2 py-0.5 rounded bg-white/5 text-slate-400">Tailwind CSS</span>
            <span className="px-2 py-0.5 rounded bg-white/5 text-slate-400">Node.js</span>
            <span className="px-2 py-0.5 rounded bg-white/5 text-slate-400">Socket.IO</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
