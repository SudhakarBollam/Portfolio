// app/layout.tsx
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sudhakar Bollam | Full-Stack Developer & AI Enthusiast',
  description:
    'Full-stack developer with expertise in React, Next.js, Node.js, and AI. Explore my projects, skills, and experience.',
  keywords: [
    'Full-Stack Developer',
    'React',
    'Next.js',
    'Node.js',
    'AI Developer',
    'Frontend',
    'Backend',
    'Portfolio',
  ],
  authors: [{ name: 'Sudhakar Bollam' }],
  creator: 'Sudhakar Bollam',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sudhakar-portfolio.vercel.app',
    title: 'Sudhakar Bollam | Full-Stack Developer & AI Enthusiast',
    description:
      'Full-stack developer with expertise in React, Next.js, Node.js, and AI.',
    siteName: 'Sudhakar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sudhakar Bollam | Full-Stack Developer & AI Enthusiast',
    description:
      'Full-stack developer with expertise in React, Next.js, Node.js, and AI.',
    creator: '@SudhakarBollam6',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0e27" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-dark-bg text-text-primary antialiased" suppressHydrationWarning>
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
