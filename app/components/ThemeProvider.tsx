'use client';

import { useEffect, useState } from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check for saved theme preference or use OS preference
    if (localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Fade-in animation for sections
    function checkFade() {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          el.classList.add('visible');
        }
      });
    }

    window.addEventListener('scroll', checkFade);
    checkFade(); // Initial check

    return () => {
      window.removeEventListener('scroll', checkFade);
    };
  }, []);

  // Prevent rendering until mounted on client to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen flex flex-col">
        <div className="flex-grow"></div>
      </div>
    );
  }

  return <>{children}</>;
}