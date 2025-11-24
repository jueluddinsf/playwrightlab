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

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
        <Link href="#services" className="hover:text-white transition-colors">
          Services
        </Link>
        <Link href="#migration" className="hover:text-white transition-colors">
          Migration Protocol
        </Link>
        <Link href="#training" className="hover:text-white transition-colors">
          Training
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="#contact"
          className="hidden sm:block px-4 py-2 text-sm font-medium text-white transition-colors hover:text-playwright"
        >
          Contact
        </Link>
        <Link
          href="#audit"
          className="px-5 py-2 text-sm font-bold text-white bg-orange rounded-full hover:bg-orange/90 transition-colors shadow-[0_0_20px_-5px_rgba(255,87,34,0.5)]"
        >
          Get Audit
        </Link>
      </div>
    </motion.nav>
  );
}
