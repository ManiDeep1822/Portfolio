import React, { useState, useMemo } from 'react';
import { skillsData } from '../data/portfolioData';
import { useEnterprise } from '../context/EnterpriseContext';
import {
  ReactIcon,
  NodeIcon,
  ExpressIcon,
  MongoIcon,
  PostgresIcon,
  MySQLIcon,
  JavaScriptIcon,
  PythonIcon,
  CppIcon,
  JavaIcon,
  SocketIOIcon,
  RazorpayIcon,
  GoogleIcon,
  GitIcon,
  PostmanIcon,
  ViteIcon,
  TailwindIcon,
  ChartJSIcon,
  HTML5Icon,
  CSS3Icon,
  VercelIcon,
  CpuIcon,
  SearchIcon,
  LayersIcon
} from './Icons';

const ICON_MAP = {
  ReactIcon,
  NodeIcon,
  ExpressIcon,
  MongoIcon,
  PostgresIcon,
  MySQLIcon,
  JavaScriptIcon,
  PythonIcon,
  CppIcon,
  JavaIcon,
  SocketIOIcon,
  RazorpayIcon,
  GoogleIcon,
  GitIcon,
  PostmanIcon,
  ViteIcon,
  TailwindIcon,
  ChartJSIcon,
  HTML5Icon,
  CSS3Icon,
  VercelIcon
};

export default function Skills() {
  const { openCaseStudy } = useEnterprise();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Stack' },
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & Real-Time' },
    { id: 'databases', label: 'Databases' },
    { id: 'tools', label: 'Tools & DevOps' }
  ];

  const filteredSkills = useMemo(() => {
    return skillsData.filter((s) => {
      const matchesCategory = activeCategory === 'all' || s.category === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchesCategory;
      return (
        matchesCategory &&
        (s.name.toLowerCase().includes(q) ||
          s.desc.toLowerCase().includes(q) ||
          s.tier.toLowerCase().includes(q) ||
          s.usedIn?.some((u) => u.label.toLowerCase().includes(q)))
      );
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="skills" className="py-28 relative border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <div className="badge-subtle mb-4 py-1.5 px-3.5">
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Skills & Production Mapping
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
              Authentic vector technology stack mapped directly to verified production systems. Select any project badge on a skill card to inspect its architecture specification.
            </p>
          </div>

          {/* Search & Category Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative">
              <SearchIcon className="w-3.5 h-3.5 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="skills-filter-search"
                name="skillsSearch"
                autoComplete="off"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter skills or project..."
                aria-label="Filter skills or project"
                className="w-full sm:w-56 pl-9 pr-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-600"
              />
            </div>

            <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-zinc-900 border border-zinc-800">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-zinc-800 text-white shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredSkills.map((skill) => {
            const IconComponent = ICON_MAP[skill.iconKey] || CpuIcon;
            return (
              <div
                key={skill.name}
                className="p-5 sm:p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-all hover:bg-zinc-900/80 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
                      <IconComponent
                        className="w-5 h-5 text-zinc-300 group-hover:text-white"
                        colored
                      />
                    </div>
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-400">
                      {skill.tier}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-zinc-100 group-hover:text-white transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>

                {/* Production Mapping Badges */}
                <div className="mt-5 pt-3.5 border-t border-zinc-800/70">
                  {skill.usedIn && skill.usedIn.length > 0 ? (
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] text-zinc-500 mr-1">
                        Used in:
                      </span>
                      {skill.usedIn.map((proj) => (
                        <button
                          key={proj.projectId}
                          type="button"
                          onClick={() => openCaseStudy(proj.projectId)}
                          className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/25 text-[11px] font-medium transition-colors"
                          title={`Open ${proj.label} Architecture Spec`}
                        >
                          <LayersIcon className="w-3 h-3" />
                          <span>{proj.label}</span>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-between text-[11px] text-zinc-500">
                      <span className="capitalize">{skill.category}</span>
                      <span className="text-zinc-400 font-medium">
                        {skill.credential || 'Core Competency'}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Computer Science Foundation Callout */}
        <div className="mt-14 p-7 sm:p-8 rounded-2xl bg-zinc-900/35 border border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="text-base font-semibold text-zinc-100 mb-1.5 flex items-center gap-2.5">
              <CpuIcon className="w-4 h-4 text-emerald-400" />
              <span>Core Computer Science Foundation (LPU B.Tech CSE)</span>
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Formal academic training in Data Structures & Algorithms, Object-Oriented Programming (C++ and Java), Database Management Systems, and Operating Systems at Lovely Professional University.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 text-xs font-medium">
            <span className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
              Data Structures & Algorithms
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
              Object-Oriented Programming
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
              Operating Systems
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
              Database Management
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
