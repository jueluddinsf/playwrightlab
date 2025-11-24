"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, DollarSign, Clock, Zap } from "lucide-react";

export default function ROICalculator() {
    const [testCount, setTestCount] = useState(500);
    const [execTime, setExecTime] = useState(15); // Minutes per test (Selenium avg)
    const [hourlyRate, setHourlyRate] = useState(60); // Engineer hourly rate

    const [savings, setSavings] = useState({
        hours: 0,
        cost: 0,
        infrastructure: 0
    });

    useEffect(() => {
        // Playwright is approx 5x faster than Selenium on average for complex suites
        const seleniumTime = testCount * execTime;
        const playwrightTime = seleniumTime / 5;
        const hoursSaved = (seleniumTime - playwrightTime) / 60 * 250; // Annualized (250 runs/year)

        // Flakiness reduction (assuming 20% rerun rate in Selenium vs 2% in Playwright)
        const debugHoursSaved = (testCount * 0.2 * 0.5 * 250) - (testCount * 0.02 * 0.1 * 250);

        const totalHours = Math.round(hoursSaved + debugHoursSaved);
        const totalCost = Math.round(totalHours * hourlyRate);
        const infraSavings = Math.round(totalCost * 0.15); // Approx 15% infra savings

        setSavings({
            hours: totalHours,
            cost: totalCost,
            infrastructure: infraSavings
        });
    }, [testCount, execTime, hourlyRate]);

    return (
        <section className="py-16 sm:py-24 relative bg-zinc-900/30 border-y border-white/5">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="mb-12 sm:mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-display">Estimate Your Potential Savings</h2>
                    <p className="text-zinc-400 text-base sm:text-lg">
                        Calculate the potential time and cost savings from migrating to Playwright.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                    <div className="space-y-6 sm:space-y-8">
                        <div className="space-y-4">
                            <label className="flex justify-between text-sm font-medium text-zinc-300">
                                <span>Total Test Cases</span>
                                <span className="text-playwright font-bold">{testCount}</span>
                            </label>
                            <input
                                type="range"
                                min="50"
                                max="5000"
                                step="50"
                                value={testCount}
                                onChange={(e) => setTestCount(Number(e.target.value))}
                                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-playwright"
                            />
                        </div>

                        <div className="space-y-4">
                            <label className="flex justify-between text-sm font-medium text-zinc-300">
                                <span>Avg. Execution Time (Selenium)</span>
                                <span className="text-playwright font-bold">{execTime} mins</span>
                            </label>
                            <input
                                type="range"
                                min="1"
                                max="60"
                                step="1"
                                value={execTime}
                                onChange={(e) => setExecTime(Number(e.target.value))}
                                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-playwright"
                            />
                        </div>

                        <div className="space-y-4">
                            <label className="flex justify-between text-sm font-medium text-zinc-300">
                                <span>Engineer Hourly Rate</span>
                                <span className="text-playwright font-bold">${hourlyRate}/hr</span>
                            </label>
                            <input
                                type="range"
                                min="20"
                                max="200"
                                step="5"
                                value={hourlyRate}
                                onChange={(e) => setHourlyRate(Number(e.target.value))}
                                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-playwright"
                            />
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-playwright/10 blur-[80px] rounded-full pointer-events-none" />

                        <div className="grid gap-4 sm:gap-6 relative z-10">
                            <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/5">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 flex-shrink-0">
                                    <Clock size={20} className="sm:w-6 sm:h-6" />
                                </div>
                                <div className="min-w-0">
                                    <div className="text-xs sm:text-sm text-zinc-500">Engineering Hours Saved/Year</div>
                                    <div className="text-xl sm:text-2xl font-bold text-white">{savings.hours.toLocaleString()} hrs</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/5">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 flex-shrink-0">
                                    <Zap size={20} className="sm:w-6 sm:h-6" />
                                </div>
                                <div className="min-w-0">
                                    <div className="text-xs sm:text-sm text-zinc-500">Infrastructure Savings</div>
                                    <div className="text-xl sm:text-2xl font-bold text-white">${savings.infrastructure.toLocaleString()}</div>
                                </div>
                            </div>

                            <div className="mt-3 sm:mt-4 pt-4 sm:pt-6 border-t border-white/10">
                                <div className="text-center">
                                    <div className="text-xs sm:text-sm text-zinc-500 mb-2 uppercase tracking-wider">Total Annual Impact</div>
                                    <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-playwright to-orange">
                                        ${(savings.cost + savings.infrastructure).toLocaleString()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
