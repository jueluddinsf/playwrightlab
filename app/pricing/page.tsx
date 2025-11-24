import { Metadata } from "next";
import { Check, ArrowRight, Zap, Shield, Clock } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Pricing | Playwright Migration Services",
    description: "Transparent pricing for Playwright migration services. Packages starting at $15k for small teams. Custom quotes for enterprise. NYC-based consultancy.",
};

const pricingTiers = [
    {
        name: "Starter",
        subtitle: "For small teams",
        price: "$15,000",
        duration: "2-3 weeks",
        testRange: "100-300 tests",
        features: [
            "Up to 300 test migrations",
            "Page Object Model setup",
            "CI/CD integration (1 pipeline)",
            "2 weeks of post-launch support",
            "Knowledge transfer session",
            "Basic documentation",
        ],
        ideal: "Startups, small product teams",
        cta: "Get Started",
        popular: false,
    },
    {
        name: "Professional",
        subtitle: "Most popular",
        price: "$35,000",
        duration: "4-6 weeks",
        testRange: "300-800 tests",
        features: [
            "Up to 800 test migrations",
            "Advanced Page Object Model",
            "CI/CD integration (multiple pipelines)",
            "Visual regression testing setup",
            "API mocking & network interception",
            "4 weeks of post-launch support",
            "Team training (2 sessions)",
            "Comprehensive documentation",
            "Flaky test remediation",
        ],
        ideal: "Growing companies, Series A-B startups",
        cta: "Most Popular",
        popular: true,
    },
    {
        name: "Enterprise",
        subtitle: "For large teams",
        price: "Custom",
        duration: "6-12 weeks",
        testRange: "800+ tests",
        features: [
            "Unlimited test migrations",
            "Custom framework architecture",
            "Multi-repo CI/CD integration",
            "Advanced visual regression",
            "Performance testing setup",
            "8 weeks of post-launch support",
            "Dedicated Slack channel",
            "On-site training (if NYC-based)",
            "Custom reporting dashboards",
            "Priority support",
        ],
        ideal: "Enterprise teams, complex migrations",
        cta: "Contact Sales",
        popular: false,
    },
];

const addOns = [
    { name: "Additional training session", price: "$2,500" },
    { name: "Extended support (per month)", price: "$5,000" },
    { name: "Performance testing setup", price: "$8,000" },
    { name: "Custom reporting dashboard", price: "$6,000" },
];

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-black text-white py-24">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">
                        Transparent Pricing
                    </h1>
                    <p className="text-xl text-zinc-400 mb-4">
                        Fixed-price packages for predictable budgets. Custom quotes for complex migrations.
                    </p>
                    <p className="text-sm text-zinc-500">
                        🗽 NYC-based team • All prices in USD • No hidden fees
                    </p>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center gap-8 mb-16 text-sm text-zinc-400">
                    <div className="flex items-center gap-2">
                        <Shield className="text-playwright" size={20} />
                        <span>Money-back guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="text-playwright" size={20} />
                        <span>On-time delivery</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Zap className="text-playwright" size={20} />
                        <span>Fast turnaround</span>
                    </div>
                </div>

                {/* Pricing Tiers */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {pricingTiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`relative p-8 rounded-3xl border ${tier.popular
                                    ? "border-playwright bg-playwright/5"
                                    : "border-white/10 bg-zinc-900/40"
                                }`}
                        >
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-playwright text-black text-sm font-bold rounded-full">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                                <p className="text-sm text-zinc-500">{tier.subtitle}</p>
                            </div>

                            <div className="mb-6">
                                <div className="text-4xl font-bold mb-2">{tier.price}</div>
                                <div className="text-sm text-zinc-400">
                                    {tier.duration} • {tier.testRange}
                                </div>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {tier.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm">
                                        <Check className="text-playwright flex-shrink-0 mt-0.5" size={16} />
                                        <span className="text-zinc-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/5">
                                <div className="text-xs text-zinc-500 mb-1">Ideal for:</div>
                                <div className="text-sm font-medium">{tier.ideal}</div>
                            </div>

                            <Link
                                href="/#audit"
                                className={`block w-full py-3 rounded-xl text-center font-bold transition-colors ${tier.popular
                                        ? "bg-playwright text-black hover:bg-playwright/90"
                                        : "bg-white/10 hover:bg-white/20"
                                    }`}
                            >
                                {tier.cta}
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Why Variable Pricing */}
                <div className="mb-16 p-8 rounded-3xl bg-zinc-900/40 border border-white/10">
                    <h2 className="text-2xl font-bold mb-6 font-display">Why Variable Pricing?</h2>
                    <div className="grid md:grid-cols-2 gap-6 text-sm text-zinc-300">
                        <div>
                            <h3 className="font-bold text-white mb-2">Every project is unique</h3>
                            <p>
                                Migration complexity varies based on test architecture, framework choice, CI/CD setup, and team size. We assess your specific needs during the free audit.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-2">Transparent scoping</h3>
                            <p>
                                After the audit, you'll receive a detailed scope document with exact deliverables, timeline, and fixed price. No surprises.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Add-Ons */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 font-display text-center">Add-Ons</h2>
                    <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                        {addOns.map((addon, idx) => (
                            <div
                                key={idx}
                                className="flex justify-between items-center p-4 rounded-xl bg-zinc-900/40 border border-white/10"
                            >
                                <span className="text-sm">{addon.name}</span>
                                <span className="font-bold text-playwright">{addon.price}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ */}
                <div className="mb-16 max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6 font-display text-center">Pricing FAQ</h2>
                    <div className="space-y-4">
                        <details className="p-6 rounded-xl bg-zinc-900/40 border border-white/10">
                            <summary className="font-bold cursor-pointer">What's included in the price?</summary>
                            <p className="mt-4 text-sm text-zinc-300">
                                All packages include test migration, framework setup, CI/CD integration, documentation, and post-launch support. No hidden fees.
                            </p>
                        </details>
                        <details className="p-6 rounded-xl bg-zinc-900/40 border border-white/10">
                            <summary className="font-bold cursor-pointer">Do you offer payment plans?</summary>
                            <p className="mt-4 text-sm text-zinc-300">
                                Yes. We offer 50% upfront, 50% on completion for all packages. Custom payment schedules available for Enterprise.
                            </p>
                        </details>
                        <details className="p-6 rounded-xl bg-zinc-900/40 border border-white/10">
                            <summary className="font-bold cursor-pointer">What if my project is larger than 800 tests?</summary>
                            <p className="mt-4 text-sm text-zinc-300">
                                We'll provide a custom quote based on your exact requirements. Typical pricing is $40-60 per test for large suites.
                            </p>
                        </details>
                        <details className="p-6 rounded-xl bg-zinc-900/40 border border-white/10">
                            <summary className="font-bold cursor-pointer">Is there a money-back guarantee?</summary>
                            <p className="mt-4 text-sm text-zinc-300">
                                Yes. If you're not satisfied after the first week, we'll refund 100% of your payment, no questions asked.
                            </p>
                        </details>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center p-12 rounded-3xl bg-gradient-to-br from-playwright/10 to-orange/10 border border-playwright/20">
                    <h2 className="text-3xl font-bold mb-4 font-display">Ready to Get Started?</h2>
                    <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                        Get a free migration audit and custom quote. We'll analyze your test suite and provide a detailed proposal within 48 hours.
                    </p>
                    <Link
                        href="/#audit"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-playwright text-black font-bold hover:bg-playwright/90 transition-colors"
                    >
                        Get Your Free Audit
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </main>
    );
}
