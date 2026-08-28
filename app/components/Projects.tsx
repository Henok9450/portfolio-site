'use client';

import { useState } from 'react';
import { PROJECTS, Project } from '@/app/lib/constants';
import { 
  HiExternalLink, 
  HiCode, 
  HiCheckCircle, 
  HiOutlineLightningBolt,
  HiOutlineServer
} from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Full-Stack' | 'Frontend'>('All');

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/60 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <HiOutlineLightningBolt className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Production Software & Case Studies
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Real-world applications built with an emphasis on resilient architecture, responsive UI, accessible design, and business value.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 mt-8 p-1.5 rounded-xl bg-slate-200/70 dark:bg-slate-800/70 border border-slate-300/50 dark:border-slate-700/50">
            {(['All', 'Full-Stack', 'Frontend'] as const).map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeFilter === filter
                    ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid lg:grid-cols-1 gap-12">
          {filteredProjects.map((project: Project) => (
            <article
              key={project.id}
              className="group relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                
                {/* Left / Top Details: Title, Subtitle, Problem & Solution */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    {/* Category & Badge */}
                    <div className="flex flex-wrap items-center gap-2.5 mb-3">
                      <span className="px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/60">
                          Featured Project
                        </span>
                      )}
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 mb-6">
                      {project.subtitle}
                    </p>

                    {/* Problem & Solution Breakdown */}
                    <div className="space-y-4 mb-6">
                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                          The Problem
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100/60 dark:border-blue-900/40">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 mb-1 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          Engineered Solution
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Actions / Links */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex flex-wrap items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all hover:shadow hover:-translate-y-0.5"
                          aria-label={`Visit live portal for ${project.title}`}
                        >
                          <span>{project.clientNote ? 'Client Live Portal' : 'Live Demo'}</span>
                          <HiExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors"
                          aria-label={`View GitHub repository for ${project.title}`}
                        >
                          <FaGithub className="w-3.5 h-3.5" />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>

                    {project.clientNote && (
                      <p className="mt-3 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                        <span>{project.clientNote}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Right Column: Architecture Highlights & Stack Tags */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full bg-slate-50/70 dark:bg-slate-800/40 rounded-2xl p-6 border border-slate-100 dark:border-slate-800">
                  <div>
                    {/* Architecture Bullet Points */}
                    <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
                      <HiOutlineServer className="w-4 h-4 text-blue-500" />
                      <span>Architecture & Key Decisions</span>
                    </div>

                    <ul className="space-y-2.5 mb-6">
                      {project.architecture.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                          <HiCheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div>
                    <div className="flex items-center gap-1.5 mb-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      <HiCode className="w-3.5 h-3.5" />
                      <span>Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
