import React, { useState } from 'react';
import { User, Rocket, GraduationCap, Award, CheckCircle2, Sparkles, MapPin, Calendar, BookOpen } from 'lucide-react';
import { personalInfo, education } from '../data/portfolioData';

export default function About() {
  const [activeTab, setActiveTab] = useState('summary');

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BACKGROUND & IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight">
            Engineering with <span className="text-gradient">Purpose & Leadership</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            A blend of solid academic foundations, campus community leadership, and hands-on full-stack development experience.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Portrait & Identity Card */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative group w-full max-w-sm">
              {/* Outer Glowing Border */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-emerald-500 via-cyan-500 to-purple-600 opacity-60 blur-lg group-hover:opacity-100 transition-opacity duration-500" />

              {/* Portrait Container */}
              <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-white/15 p-2 shadow-2xl">
                <img
                  src={personalInfo.photoPath}
                  alt={personalInfo.name}
                  className="w-full h-auto object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 aspect-[4/5]"
                />

                {/* Identity Tag inside image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10">
                  <h3 className="text-lg font-bold text-white font-display">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs font-mono text-emerald-400 mt-0.5">
                    {personalInfo.title}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mt-2 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>LPU, Punjab, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Skills Pill Container */}
            <div className="w-full max-w-sm mt-6 p-4 rounded-2xl glass-card border border-white/10">
              <span className="text-xs font-mono text-slate-400 block mb-2">Core Soft Skills & Attributes:</span>
              <div className="flex flex-wrap gap-2">
                {['Active Listening', 'Engineering Leadership', 'Quick Learner', 'Time Management', 'Problem Solving'].map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Tabbed Narrative */}
          <div className="lg:col-span-8">
            {/* Interactive Tab Switcher */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md mb-8 overflow-x-auto">
              <button
                onClick={() => setActiveTab('summary')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  activeTab === 'summary'
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <User className="w-4 h-4" />
                <span>Professional Summary</span>
              </button>

              <button
                onClick={() => setActiveTab('waive')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  activeTab === 'waive'
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Rocket className="w-4 h-4" />
                <span>College Club</span>
              </button>

              <button
                onClick={() => setActiveTab('education')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  activeTab === 'education'
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>Academic Journey</span>
              </button>
            </div>

            {/* Tab 1: Professional Summary */}
            {activeTab === 'summary' && (
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 animate-fadeIn">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display flex items-center gap-2">
                    <span>Full-Stack Engineer & Builder</span>
                  </h3>
                  <p className="mt-3 text-slate-300 leading-relaxed">
                    I am <strong className="text-white font-semibold">Indla Mohana Venkata Mani Deep</strong>, a Computer Science & Engineering undergraduate at Lovely Professional University.
                    My engineering journey is centered around developing high-concurrency, responsive full-stack applications.
                    From architecting the real-time food platform <strong>CampusEats</strong> with 4 dedicated role workflows to building
                    system monitoring tools like <strong>ProcessOptima</strong> that track 200+ processes with heuristic anomaly detection,
                    I bridge clean UI design with robust distributed backends.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Full-Stack Specialization</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Skilled across the complete lifecycle: React frontends, Node/Express microservices, MongoDB/PostgreSQL schemas, and Socket.IO real-time bi-directional pipelines.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm mb-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Production Reliability</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Experienced in solving critical bugs such as infinite render loops, stale closures, Vercel build mismatches, and payment gateway state consistency.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-slate-300 text-sm">
                  <span className="font-semibold text-emerald-300">Targeting Industry Impact: </span>
                  Eager to join engineering teams where I can solve complex problems, contribute to scalable cloud architectures, and deliver clean, intuitive user experiences.
                </div>
              </div>
            )}

            {/* Tab 2: College Club */}
            {activeTab === 'waive' && (
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 animate-fadeIn">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Campus Club</span>
                    <h3 className="text-2xl font-bold text-white font-display mt-0.5">
                      Founder — WAIVE Club
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium">
                    Student Community
                  </span>
                </div>

                <p className="text-slate-300 leading-relaxed">
                  I founded <strong>WAIVE</strong>, a student club at Lovely Professional University focused on web technologies and software engineering. It provides a collaborative environment for students to learn, share knowledge, and build projects together.
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-mono text-slate-400 uppercase tracking-wider">Key Club Activities:</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                      <span>Organized collaborative peer learning sessions and coding meetups on web development.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                      <span>Conducted student code reviews, debugging sessions, and practical project building.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <span>Helped fellow students get started with Git, frontend design, and full-stack fundamentals.</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Tab 3: Education Roadmap */}
            {activeTab === 'education' && (
              <div className="space-y-4 animate-fadeIn">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className="glass-card p-6 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-white font-display">
                          {edu.degree}
                        </h4>
                        <p className="text-sm text-emerald-400 font-medium">
                          {edu.institution} <span className="text-slate-500">•</span> {edu.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
                          {edu.score}
                        </span>
                        <p className="text-xs text-slate-400 mt-1 font-mono">{edu.period}</p>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 mb-3">{edu.field}</p>

                    <ul className="space-y-1 text-xs text-slate-400">
                      {edu.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-emerald-400" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
