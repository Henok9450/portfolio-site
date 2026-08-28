'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PERSONAL_INFO } from '@/app/lib/constants';
import { 
  HiArrowNarrowRight, 
  HiDocumentDownload, 
  HiCheck, 
  HiOutlineClipboardCopy,
  HiSparkles 
} from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-blue-600/15 to-indigo-600/10 dark:from-blue-600/20 dark:to-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Content (Left Column) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-wide mb-6 backdrop-blur-sm shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Full-Time Roles & High-Impact Contracts</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6">
              Engineering modern, <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400 bg-clip-text text-transparent">
                high-performance web products
              </span>
            </h1>

            {/* Sub-headline / Value Proposition */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8">
              Hi, I&apos;m <span className="font-semibold text-slate-900 dark:text-white">Henok Birhanu</span>. 
              A Frontend & Full-Stack Engineer specializing in <span className="font-semibold text-blue-600 dark:text-blue-400">React</span>, <span className="font-semibold text-blue-600 dark:text-blue-400">Next.js</span>, <span className="font-semibold text-blue-600 dark:text-blue-400">Angular</span>, and <span className="font-semibold text-blue-600 dark:text-blue-400">TypeScript</span>. 
              I build scalable, accessible, and production-grade applications that convert visitors and solve complex user workflows.
            </p>

            {/* Action Buttons & Fast CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Explore Featured Work</span>
                <HiArrowNarrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700 transition-all duration-200 hover:-translate-y-0.5"
              >
                <HiDocumentDownload className="w-4 h-4 text-blue-500" />
                <span>Download CV / Resume</span>
              </a>

              {/* Fast Copy Email Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-medium text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 transition-colors"
                title="Copy email to clipboard"
                aria-label="Copy Henok's email to clipboard"
              >
                {copied ? (
                  <>
                    <HiCheck className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <HiOutlineClipboardCopy className="w-4 h-4 text-slate-400" />
                    <span>henok9450@gmail.com</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Proof & Quick Tech Chips */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200 dark:border-slate-800/80 w-full">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Connect:
                </span>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-lg text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Send Direct Email"
                >
                  <FaEnvelope className="w-4 h-4" />
                </a>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                <span>React 19 • Next.js • Angular • TypeScript • Firebase</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase & Profile Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 rounded-3xl blur-md opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

              {/* Main Profile Card */}
              <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl">
                
                {/* Photo & Badge */}
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden mb-4 border-2 border-slate-100 dark:border-slate-800 shadow-md bg-slate-100 dark:bg-slate-800">
                    <Image
                      src="/images/profile.png"
                      alt="Henok Birhanu - Frontend & Full-Stack Engineer"
                      fill
                      priority
                      sizes="(max-width: 768px) 176px, 176px"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Henok Birhanu
                  </h3>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                    Frontend & Full-Stack Engineer
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Addis Ababa • Global Remote
                  </p>
                </div>

                {/* Key Metrics Quick Cards */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-center">
                    <div className="text-lg font-bold text-slate-900 dark:text-white">3+ Years</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Software Dev</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-center">
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">100%</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Code Quality & A11y</div>
                  </div>
                </div>

                {/* Quick Trust Highlight */}
                <div className="mt-4 p-3 rounded-xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 flex items-center gap-2.5 text-xs text-blue-900 dark:text-blue-200">
                  <HiSparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>Specialized in reactive architectures, high-scale cloud sync, and enterprise web systems.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
