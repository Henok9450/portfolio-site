import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { ThemeProvider } from '@/app/components/ThemeProvider';
import { PERSONAL_INFO } from '@/app/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://henokbirhanu.dev'),
  title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.role}`,
  description: `${PERSONAL_INFO.name} is a ${PERSONAL_INFO.role} specializing in React, Next.js, Angular, TypeScript, Firebase, and high-performance web products.`,
  keywords: [
    'Henok Birhanu',
    'Frontend Developer',
    'Full-Stack Engineer',
    'React Developer',
    'Next.js Developer',
    'Angular Developer',
    'TypeScript Engineer',
    'Firebase Specialist',
    'Web Accessibility',
    'UI/UX Design',
    'Software Engineer Ethiopia',
    'Remote Frontend Engineer'
  ],
  authors: [{ name: PERSONAL_INFO.name, url: PERSONAL_INFO.github }],
  creator: PERSONAL_INFO.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://henokbirhanu.dev',
    title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.role}`,
    description: PERSONAL_INFO.bio,
    siteName: `${PERSONAL_INFO.name} Portfolio`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.role}`,
    description: PERSONAL_INFO.bio,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: PERSONAL_INFO.name,
  jobTitle: PERSONAL_INFO.role,
  url: 'https://henokbirhanu.dev',
  sameAs: [
    PERSONAL_INFO.github,
    PERSONAL_INFO.linkedin,
  ],
  knowsAbout: [
    'React',
    'Next.js',
    'Angular',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'Node.js',
    'Firebase',
    'Web Performance',
    'Web Accessibility'
  ],
  description: PERSONAL_INFO.bio,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth dark ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans selection:bg-blue-500 selection:text-white">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ThemeProvider>
          <Header />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}