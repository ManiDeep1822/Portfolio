import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { useEnterprise } from '../context/EnterpriseContext';
import {
  GithubIcon,
  LinkedinIcon,
  FileDown,
  MenuIcon,
  XIcon,
  EyeIcon,
  SearchIcon,
  LayersIcon
} from './Icons';

export default function Navbar() {
  const {
    openCommandPalette,
    openResumeModal,
    downloadResume,
    openCaseStudy,
    scrollToSection
  } = useEnterprise();

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', href: '#home', id: 'home' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'projects', 'skills', 'about', 'experience', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800/80 py-3.5 shadow-lg shadow-black/30'
            : 'bg-zinc-950/50 backdrop-blur-md py-5 border-b border-zinc-900/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between gap-6">
          {/* Brand & Identity */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="flex items-center gap-3 group focus:outline-none shrink-0"
            aria-label="Back to top"
          >
            <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center font-mono text-xs font-bold text-zinc-100 group-hover:border-zinc-700 transition-colors">
              MD
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-zinc-100 group-hover:text-white transition-colors">
                Mani Deep
              </span>
              <span className="text-[11px] text-zinc-500 hidden sm:inline">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-zinc-900/60 border border-zinc-800/80 px-2 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-zinc-800 text-white shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Enterprise Actions */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={openCommandPalette}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 hover:border-zinc-700 text-xs transition-colors"
              title="Open Command Palette (Ctrl+K)"
            >
              <SearchIcon className="w-3.5 h-3.5 text-zinc-400" />
              <span className="text-zinc-300 font-medium">Search</span>
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-zinc-950 text-zinc-400 border border-zinc-800 rounded">
                ⌘K
              </kbd>
            </button>

            <button
              type="button"
              onClick={openResumeModal}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-zinc-700 text-xs font-medium transition-colors"
            >
              <EyeIcon className="w-3.5 h-3.5 text-zinc-400" />
              <span>Preview CV</span>
            </button>

            <button
              type="button"
              onClick={downloadResume}
              className="btn-primary text-xs py-2 px-4 flex items-center gap-2"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile & Tablet Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={openCommandPalette}
              className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300"
              aria-label="Open Command Palette"
            >
              <SearchIcon className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={openResumeModal}
              className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300"
              aria-label="Preview Resume"
            >
              <EyeIcon className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-zinc-950/98 backdrop-blur-xl pt-24 px-6 flex flex-col justify-between pb-8 overflow-y-auto">
          <div className="space-y-6">
            <div>
              <div className="text-xs font-medium text-zinc-500 mb-3">
                Navigation
              </div>
              <nav className="grid grid-cols-2 gap-2.5">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      scrollToSection(link.href);
                    }}
                    className="px-4 py-3 rounded-xl bg-zinc-900/70 border border-zinc-800 text-sm font-medium text-zinc-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <div className="text-xs font-medium text-zinc-500 mb-3">
                Case Study Architecture Specs
              </div>
              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openCaseStudy('campus-eats');
                  }}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-left text-xs font-medium text-zinc-200"
                >
                  <span className="flex items-center gap-2.5">
                    <LayersIcon className="w-4 h-4 text-emerald-400" />
                    <span>CampusEats — Real-Time Food Delivery</span>
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openCaseStudy('process-optima');
                  }}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-left text-xs font-medium text-zinc-200"
                >
                  <span className="flex items-center gap-2.5">
                    <LayersIcon className="w-4 h-4 text-blue-400" />
                    <span>ProcessOptima — System Telemetry</span>
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openCaseStudy('sri-adithya-furniture');
                  }}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-left text-xs font-medium text-zinc-200"
                >
                  <span className="flex items-center gap-2.5">
                    <LayersIcon className="w-4 h-4 text-amber-400" />
                    <span>Sri Adithya — Commercial E-Commerce</span>
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-zinc-800/80 mt-6">
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openResumeModal();
                }}
                className="btn-secondary w-full py-3 text-xs justify-center"
              >
                <EyeIcon className="w-4 h-4" />
                <span>Preview CV</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  downloadResume();
                }}
                className="btn-primary w-full py-3 text-xs justify-center"
              >
                <FileDown className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
            </div>

            <div className="flex items-center justify-between pt-3 text-xs text-zinc-500">
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
              <span>Lovely Professional University</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
