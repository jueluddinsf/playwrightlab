import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.REPLIT_DEV_DOMAIN ? `https://${process.env.REPLIT_DEV_DOMAIN}` : 'https://playwrightlab.io'),
  title: {
    default: "Playwright Migration Services | Hire Expert Consultants | PlaywrightLab",
    template: "%s | PlaywrightLab"
  },
  description: "Hire Playwright migration experts. We migrate Selenium & Cypress to Playwright in 4-6 weeks. 70% faster tests, 80% fewer flaky tests. Free audit for qualified teams.",
  keywords: [
    // High-intent commercial keywords
    "hire playwright consultant",
    "playwright migration services",
    "selenium to playwright migration company",
    "playwright consulting services",
    "test automation migration experts",
    // Problem-focused keywords
    "fix flaky selenium tests",
    "speed up e2e tests",
    "reduce test execution time",
    // Solution keywords
    "playwright migration agency",
    "playwright implementation services",
    "e2e test automation consultancy"
  ],
  authors: [{ name: "PlaywrightLab Team" }],
  creator: "PlaywrightLab LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://playwrightlab.io",
    title: "Hire Playwright Migration Experts | 4-6 Week Migrations",
    description: "Professional Playwright migration services. Migrate 500+ tests in 4-6 weeks. Reduce runtime by 70%, eliminate flaky tests. Free audit.",
    siteName: "PlaywrightLab",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PlaywrightLab - Professional Playwright Migration Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Playwright Migration Experts | PlaywrightLab",
    description: "Migrate Selenium/Cypress to Playwright in 4-6 weeks. 70% faster tests. Free audit for qualified teams.",
    images: ["/og-image.png"],
    creator: "@playwrightlab",
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

import JsonLd from "./components/JsonLd";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-black text-white`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
