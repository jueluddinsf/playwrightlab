'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

declare global {
  interface Window {
    Cal: any;
  }
}

export default function SchedulePage() {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const openCal30 = () => {
    if (typeof window !== 'undefined' && window.Cal) {
      window.Cal('openModal', {
        calLink: 'playwrightlab/30min',
        config: {
          theme: 'dark',
        },
      });
    } else {
      // Fallback to direct link
      window.open('https://cal.com/playwrightlab/30min', '_blank');
    }
  };

  const openCal15 = () => {
    if (typeof window !== 'undefined' && window.Cal) {
      window.Cal('openModal', {
        calLink: 'playwrightlab/15min',
        config: {
          theme: 'dark',
        },
      });
    } else {
      // Fallback to direct link
      window.open('https://cal.com/playwrightlab/15min', '_blank');
    }
  };

  return (
    <main className="min-h-screen bg-black text-white py-24">
        <div className="container mx-auto px-6 max-w-5xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-playwright transition-colors mb-12"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Schedule a Call
          </h1>
          <p className="text-xl text-zinc-400">
            Book a time that works for you. Choose between a quick 15-minute intro or a comprehensive 30-minute consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 30 Min Option */}
          <button
            onClick={openCal30}
            className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-playwright/30 transition-all text-left w-full group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-2 group-hover:text-playwright transition-colors">
                  30-Minute Deep Dive
                </h2>
                <p className="text-zinc-400">
                  Perfect for detailed migration planning and technical questions.
                </p>
              </div>
              <svg 
                className="w-6 h-6 text-playwright opacity-0 group-hover:opacity-100 transition-opacity" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            <div className="flex items-center gap-4 text-sm text-zinc-500">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                30 minutes
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Video call
              </span>
            </div>
            <div className="mt-6 text-sm text-playwright font-medium group-hover:underline">
              Click to book your session →
            </div>
          </button>

          {/* 15 Min Option */}
          <button
            onClick={openCal15}
            className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-playwright/30 transition-all text-left w-full group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-2 group-hover:text-playwright transition-colors">
                  15-Minute Quick Chat
                </h2>
                <p className="text-zinc-400">
                  Great for quick questions and initial introductions.
                </p>
              </div>
              <svg 
                className="w-6 h-6 text-playwright opacity-0 group-hover:opacity-100 transition-opacity" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            <div className="flex items-center gap-4 text-sm text-zinc-500">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                15 minutes
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Video call
              </span>
            </div>
            <div className="mt-6 text-sm text-playwright font-medium group-hover:underline">
              Click to book your session →
            </div>
          </button>
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-playwright/5 border border-playwright/20">
          <h3 className="text-lg font-bold mb-3">What to Expect</h3>
          <ul className="space-y-2 text-zinc-300">
            <li>✓ Free consultation - no sales pitch</li>
            <li>✓ Customized advice for your automation needs</li>
            <li>✓ Clear next steps if we're a good fit</li>
            <li>✓ Access to our migration resources</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
