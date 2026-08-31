'use client';

import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { PERSONAL_INFO } from '@/app/lib/constants';
import { 
  HiSun, 
  HiMoon, 
  HiMenuAlt3, 
  HiX, 
  HiDocumentText, 
  HiArrowRight 
} from 'react-icons/hi';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-[#090d16]/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand & Availability Status */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-3 text-slate-900 dark:text-white"
          aria-label="Henok Birhanu - Back to Top"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-sm">
            <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[10px] flex items-center justify-center font-black text-sm tracking-wider text-blue-600 dark:text-blue-400">
              HB
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Henok Birhanu
            </span>
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Available for work
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-200/70 dark:border-slate-800/70 backdrop-blur-md">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls (Resume, Theme Toggle, Mobile Menu) */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:outline-none"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? (
              <HiSun className="w-5 h-5 text-amber-400" />
            ) : (
              <HiMoon className="w-5 h-5 text-indigo-600" />
            )}
          </button>

          {/* Resume CTA (Desktop) */}
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-100 border border-slate-700/50 shadow-sm transition-all hover:shadow hover:-translate-y-0.5"
            aria-label="Download Henok's Resume"
          >
            <HiDocumentText className="w-4 h-4 text-blue-400" />
            <span>Resume</span>
          </a>

          {/* Contact Quick CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
          >
            <span>Let&apos;s Talk</span>
            <HiArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:ring-2 focus:ring-blue-500"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-6 py-6 transition-all duration-300 shadow-xl">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            
            <div className="pt-4 mt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold bg-slate-900 dark:bg-slate-800 text-white"
              >
                <HiDocumentText className="w-5 h-5 text-blue-400" />
                <span>View Resume / CV</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
              >
                <span>Get In Touch</span>
                <HiArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}