"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Terminal } from "lucide-react";
import Link from "next/link";

const CodeBlock = ({ title, code, isBad = false }: { title: string; code: string; isBad?: boolean }) => (
    <div className={`rounded-xl border ${isBad ? "border-red-500/20 bg-red-950/10" : "border-playwright/20 bg-playwright/5"} overflow-hidden`}>
        <div className={`px-4 py-2 text-xs font-mono flex items-center gap-2 border-b ${isBad ? "border-red-500/20 text-red-400" : "border-playwright/20 text-playwright"}`}>
            <Terminal size={12} />
            {title}
        </div>
        <div className="p-4 overflow-x-auto">
            <pre className="text-xs sm:text-sm font-mono leading-relaxed text-zinc-300">
                <code>{code}</code>
            </pre>
        </div>
    </div>
);

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-playwright/20 blur-[120px] rounded-full opacity-30 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-orange/10 blur-[100px] rounded-full opacity-20 pointer-events-none" />

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-playwright mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-playwright opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-playwright"></span>
                        </span>
                        Accepting New Migration Clients
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 font-display">
                        Stop Debugging <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange">Flaky Tests.</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-zinc-400 mb-8 max-w-lg leading-relaxed">
                        We engineer high-velocity migrations from Selenium/Cypress to <span className="text-white font-semibold">Playwright</span>.
                        Production-grade automation infrastructure for teams that ship fast.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#audit"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-orange rounded-full hover:bg-orange/90 transition-all hover:scale-105 shadow-[0_0_30px_-10px_rgba(255,87,34,0.6)]"
                        >
                            Get a Migration Audit
                            <ArrowRight size={18} />
                        </Link>
                        <Link
                            href="#services"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border border-white/20 rounded-full hover:bg-white/5 transition-all"
                        >
                            View Service Plans
                        </Link>
                    </div>

                    <div className="mt-12 flex items-center gap-8 text-sm text-zinc-500">
                        <div className="flex items-center gap-2">
                            <Check size={16} className="text-playwright" />
                            <span>Zero Flakiness Guarantee</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check size={16} className="text-playwright" />
                            <span>Parallel Execution</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="relative z-10 space-y-6">
                        <CodeBlock
                            title="Legacy Selenium (Java)"
                            isBad={true}
                            code={`// The Old Way
driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
try {
    WebElement element = driver.findElement(By.id("submit"));
    Thread.sleep(2000); // 😱 Flaky!
    element.click();
} catch (StaleElementReferenceException e) {
    // Maintenance Hell
}`}
                        />

                        <div className="flex justify-center -my-3 relative z-20">
                            <div className="bg-zinc-900 border border-zinc-800 p-2 rounded-full">
                                <ArrowRight className="text-zinc-500 rotate-90" />
                            </div>
                        </div>

                        <CodeBlock
                            title="Modern Playwright (TypeScript)"
                            code={`// The PlaywrightLab Way
await page.goto('/login');

// Auto-waiting, strict selectors, reliable
await page.getByRole('button', { name: 'Submit' }).click();

await expect(page).toHaveURL('/dashboard');
// ✨ Blazing fast & stable`}
                        />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-playwright to-emerald-500 rounded-full blur-[60px] opacity-20" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-orange to-red-500 rounded-full blur-[60px] opacity-20" />
                </motion.div>
            </div>
        </section>
    );
}
