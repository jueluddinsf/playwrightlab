import { Metadata } from "next";
import { MapPin, Award, Users, Zap, Shield, TrendingUp } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Why Hire Us | NYC Playwright Migration Experts",
    description: "NYC-based Playwright migration consultancy. 10+ years combined experience, 50+ successful migrations. On-site training available for NYC teams.",
};

const differentiators = [
    {
        icon: MapPin,
        title: "NYC-Based Team",
        description: "Located in New York City. On-site training and workshops available for local teams. Remote-friendly for nationwide clients.",
    },
    {
        icon: Award,
        title: "Proven Track Record",
        description: "50+ successful migrations across FinTech, E-Commerce, and SaaS. Average 73% reduction in test runtime.",
    },
    {
        icon: Zap,
        title: "Fast Turnaround",
        description: "Most migrations completed in 4-6 weeks. We work in parallel with your team to minimize disruption.",
    },
    {
        icon: Shield,
        title: "Risk-Free Guarantee",
        description: "100% money-back guarantee if you're not satisfied after the first week. We're that confident in our work.",
    },
    {
        icon: Users,
        title: "Hands-On Training",
        description: "We don't just migrate—we train your team. Multiple knowledge transfer sessions included in every package.",
    },
    {
        icon: TrendingUp,
        title: "Long-Term Support",
        description: "Post-launch support included. We're here to help even after the migration is complete.",
    },
];

const teamMembers = [
    {
        name: "Senior Engineers",
        experience: "10+ years in test automation",
        expertise: "Playwright, Selenium, Cypress, TestCafe",
    },
    {
        name: "DevOps Specialists",
        experience: "CI/CD pipeline optimization",
        expertise: "GitHub Actions, Jenkins, CircleCI, GitLab",
    },
    {
        name: "QA Architects",
        experience: "Framework design & best practices",
        expertise: "Page Object Model, Test Data Management",
    },
];

const comparisonPoints = [
    {
        category: "DIY Migration",
        time: "3-6 months",
        risk: "High (learning curve)",
        cost: "Opportunity cost of dev time",
        support: "Stack Overflow",
    },
    {
        category: "Offshore Agency",
        time: "2-4 months",
        risk: "Medium (communication gaps)",
        cost: "$10-20k",
        support: "Email only",
    },
    {
        category: "PlaywrightLab (Us)",
        time: "4-6 weeks",
        risk: "Low (proven process)",
        cost: "$15-35k",
        support: "Dedicated Slack + training",
        highlight: true,
    },
];

export default function WhyHireUsPage() {
    return (
        <main className="min-h-screen bg-black text-white py-24">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-playwright/10 text-playwright border border-playwright/20 text-sm mb-6">
                        <MapPin size={16} />
                        <span>Based in New York City</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">
                        Why Hire PlaywrightLab?
                    </h1>
                    <p className="text-xl text-zinc-400">
                        We're not just consultants—we're your migration partners. Here's why teams choose us.
                    </p>
                </div>

                {/* Differentiators */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {differentiators.map((item, idx) => (
                        <div
                            key={idx}
                            className="p-6 rounded-2xl bg-zinc-900/40 border border-white/10 hover:border-playwright/30 transition-colors"
                        >
                            <item.icon className="text-playwright mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-sm text-zinc-400">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Team Expertise */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 font-display text-center">Our Team</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {teamMembers.map((member, idx) => (
                            <div
                                key={idx}
                                className="p-6 rounded-2xl bg-zinc-900/40 border border-white/10"
                            >
                                <h3 className="text-lg font-bold mb-2">{member.name}</h3>
                                <p className="text-sm text-zinc-400 mb-3">{member.experience}</p>
                                <div className="text-xs text-zinc-500">
                                    <strong>Expertise:</strong> {member.expertise}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 font-display text-center">
                        DIY vs Agency vs Us
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left p-4 text-sm font-bold">Option</th>
                                    <th className="text-left p-4 text-sm font-bold">Timeline</th>
                                    <th className="text-left p-4 text-sm font-bold">Risk</th>
                                    <th className="text-left p-4 text-sm font-bold">Cost</th>
                                    <th className="text-left p-4 text-sm font-bold">Support</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonPoints.map((point, idx) => (
                                    <tr
                                        key={idx}
                                        className={`border-b border-white/10 ${point.highlight ? "bg-playwright/5" : ""
                                            }`}
                                    >
                                        <td className="p-4 font-bold">{point.category}</td>
                                        <td className="p-4 text-sm text-zinc-300">{point.time}</td>
                                        <td className="p-4 text-sm text-zinc-300">{point.risk}</td>
                                        <td className="p-4 text-sm text-zinc-300">{point.cost}</td>
                                        <td className="p-4 text-sm text-zinc-300">{point.support}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* NYC Advantage */}
                <div className="mb-16 p-8 rounded-3xl bg-gradient-to-br from-playwright/10 to-orange/10 border border-playwright/20">
                    <div className="flex items-start gap-4 mb-4">
                        <MapPin className="text-playwright flex-shrink-0" size={32} />
                        <div>
                            <h2 className="text-2xl font-bold mb-2 font-display">The NYC Advantage</h2>
                            <p className="text-zinc-300 mb-4">
                                Being based in New York City means we understand the fast-paced, high-stakes environment of tech companies. We've worked with FinTech firms in FiDi, E-Commerce companies in SoHo, and startups in Brooklyn.
                            </p>
                            <ul className="space-y-2 text-sm text-zinc-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-playwright">•</span>
                                    <span>On-site workshops available for NYC-based teams</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-playwright">•</span>
                                    <span>Same timezone collaboration (EST)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-playwright">•</span>
                                    <span>In-person kickoff meetings (optional)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-playwright">•</span>
                                    <span>Remote-friendly for nationwide clients</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Social Proof */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 font-display text-center">By the Numbers</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="text-center p-6 rounded-2xl bg-zinc-900/40 border border-white/10">
                            <div className="text-4xl font-bold text-playwright mb-2">50+</div>
                            <div className="text-sm text-zinc-400">Successful Migrations</div>
                        </div>
                        <div className="text-center p-6 rounded-2xl bg-zinc-900/40 border border-white/10">
                            <div className="text-4xl font-bold text-playwright mb-2">73%</div>
                            <div className="text-sm text-zinc-400">Avg. Runtime Reduction</div>
                        </div>
                        <div className="text-center p-6 rounded-2xl bg-zinc-900/40 border border-white/10">
                            <div className="text-4xl font-bold text-playwright mb-2">4-6</div>
                            <div className="text-sm text-zinc-400">Weeks Avg. Timeline</div>
                        </div>
                        <div className="text-center p-6 rounded-2xl bg-zinc-900/40 border border-white/10">
                            <div className="text-4xl font-bold text-playwright mb-2">100%</div>
                            <div className="text-sm text-zinc-400">Client Satisfaction</div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center p-12 rounded-3xl bg-zinc-900/40 border border-white/10">
                    <h2 className="text-3xl font-bold mb-4 font-display">Ready to Work Together?</h2>
                    <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                        Get a free migration audit. We'll analyze your test suite and provide a custom proposal within 48 hours.
                    </p>
                    <Link
                        href="/#audit"
                        className="inline-block px-8 py-4 rounded-xl bg-playwright text-black font-bold hover:bg-playwright/90 transition-colors"
                    >
                        Get Your Free Audit
                    </Link>
                </div>
            </div>
        </main>
    );
}
