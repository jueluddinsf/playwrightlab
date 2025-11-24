"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Is rewriting my entire suite worth it?",
        answer: "Absolutely. Maintaining a flaky Selenium suite costs exponentially more in engineering time than a one-time migration. Most clients see a 500-1000% ROI within the first year."
    },
    {
        question: "Do you support Java or Python bindings?",
        answer: "We specialize in migrating teams to the TypeScript/JavaScript ecosystem because it offers the best developer experience and tightest integration with modern web apps. However, we can support Python for data-heavy applications."
    },
    {
        question: "How long does a typical migration take?",
        answer: "It depends on the suite size. A typical 500-test suite takes about 4-6 weeks to fully migrate, verify, and integrate into your CI/CD pipeline."
    },
    {
        question: "Do you offer post-migration support?",
        answer: "Yes! We offer retainer packages for ongoing maintenance, flaky test debugging, and team training to ensure your automation stays healthy."
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
