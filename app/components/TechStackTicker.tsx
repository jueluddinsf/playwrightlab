"use client";

import { motion } from "framer-motion";
import { Terminal, FileCode, Container, Github, Activity, Cloud, ShieldCheck } from "lucide-react";

const techs = [
    { name: "Playwright", icon: Terminal },
    { name: "TypeScript", icon: FileCode },
    { name: "Docker", icon: Container },
    { name: "GitHub Actions", icon: Github },
    { name: "k6", icon: Activity },
    { name: "Azure DevOps", icon: Cloud },
    { name: "Axe-core", icon: ShieldCheck },
];

// Duplicate the list for seamless scrolling
const tickerItems = [...techs, ...techs, ...techs];

export default function TechStackTicker() {
    return (
        <section className="py-12 border-y border-white/5 bg-black/50 overflow-hidden">
            <div className="relative flex">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

                <motion.div
                    className="flex items-center gap-16 px-8"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity
                    }}
                >
                    {tickerItems.map((tech, index) => (
                        <div key={index} className="flex items-center gap-3 text-zinc-400 flex-shrink-0">
                            <tech.icon size={24} className="text-zinc-500" />
                            <span className="text-lg font-semibold font-display whitespace-nowrap">{tech.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
