"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Zap, Clock, ShieldCheck, XCircle, CheckCircle2 } from "lucide-react";

const FeatureItem = ({ icon: Icon, title, description, isNegative = false }: any) => (
    <div className="flex gap-4">
        <div className={`mt-1 flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${isNegative ? "bg-red-500/10 text-red-500" : "bg-playwright/10 text-playwright"}`}>
            <Icon size={20} />
        </div>
        <div>
            <h3 className={`font-bold mb-1 ${isNegative ? "text-red-200" : "text-white"}`}>{title}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
        </div>
    </div>
);

export default function MigrationProtocol() {
    return (
        <section id="migration" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">Why Playwright?</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        Modern test automation requires modern tools. Here's what you gain with a migration to Playwright.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* The Legacy Trap */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm"
                    >
                        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/5">
                            <AlertTriangle className="text-red-500" />
                            <h3 className="text-2xl font-bold text-white">The Legacy Trap</h3>
                        </div>

                        <div className="space-y-8">
                            <FeatureItem
                                icon={Clock}
                                title="Slower Execution"
                                description="Sequential execution and framework overheads can result in longer feedback cycles."
                                isNegative={true}
                            />
                            <FeatureItem
                                icon={XCircle}
                                title="Higher Maintenance"
                                description="Manual waits and brittle selectors can lead to frequent test failures and debugging."
                                isNegative={true}
                            />
                            <FeatureItem
                                icon={AlertTriangle}
                                title="Test Flakiness"
                                description="Intermittent failures reduce confidence in test results and require manual verification."
                                isNegative={true}
                            />
                        </div>
                    </motion.div>

                    {/* The PlaywrightLab Fix */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="p-8 rounded-3xl bg-gradient-to-b from-playwright/5 to-transparent border border-playwright/20 backdrop-blur-sm relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-playwright/10 blur-[80px] rounded-full pointer-events-none" />

                        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-playwright/10 relative z-10">
                            <Zap className="text-playwright" />
                            <h3 className="text-2xl font-bold text-white">The PlaywrightLab Fix</h3>
                        </div>

                        <div className="space-y-8 relative z-10">
                            <FeatureItem
                                icon={Zap}
                                title="Async/Await Architecture"
                                description="Modern, non-blocking execution that handles dynamic content natively."
                            />
                            <FeatureItem
                                icon={ShieldCheck}
                                title="Auto-Waiting"
                                description="Smart assertions that automatically wait for elements to be actionable."
                            />
                            <FeatureItem
                                icon={CheckCircle2}
                                title="Parallel Execution"
                                description="Run tests across multiple workers and browsers simultaneously for significantly faster results."
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
