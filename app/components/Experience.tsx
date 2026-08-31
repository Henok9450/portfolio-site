'use client';

import { EXPERIENCES, EDUCATION_AND_CERTIFICATIONS } from '@/app/lib/constants';
import { 
  HiOutlineBriefcase, 
  HiOutlineAcademicCap, 
  HiOutlineBadgeCheck,
  HiOutlineLocationMarker,
  HiOutlineCalendar,
  HiCheckCircle,
  HiSparkles
} from 'react-icons/hi';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/60 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <HiOutlineBriefcase className="w-3.5 h-3.5" />
            <span>Career & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Professional Experience & Track Record
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            A 10+ year trajectory in core banking system management, enterprise application support, mission-critical incident resolution, and certified engineering practices.
          </p>
        </div>

        {/* Work Experience Timeline */}
        <div className="mb-20">
          <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-8 space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-10 group">
                
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-600 dark:border-blue-400 group-hover:scale-125 transition-transform duration-200 shadow-xs">
                  {exp.current && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  )}
                </div>

                {/* Experience Card */}
                <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
                  
                  {/* Header info */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                            Current Role
                          </span>
                        )}
                      </div>
                      <div className="text-base font-semibold text-blue-600 dark:text-blue-400">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <HiOutlineCalendar className="w-4 h-4 text-slate-400" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiOutlineLocationMarker className="w-4 h-4 text-slate-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 mb-6">
                    {exp.description.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        <HiCheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack chips */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications Section */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Education Card (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                  <HiOutlineAcademicCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Formal Education
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Academic Foundation</p>
                </div>
              </div>

              {EDUCATION_AND_CERTIFICATIONS.education.map((edu, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {edu.degree}
                  </h4>
                  <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {edu.institution}
                  </div>
                  <div className="text-xs font-medium text-slate-400 mb-3">
                    {edu.period}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>

            {/* University & Degree highlights */}
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <HiSparkles className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Rigorous training in software development, computational systems, algorithms & databases.</span>
            </div>
          </div>

          {/* Professional Certifications (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                <HiOutlineBadgeCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Industry Certifications & Credentials
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Verified Technical Specializations</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3.5">
              {EDUCATION_AND_CERTIFICATIONS.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border transition-all ${
                    cert.highlight
                      ? 'bg-slate-50/80 dark:bg-slate-800/60 border-blue-200/80 dark:border-blue-900/60 shadow-2xs'
                      : 'bg-white dark:bg-slate-900/60 border-slate-100 dark:border-slate-800'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <HiCheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
