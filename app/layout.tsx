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

const CANONICAL_URL = 'https://henokbirhanu-portfolio.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(CANONICAL_URL),
  title: 'Henok Birhanu | Core Systems & Software Engineer',
  description:
    'Henok Birhanu is a Core Systems and Software Engineer specializing in enterprise banking systems, Oracle, WebLogic, FLEXCUBE, APIs, React, Angular and cloud technologies.',
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Henok Birhanu',
    'Henok Birhanu Ethiopia',
    'Core Systems & Software Engineer',
    'Core Banking Engineer',
    'Oracle FLEXCUBE',
    'Oracle WebLogic',
    'Oracle SOA',
    'Oracle Database',
    'Enterprise Systems',
    'Enterprise Application Support',
    'Middleware',
    'API Integration',
    'REST APIs',
    'High Availability',
    'Linux',
    'Full Stack Engineer',
    'Frontend Engineer',
    'React Developer',
    'Next.js Developer',
    'Angular Developer',
    'TypeScript Engineer',
    'Node.js',
    'Python',
    'Firebase',
    'PostgreSQL',
    'MongoDB',
    'Cloud',
    'DevOps',
    'Software Engineering',
    'Software Engineer Ethiopia',
    'Addis Ababa Engineer'
  ],
  authors: [{ name: PERSONAL_INFO.name, url: PERSONAL_INFO.github }],
  creator: PERSONAL_INFO.name,
  publisher: PERSONAL_INFO.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${CANONICAL_URL}/`,
    title: 'Henok Birhanu | Core Systems & Software Engineer',
    description:
      'Core Systems and Software Engineer specializing in enterprise banking systems, Oracle, WebLogic, FLEXCUBE, APIs, React, Angular and cloud technologies.',
    siteName: 'Henok Birhanu',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Henok Birhanu | Core Systems & Software Engineer',
    description:
      'Core Systems and Software Engineer specializing in enterprise banking systems, Oracle, WebLogic, FLEXCUBE, APIs, React, Angular and cloud technologies.',
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
  url: `${CANONICAL_URL}/`,
  jobTitle: PERSONAL_INFO.role,
  description:
    'Core Systems and Software Engineer specializing in enterprise banking systems, Oracle, WebLogic, FLEXCUBE, API integration and modern software development.',
  image: `${CANONICAL_URL}/images/profile.png`,
  sameAs: [
    PERSONAL_INFO.linkedin,
    PERSONAL_INFO.github,
  ],
  knowsAbout: [
    'Core Banking',
    'Oracle FLEXCUBE',
    'Oracle WebLogic',
    'Oracle SOA',
    'Oracle Database',
    'Enterprise Systems',
    'Enterprise Application Support',
    'Middleware',
    'API Integration',
    'REST APIs',
    'High Availability',
    'Linux',
    'React',
    'Next.js',
    'Angular',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Python',
    'Firebase',
    'PostgreSQL',
    'MongoDB',
    'Cloud',
    'DevOps',
    'Software Engineering'
  ],
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