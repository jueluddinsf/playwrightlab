"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Container,
    Shield,
    Users,
    Layers,
    Eye,
    Network,
    Activity,
    Smartphone
} from "lucide-react";

const ServiceCard = ({ title, description, icon: Icon, delay = 0 }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="group relative p-5 sm:p-6 rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-playwright/50 hover:bg-zinc-900/80 transition-all duration-500 overflow-hidden flex flex-col h-full hover:shadow-[0_0_30px_-10px_rgba(46,173,51,0.3)]"
    >
        <div className="absolute inset-0 bg-gradient-to-br from-playwright/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 flex-1">
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 group-hover:bg-playwright/20 group-hover:text-playwright transition-all duration-300 text-zinc-400">
                <Icon size={20} />
            </div>

            <h3 className="text-base sm:text-lg font-bold text-white mb-2 font-display">{title}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
        </div>
    </motion.div>
);

const services = [
    {
        title: "Test Suite Migration",
        description: "Systematic conversion of Selenium/Cypress tests to TypeScript Playwright. We handle Page Object Model refactoring and test architecture updates.",
        icon: Code2,
    },
    {
        title: "Framework Architecture",
        description: "Scalable design patterns, strict TypeScript implementation, and custom ESLint rules to ensure long-term maintainability.",
        icon: Layers,
    },
    {
        title: "Visual Regression",
        description: "Pixel-perfect UI testing using Playwright's snapshot engine to catch unintended visual changes across devices.",
        icon: Eye,
    },
    {
        title: "Test Infrastructure Setup",
        description: "Configure Dockerized test environments and reporting tools (Allure/Monocart) for reliable, reproducible test execution.",
        icon: Container,
    },
    {
        title: "API Integration Testing",
        description: "Validate backend endpoints alongside UI flows. Ensure data integrity and faster feedback loops without browser overhead.",
        icon: Network,
    },
    {
        title: "Performance Engineering",
        description: "Reuse your functional tests for load testing. We integrate k6 to simulate high traffic and identify bottlenecks.",
        icon: Activity,
    },
    {
        title: "CI/CD Orchestration",
        description: "Optimized pipelines on GitHub Actions/Azure DevOps with sharding, parallelization, and smart retries.",
        icon: Shield,
    },
    {
        title: "Mobile Web Emulation",
        description: "Comprehensive testing of responsive layouts and touch events using Playwright's mobile device emulation.",
        icon: Smartphone,
    },
    {
        title: "Team Training & Support",
        description: "Hands-on training sessions and pair-programming to help your team master Playwright best practices and patterns.",
        icon: Users,
    },
];

export default function Services() {
    return (
        <section id="services" className="py-16 sm:py-24 relative bg-black/50">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="mb-12 sm:mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-display">Complete Test Automation Services</h2>
                    <p className="text-zinc-400 text-base sm:text-lg">
                        From migration strategy to implementation, we help you build robust test automation tailored to your needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            {...service}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
