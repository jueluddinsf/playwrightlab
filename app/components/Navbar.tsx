"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/50 backdrop-blur-md"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-playwright to-orange rounded-lg" />
        <span className="text-xl font-bold tracking-tight text-white font-display">
          PlaywrightLab
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a href="/#services" className="text-sm hover:text-playwright transition-colors">Services</a>
        <a href="/blog" className="text-sm hover:text-playwright transition-colors">Blog</a>
        <a href="/case-studies" className="text-sm hover:text-playwright transition-colors">Case Studies</a>
        <a href="/resources" className="text-sm hover:text-playwright transition-colors">Resources</a>
        <a href="/schedule" className="text-sm hover:text-playwright transition-colors">Schedule</a>
        <a href="/#contact" className="text-sm hover:text-playwright transition-colors">Contact</a>
        <a
          href="/#audit"
          className="px-6 py-2 rounded-lg bg-playwright text-black font-bold hover:bg-playwright/90 transition-colors"
        >
          Get Audit
        </a>
      </nav>
    </motion.nav>
  );
}
