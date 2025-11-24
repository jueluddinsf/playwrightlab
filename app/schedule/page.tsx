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
    // Initialize Cal.com inline booking widgets with dark theme
    const initCal = () => {
      if (typeof window !== 'undefined') {
        // eslint-disable-next-line
        (function (C: any, A: string, L: string) {
          let p = function (a: any, ar: any[]) {
            a.q.push(ar);
          };
          let d = C.document;
          C.Cal =
            C.Cal ||
            function () {
              let cal = C.Cal;
              let ar = arguments;
              if (!cal.loaded) {
                cal.ns = {};
                cal.q = cal.q || [];
                d.head.appendChild(d.createElement('script')).src = A;
                cal.loaded = true;
              }
              if (ar[0] === L) {
                const api: any = function () {
                  p(api, Array.prototype.slice.call(arguments));
                };
                const namespace = ar[1];
                api.q = api.q || [];
                if (typeof namespace === 'string') {
                  cal.ns[namespace] = cal.ns[namespace] || api;
                  p(cal.ns[namespace], ar);
                  p(cal, ['initNamespace', namespace]);
                } else p(cal, ar);
                return;
              }
              p(cal, ar);
            };
        })(window, 'https://app.cal.com/embed/embed.js', 'init');

        // Initialize 30min calendar
        window.Cal('init', '30min', { origin: 'https://app.cal.com' });
        window.Cal.ns['30min']('inline', {
          elementOrSelector: '#my-cal-inline-30min',
          config: { layout: 'month_view', theme: 'dark' },
          calLink: 'playwrightlab/30min',
        });
        window.Cal.ns['30min']('ui', {
          theme: 'dark',
          hideEventTypeDetails: false,
          layout: 'month_view',
        });

        // Initialize 15min calendar
        window.Cal('init', '15min', { origin: 'https://app.cal.com' });
        window.Cal.ns['15min']('inline', {
          elementOrSelector: '#my-cal-inline-15min',
          config: { layout: 'month_view', theme: 'dark' },
          calLink: 'playwrightlab/15min',
        });
        window.Cal.ns['15min']('ui', {
          theme: 'dark',
          cssVarsPerTheme: { light: { 'cal-brand': '#000000' } },
          hideEventTypeDetails: false,
          layout: 'month_view',
        });
      }
    };

    initCal();
  }, []);

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
          <div className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-playwright/30 transition-all">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">30-Minute Deep Dive</h2>
              <p className="text-zinc-400">
                Perfect for detailed migration planning and technical questions.
              </p>
            </div>
            <div
              style={{
                width: '100%',
                height: '600px',
                overflow: 'auto',
              }}
              id="my-cal-inline-30min"
              className="rounded-lg"
            />
          </div>

          {/* 15 Min Option */}
          <div className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-playwright/30 transition-all">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">15-Minute Quick Chat</h2>
              <p className="text-zinc-400">
                Great for quick questions and initial introductions.
              </p>
            </div>
            <div
              style={{
                width: '100%',
                height: '600px',
                overflow: 'auto',
              }}
              id="my-cal-inline-15min"
              className="rounded-lg"
            />
          </div>
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
