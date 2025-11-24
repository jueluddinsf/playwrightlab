"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">Let's Talk About Your Migration</h2>
                    <p className="text-zinc-400 text-lg mb-10">
                        Get in touch to discuss your Playwright migration. We'll help you assess your needs and create a plan.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="mailto:hello@playwrightlab.io"
                            className="flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-zinc-200 transition-colors"
                        >
                            <Mail size={20} />
                            hello@playwrightlab.io
                        </a>
                        <a
                            href="https://twitter.com/playwrightlab"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white/5 transition-colors"
                        >
                            <MessageSquare size={20} />
                            DM us on Twitter
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
