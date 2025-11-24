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
  metadataBase: new URL(process.env.REPLIT_DEV_DOMAIN ? `https://${process.env.REPLIT_DEV_DOMAIN}` : 'https://playwrightlab.com'),
  title: {
    default: "PlaywrightLab LLC | High-Velocity Automation Migrations",
    template: "%s | PlaywrightLab LLC"
  },
  description: "Expert Playwright migration services. We convert legacy Selenium/Cypress suites to reliable, high-velocity Playwright automation. Get a free audit today.",
  keywords: ["Playwright migration", "Selenium to Playwright", "Cypress to Playwright", "Test Automation Consultancy", "Playwright Experts", "E2E Testing"],
  authors: [{ name: "PlaywrightLab Team" }],
  creator: "PlaywrightLab LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://playwrightlab.com",
    title: "PlaywrightLab LLC | High-Velocity Automation Migrations",
    description: "Expert Playwright migration services. We convert legacy Selenium/Cypress suites to reliable, high-velocity Playwright automation.",
    siteName: "PlaywrightLab LLC",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PlaywrightLab LLC - Automation Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PlaywrightLab LLC | High-Velocity Automation Migrations",
    description: "Expert Playwright migration services. Convert legacy suites to Playwright.",
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
