import Link from 'next/link';
import { HiHome, HiArrowLeft } from 'react-icons/hi';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-blue-500/10 text-blue-600 dark:text-blue-400 font-extrabold text-3xl mb-6 border border-blue-500/20 shadow-inner">
          404
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
          Page Not Found
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">
          The page you are looking for doesn&apos;t exist or may have been moved. Return to the main portfolio to explore projects, skills, and experience.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all duration-200"
          >
            <HiHome className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700 transition-all duration-200"
          >
            <HiArrowLeft className="w-4 h-4" />
            <span>View Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
