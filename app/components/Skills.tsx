'use client';

import { SKILL_CATEGORIES } from '@/app/lib/constants';
import { 
  HiOutlineCubeTransparent, 
  HiOutlineCheck,
  HiOutlineChip,
  HiOutlineCloud,
  HiOutlineAdjustments
} from 'react-icons/hi';

export default function Skills() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <HiOutlineChip className="w-5 h-5 text-blue-500" />;
      case 1:
        return <HiOutlineCloud className="w-5 h-5 text-indigo-500" />;
      default:
        return <HiOutlineAdjustments className="w-5 h-5 text-cyan-500" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100/60 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <HiOutlineCubeTransparent className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Specialized Skills & Tech Stack
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            A comprehensive, battle-tested stack oriented toward frontend excellence, reactive state systems, scalable cloud services, and clean architecture.
          </p>
        </div>

        {/* Skill Category Blocks */}
        <div className="grid lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, catIndex) => (
            <div
              key={category.title}
              className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800">
                    {getCategoryIcon(catIndex)}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                  {category.description}
                </p>

                {/* Skills List */}
                <div className="space-y-3.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-3.5 rounded-xl border transition-all ${
                        skill.highlight
                          ? 'bg-slate-50/80 dark:bg-slate-800/60 border-blue-200/60 dark:border-blue-900/40 shadow-2xs'
                          : 'bg-white dark:bg-slate-900/60 border-slate-100 dark:border-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2">
                          <HiOutlineCheck className="w-4 h-4 text-blue-500 shrink-0" />
                          <span className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 pl-6 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
