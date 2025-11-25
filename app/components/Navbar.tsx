"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "/#services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/why-hire-us", label: "Why Us" },
    { href: "/blog", label: "Blog" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/50 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-playwright to-orange rounded-lg" />
          <span className="text-xl font-bold tracking-tight text-white font-display">
            PlaywrightLab
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm hover:text-playwright transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#audit"
            className="px-6 py-2 rounded-lg bg-playwright text-black font-bold hover:bg-playwright/90 transition-colors"
          >
            Get Audit
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-playwright transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-zinc-900 border-l border-white/10 z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                  <span className="text-lg font-bold text-white font-display">Menu</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-white hover:text-playwright transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col p-6 space-y-1 flex-1">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-base text-white hover:text-playwright hover:bg-white/5 py-3 px-4 rounded-lg transition-all"
                    >
                      {link.label}
                    </motion.a>
                  ))}

                  {/* CTA Button */}
                  <motion.a
                    href="/#audit"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="mt-6 px-6 py-3 rounded-lg bg-playwright text-black font-bold hover:bg-playwright/90 transition-colors text-center"
                  >
                    Get Audit
                  </motion.a>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
