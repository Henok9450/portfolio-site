'use client';

import { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '@/app/lib/constants';
import { HiArrowUp } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const [showFloatingTop, setShowFloatingTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <footer className="mt-auto border-t border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-[#090d16]/50 backdrop-blur-sm py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copy */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-bold text-base text-slate-900 dark:text-white">
                Henok Birhanu
              </span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Core Systems & Software Engineer
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} Henok Birhanu. Built with Next.js 15, React 19 & Tailwind CSS.
            </p>
          </div>

          {/* Quick Links & Socials */}
          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>

            {/* Back to Top */}
            <button
              type="button"
              onClick={scrollToTop}
              className="min-h-[44px] px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5 text-xs font-semibold"
              aria-label="Back to top of page"
            >
              <HiArrowUp className="w-4 h-4" />
              <span>Top</span>
            </button>
          </div>

        </div>
      </footer>

      {/* Floating Back to Top Button for Mobile & Long Desktop Navigation */}
      {showFloatingTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Scroll back to top"
          title="Scroll back to top"
        >
          <HiArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}