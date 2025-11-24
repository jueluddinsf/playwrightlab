"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        quote: "We reduced our regression cycle from 3 days to 45 minutes. The migration paid for itself in the first month.",
        author: "Sarah Jenkins",
        role: "VP of Engineering, FinTech Co",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
        quote: "PlaywrightLab didn't just port our tests; they taught our team how to write better, cleaner code. Invaluable mentorship.",
        author: "David Chen",
        role: "QA Lead, HealthStream",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
    },
    {
        quote: "The visual regression testing caught bugs that would have cost us millions in lost revenue. Highly recommended.",
        author: "Elena Rodriguez",
        role: "CTO, E-Comm Giant",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">Trusted by Engineering Leaders</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5 relative"
                        >
                            <Quote className="absolute top-6 right-6 text-zinc-800" size={48} />

                            <p className="text-zinc-300 text-lg mb-8 relative z-10 leading-relaxed">
                                "{t.quote}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-800">
                                    <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <div className="font-bold text-white">{t.author}</div>
                                    <div className="text-xs text-zinc-500">{t.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
