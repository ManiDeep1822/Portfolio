import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Sparkles, Terminal, ShieldCheck, Mail, Phone, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import Hero3DCanvas from './Hero3DCanvas';
import { personalInfo, stats } from '../data/portfolioData';

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for roles
  useEffect(() => {
    const roles = personalInfo.roles;
    const fullText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === fullText) {
        // Pause at end of word
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCurrentText(
          fullText.substring(0, currentText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  const handleDownloadCv = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#10b981', '#06b6d4', '#34d399', '#38bdf8']
    });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Narrative & Controls */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium backdrop-blur-md mb-6 shadow-sm shadow-emerald-950">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>{personalInfo.availability}</span>
            </div>

            {/* Identity Kicker */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-[2px] bg-gradient-to-r from-emerald-400 to-cyan-400" />
              <h2 className="text-xs sm:text-sm font-mono font-semibold tracking-widest text-emerald-400 uppercase">
                Indla Mohana Venkata Mani Deep
              </h2>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.15] mb-4">
              Designing Real-Time Web Experiences with{' '}
              <span className="text-gradient">Precision & Scale.</span>
            </h1>

            {/* Dynamic Typewriter Title */}
            <div className="flex items-center gap-2 text-lg sm:text-2xl font-mono text-slate-300 mb-6 h-9">
              <span className="text-emerald-400 font-bold">&gt;</span>
              <span>I am a</span>
              <span className="text-cyan-300 font-semibold border-b-2 border-emerald-400 pb-0.5">
                {currentText}
              </span>
              <span className="animate-pulse text-emerald-400">|</span>
            </div>

            {/* Narrative Bio */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mb-8">
              Hello! I'm <strong className="text-white font-semibold">Indla Mohana Venkata Mani Deep</strong>, a Computer Science & Engineering student at{' '}
              <span className="text-emerald-300">Lovely Professional University</span>. I specialize in architecting full-stack 
              MERN solutions, event-driven Socket.IO systems, and responsive modern web applications.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="btn-cyber-primary flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-bold shadow-lg shadow-emerald-500/25 group whitespace-nowrap flex-shrink-0"
              >
                <span className="whitespace-nowrap">Explore Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
              </a>

              <a
                href="#contact"
                className="btn-cyber-secondary flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold whitespace-nowrap flex-shrink-0"
              >
                <span className="whitespace-nowrap">Get In Touch</span>
              </a>

              <a
                href={personalInfo.resumePath}
                download="ManiDeep_Resume.pdf"
                onClick={handleDownloadCv}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-slate-300 hover:text-emerald-400 hover:bg-white/5 border border-white/10 text-sm font-medium transition-all whitespace-nowrap flex-shrink-0"
                title="Download CV (PDF)"
              >
                <Download className="w-4 h-4 flex-shrink-0" />
                <span className="whitespace-nowrap">Resume PDF</span>
              </a>
            </div>

            {/* Quick Contact & Verified Identity Strip */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10 text-xs sm:text-sm text-slate-400 font-mono">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors whitespace-nowrap"
              >
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="whitespace-nowrap">{personalInfo.email}</span>
              </a>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="whitespace-nowrap">{personalInfo.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: 360° Interactive 3D Visual Presentation */}
          <div className="lg:col-span-6 relative">
            <Hero3DCanvas />
          </div>
        </div>

        {/* Bottom Metrics Ribbon */}
        <div className="mt-16 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card p-5 sm:p-6 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold font-display text-white group-hover:text-emerald-300 transition-colors mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-300 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 font-mono leading-tight">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
