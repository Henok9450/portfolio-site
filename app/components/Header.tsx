'use client';

import { useEffect } from 'react';

export default function Header() {
  useEffect(() => {
    // Navigation active state
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    function setActiveNavLink() {
      let currentSection = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop - 100) {
          currentSection = section.getAttribute('id') || '';
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href')?.substring(1) === currentSection) {
          link.classList.add('active');
        }
      });
    }
    
    window.addEventListener('scroll', setActiveNavLink);
    
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1) || '';
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 20,
            behavior: 'smooth'
          });
        }
      });
    });

    return () => {
      window.removeEventListener('scroll', setActiveNavLink);
    };
  }, []);

  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle('dark');
    localStorage.setItem('theme', htmlElement.classList.contains('dark') ? 'dark' : 'light');
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          MyPortfolio
        </a>
        
        <div className="flex gap-6 items-center">
          <a href="#home" className="nav-link font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Home
          </a>
          <a href="#projects" className="nav-link font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Projects
          </a> 
          <a href="#skills" className="nav-link font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Skills
          </a>
          <a href="#contact" className="nav-link font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Contact
          </a>
          <button 
            id="theme-toggle" 
            className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <i className="fas fa-moon dark:hidden"></i>
            <i className="fas fa-sun hidden dark:block"></i>
          </button>
        </div>
      </nav>
    </header>
  );
}