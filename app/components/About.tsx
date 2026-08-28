'use client';

import { ENGINEERING_PILLARS, PERSONAL_INFO } from '@/app/lib/constants';
import { 
  HiOutlineShieldCheck, 
  HiOutlineSparkles,
  HiOutlineUserGroup,
  HiOutlineLightningBolt,
  HiOutlineCode,
  HiOutlineBriefcase
} from 'react-icons/hi';

export default function About() {
  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <HiOutlineLightningBolt className="w-5 h-5 text-amber-500" />;
      case 1:
        return <HiOutlineUserGroup className="w-5 h-5 text-emerald-500" />;
      case 2:
        return <HiOutlineCode className="w-5 h-5 text-blue-500" />;
      default:
        return <HiOutlineBriefcase className="w-5 h-5 text-indigo-500" />;
    }
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100/60 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <HiOutlineSparkles className="w-3.5 h-3.5" />
            <span>Engineering Approach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Building with Purpose & Rigor
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Software engineering is more than writing code—it is about crafting maintainable systems, solving business bottlenecks, and delivering memorable user experiences.
          </p>
        </div>

        {/* Two Column Layout: Story / Background + Core Engineering Pillars */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Background & Philosophy */}
          <div className="lg:col-span-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <HiOutlineShieldCheck className="w-6 h-6 text-blue-500" />
              <span>Who I Am</span>
            </h3>
            
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                I am a dedicated Frontend & Full-Stack Engineer based in Addis Ababa, Ethiopia, working with distributed teams and clients across the globe.
              </p>
              <p>
                Over the past 3+ years, I have architected and deployed responsive web platforms ranging from enterprise cell management systems to reactive event tools and full-stack commerce storefronts.
              </p>
              <p>
                My approach prioritizes TypeScript type-safety, semantic accessibility (WCAG AA), component modularity, and smooth micro-interactions that keep users engaged without compromising performance.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-4">
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 font-medium">Location</span>
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Addis Ababa, ET</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 font-medium">Work Authorization</span>
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Remote Worldwide</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 font-medium">Direct Email</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Engineering Pillars */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {ENGINEERING_PILLARS.map((pillar, index) => (
              <div
                key={pillar.title}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 w-fit mb-4">
                    {getPillarIcon(index)}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
