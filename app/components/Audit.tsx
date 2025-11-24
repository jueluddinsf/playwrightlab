"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Audit() {
    return (
        <section id="audit" className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-orange/10 blur-[120px] rounded-full opacity-30 pointer-events-none" />

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
                        Get Your 50-Point <br />
                        <span className="text-orange">Migration Roadmap</span>
                    </h2>
                    <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                        Stop guessing. Our senior engineers will analyze your existing Selenium/Cypress suite and provide a detailed blueprint for your Playwright migration.
                    </p>

                    <ul className="space-y-4 mb-10">
                        {[
                            "Flakiness Root Cause Analysis",
                            "Page Object Model Refactoring Strategy",
                            "CI/CD Pipeline Optimization Plan",
                            "ROI & Timeline Estimation"
                        ].map((item, index) => (
                            <li key={index} className="flex items-center gap-3 text-zinc-300">
                                <CheckCircle2 className="text-orange flex-shrink-0" size={20} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <a
                        href="https://cal.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-orange rounded-full hover:bg-orange/90 transition-all hover:scale-105 shadow-[0_0_30px_-10px_rgba(255,87,34,0.6)]"
                    >
                        Schedule Your Audit
                        <ArrowRight size={18} />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/90 backdrop-blur-xl p-6 md:p-8">
                        {/* Dashboard Header */}
                        <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="text-xs font-mono text-zinc-500">AUDIT_ID: #8X29-MIG</div>
                        </div>

                        <div className="grid gap-8">
                            {/* Score Section */}
                            <div className="flex items-center gap-6">
                                <div className="relative w-24 h-24 flex-shrink-0">
                                    <svg className="w-full h-full transform -rotate-90">
                                        <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-zinc-800" />
                                        <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="251.2" strokeDashoffset="37.68" className="text-playwright" />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                                        <span className="text-2xl font-bold text-white">85</span>
                                        <span className="text-[10px] text-zinc-500 uppercase">Score</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">Migration Readiness</h3>
                                    <p className="text-sm text-zinc-400">Your suite is ready for porting, but critical flakiness risks detected in 3 modules.</p>
                                </div>
                            </div>

                            {/* Metrics Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                    <div className="text-xs text-zinc-500 mb-2 uppercase tracking-wider">Test Velocity</div>
                                    <div className="flex items-end gap-2 h-16">
                                        {[40, 65, 45, 80, 55, 90, 100].map((h, i) => (
                                            <div key={i} className="flex-1 bg-orange/20 rounded-t-sm relative group overflow-hidden">
                                                <motion.div
                                                    initial={{ height: 0 }}
                                                    whileInView={{ height: `${h}%` }}
                                                    transition={{ duration: 1, delay: i * 0.1 }}
                                                    className="absolute bottom-0 w-full bg-orange"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                    <div className="text-xs text-zinc-500 mb-2 uppercase tracking-wider">Critical Issues</div>
                                    <div className="space-y-2">
                                        {["Hardcoded Waits", "XPath Selectors", "Global State"].map((issue, i) => (
                                            <div key={i} className="flex items-center gap-2 text-xs text-red-300 bg-red-500/10 px-2 py-1.5 rounded-lg border border-red-500/20">
                                                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                                {issue}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -left-6 bg-zinc-900 border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold">
                            A+
                        </div>
                        <div>
                            <div className="text-xs text-zinc-500 uppercase tracking-wider font-bold">Potential Score</div>
                            <div className="text-white font-bold">Playwright Optimized</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
