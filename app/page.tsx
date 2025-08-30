'use client';

import { projects } from '@/app/lib/constants';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Your Formspree form ID
  const FORMSPREE_FORM_ID = "xzzvljbr";

  // Handle scroll and set active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const sections = ['home', 'projects', 'skills', 'contact'];

      for (const section of sections) {
        const element = sectionRefs.current[section];
        if (element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    // Store refs to section elements
    sectionRefs.current = {
      home: document.getElementById('home'),
      projects: document.getElementById('projects'),
      skills: document.getElementById('skills'),
      contact: document.getElementById('contact'),
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.target as HTMLFormElement);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  // Navigation component
  const Navigation = () => (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm py-4">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <button
          onClick={() => scrollToSection('home')}
          className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
        >
          Henok B.
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {['home', 'projects', 'skills', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize transition-colors ${activeSection === item
                  ? 'text-blue-600 dark:text-blue-400 font-medium'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 dark:text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col space-y-4">
            {['home', 'projects', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize text-left py-2 transition-colors ${activeSection === item
                    ? 'text-blue-600 dark:text-blue-400 font-medium'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-16 pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Hi, I&apos;m <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Henok Birhanu</span>
            </h1>
            {/* UPDATED TEXT SECTION START */}
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-justify">
              <span className="font-semibold text-gray-900 dark:text-white">
                A frontend developer passionate about building modern, responsive, and user-centric web applications.
              </span>{" "}
              I specialize in{" "}
              <strong className="text-blue-600 dark:text-blue-400">React</strong>{" "}
              and{" "}
              <strong className="text-blue-600 dark:text-blue-400">Tailwind CSS</strong>,
              crafting clean and efficient interfaces from design to deployment.
            </p>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              My development toolkit also includes experience with{" "}
              <strong className="text-blue-600 dark:text-blue-400">Angular</strong>,{" "}
              <strong className="text-blue-600 dark:text-blue-400">Firebase</strong>,{" "}
              and{" "}
              <strong className="text-blue-600 dark:text-blue-400">Python</strong>,
              allowing me to tackle a wide range of full-stack challenges.
            </p>



            {/* UPDATED TEXT SECTION END */}
            <div className="flex flex-wrap gap-4 mt-6">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Contact Me
              </button>
            </div>

          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full overflow-hidden shadow-xl group">
              <img
                src="/images/profile.png"
                alt="Profile of Henok Birhanu"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              My Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are some of the projects It&apos;ve worked on, showcasing my skills and approach to problem-solving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700 group overflow-hidden"
              >
                <div className="relative mb-6 rounded-lg overflow-hidden h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <div className="text-4xl opacity-50">🚀</div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>

                <Link
                  href={project.link}
                  className="inline-flex items-center font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors"
                >
                  View Project
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are the tools and technologies I use to bring ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              { name: 'React', icon: '⚛️', level: 'Advanced' },
              { name: 'Angular', icon: '🅰️', level: 'Intermediate' },
              { name: 'Next.js', icon: '▲', level: 'Advanced' },
              { name: 'Python', icon: '🐍', level: 'Intermediate' },
              { name: 'TypeScript', icon: '📘', level: 'Advanced' },
              { name: 'Tailwind CSS', icon: '🎨', level: 'Advanced' },
              { name: 'Node.js', icon: '🟢', level: 'Intermediate' },
              { name: 'MongoDB', icon: '🍃', level: 'Intermediate' },
              { name: 'PostgreSQL', icon: '🐘', level: 'Intermediate' },
              { name: 'Firebase', icon: '🔥', level: 'Intermediate' },
              { name: 'Git', icon: '📦', level: 'Advanced' },
            ].map((skill) => (
              <div key={skill.name} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center group hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{skill.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Have a project in mind or want to chat? Feel free to reach out!
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                  placeholder="Your name"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                  placeholder="your.email@example.com"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                  placeholder="Your message"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : 'Send Message'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg mt-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg mt-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                  </svg>
                  There was an error sending your message. Please try again or email me directly.
                </div>
              )}
            </form>

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-6 text-center">Or reach me directly</h3>

              <div className="flex justify-center gap-6">
                <a
                  href="https://www.linkedin.com/in/henok-birhanu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-white dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300 shadow-md hover:shadow-lg"
                  aria-label="LinkedIn"
                >
                  <span className="fab fa-linkedin text-blue-600 dark:text-blue-400 text-xl"></span>
                </a>
                <a
                  href="https://github.com/Henok9450"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-white dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300 shadow-md hover:shadow-lg"
                  aria-label="GitHub"
                >
                  <span className="fab fa-github text-gray-800 dark:text-gray-200 text-xl"></span>
                </a>
                <a
                  href="mailto:henok9450@gmail.com"
                  className="p-4 rounded-full bg-white dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300 shadow-md hover:shadow-lg"
                  aria-label="Email"
                >
                  <span className="fas fa-envelope text-red-500 dark:text-red-400 text-xl"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
