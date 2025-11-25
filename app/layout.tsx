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
    default: "Playwright Migration Services | Expert Test Automation Consultants NYC",
    template: "%s | PlaywrightLab"
  },
  description: "Professional Playwright migration services for Selenium and Cypress test suites. NYC-based consultants specializing in test automation, CI/CD integration, and team training. Get expert assessment.",
  keywords: [
    // High-intent commercial keywords
    "playwright migration services",
    "hire playwright consultant",
    "playwright consulting nyc",
    "selenium to playwright migration",
    "cypress to playwright migration",
    "test automation consultant",
    "playwright migration agency",
    // Problem-focused keywords
    "fix flaky selenium tests",
    "reduce test execution time",
    "test automation migration",
    "playwright implementation services",
    // Location keywords
    "playwright consultant nyc",
    "test automation services new york",
    // Technical keywords
    "playwright training",
    "e2e test automation",
    "playwright ci cd integration",
    "playwright page object model"
  ],
  authors: [{ name: "PlaywrightLab Team" }],
  creator: "PlaywrightLab LLC",
  publisher: "PlaywrightLab LLC",
  category: "Technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://playwrightlab.io",
    title: "Professional Playwright Migration Services | NYC Test Automation Experts",
    description: "Expert Playwright migration and test automation consulting. NYC-based team specializing in Selenium/Cypress migrations, CI/CD integration, and developer training.",
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
    title: "Playwright Migration Services | NYC Test Automation Consultants",
    description: "Expert Playwright migration services for Selenium/Cypress test suites. NYC-based consultants with comprehensive training and support.",
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
  alternates: {
    canonical: "https://playwrightlab.io",
  },
  verification: {
    google: "google-site-verification=PLACEHOLDER_CODE", // TODO: User to replace with actual code
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
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
