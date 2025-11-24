"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Is migrating to Playwright worth the investment?",
        answer: "For most teams, yes. Playwright offers better reliability, faster execution, and modern features that reduce maintenance burden. The time saved on debugging flaky tests and faster CI runs typically provides positive ROI within 6-12 months."
    },
    {
        question: "Which programming languages do you support?",
        answer: "We primarily work with TypeScript/JavaScript as it provides excellent tooling and integrates well with modern web applications. We can also support Python-based Playwright migrations depending on your team's needs."
    },
    {
        question: "How long does a typical migration take?",
        answer: "Timeline varies based on test suite size and complexity. A medium-sized suite (300-500 tests) typically takes 4-6 weeks including migration, verification, and CI/CD integration. We provide detailed timeline estimates after the initial audit."
    },
    {
        question: "Do you offer post-migration support?",
        answer: "Yes. All packages include post-launch support periods, and we offer extended support packages for ongoing maintenance, troubleshooting, and additional training as needed."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 relative bg-black/50">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">Common Questions</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="rounded-2xl bg-zinc-900/40 border border-white/5 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="font-bold text-white text-lg">{faq.question}</span>
                                {openIndex === i ? <Minus className="text-playwright" /> : <Plus className="text-zinc-500" />}
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-zinc-400 leading-relaxed border-t border-white/5">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
