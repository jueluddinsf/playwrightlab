import { Metadata } from "next";
import { TrendingUp, Clock, Users, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Migration Examples & Case Studies | Playwright Projects",
    description: "Real-world Playwright migration scenarios from FinTech, E-Commerce, and SaaS companies. See typical challenges, solutions, and outcomes from test automation projects. Client details anonymized.",
    keywords: [
        "playwright migration case study",
        "selenium to playwright examples",
        "test automation migration results",
        "playwright success stories",
        "test migration case studies"
    ],
    openGraph: {
        title: "Migration Examples & Case Studies - PlaywrightLab",
        description: "Example Playwright migration scenarios showing typical challenges and results across different industries.",
        url: "https://playwrightlab.io/case-studies",
    },
    alternates: {
        canonical: "https://playwrightlab.io/case-studies",
    },
};

const caseStudies = [
    {
        id: 1,
        title: "FinTech Migration: 75% Faster Test Execution",
        company: "Series B FinTech Startup",
        industry: "Financial Services",
        challenge: "800+ Selenium tests taking 2.5 hours to run, blocking deployments and causing developer frustration.",
        solution: "Migrated to Playwright with parallel execution, implemented Page Object Model, and optimized CI/CD pipeline.",
        results: [
            { metric: "Test Runtime", before: "2.5 hours", after: "40 minutes", improvement: "73% reduction" },
            { metric: "Flaky Tests", before: "15%", after: "4%", improvement: "73% reduction" },
            { metric: "Developer Satisfaction", before: "3/10", after: "8/10", improvement: "167% increase" },
            { metric: "Deployment Frequency", before: "2x/week", after: "6x/week", improvement: "200% increase" },
        ],
        timeline: "6 weeks",
        team: "2 PlaywrightLab engineers + 3 client QA engineers",
        testimonial: {
            quote: "The migration improved our test reliability significantly and reduced our CI pipeline time. The team delivered on schedule.",
            author: "Engineering Manager",
            role: "Financial Services",
        },
    },
    {
        id: 2,
        title: "E-Commerce Scale: 650 Tests Migrated in 4 Weeks",
        company: "Mid-Market E-Commerce Platform",
        industry: "Retail",
        challenge: "Legacy Cypress suite with 650 tests couldn't handle the scale. Tests were slow, flaky, and blocking critical releases.",
        solution: "Systematic migration to Playwright with visual regression testing, API mocking, and advanced parallelization.",
        results: [
            { metric: "Test Count", before: "650 tests", after: "650 tests", improvement: "100% coverage maintained" },
            { metric: "Execution Time", before: "90 minutes", after: "25 minutes", improvement: "72% reduction" },
            { metric: "Infrastructure Cost", before: "$3,500/mo", after: "$1,400/mo", improvement: "$25k annual savings (CI/CD optimization)" },
            { metric: "Visual Bugs Caught", before: "Manual QA only", after: "Automated", improvement: "12-15 bugs/month caught" },
        ],
        timeline: "4 weeks",
        team: "2 PlaywrightLab engineers + 3 client QA engineers",
        testimonial: {
            quote: "The infrastructure optimizations and faster test execution provided measurable value. Professional execution throughout.",
            author: "QA Director",
            role: "E-Commerce Platform",
        },
    },
];

export default function CaseStudiesPage() {
    return (
        <main className="min-h-screen bg-black text-white py-24">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">Migration Examples</h1>
                    <p className="text-xl text-zinc-400">
                        Example migration scenarios showing typical challenges and outcomes. Client details anonymized for confidentiality.
                    </p>
                </div>

                <div className="space-y-16">
                    {caseStudies.map((study) => (
                        <article
                            key={study.id}
                            className="p-8 md:p-12 rounded-3xl bg-zinc-900/40 border border-white/5"
                        >
                            <div className="mb-8">
                                <span className="px-3 py-1 rounded-full bg-orange/10 text-orange border border-orange/20 text-sm">
                                    {study.industry}
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">{study.title}</h2>
                            <p className="text-lg text-zinc-400 mb-8">{study.company}</p>

                            <div className="grid md:grid-cols-2 gap-8 mb-12">
                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-red-400">Challenge</h3>
                                    <p className="text-zinc-300 leading-relaxed">{study.challenge}</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-playwright">Solution</h3>
                                    <p className="text-zinc-300 leading-relaxed">{study.solution}</p>
                                </div>
                            </div>

                            <div className="mb-12">
                                <h3 className="text-2xl font-bold mb-6 font-display">Results</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {study.results.map((result, idx) => (
                                        <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/5">
                                            <div className="flex items-start justify-between mb-3">
                                                <h4 className="font-bold text-white">{result.metric}</h4>
                                                <TrendingUp className="text-green-500" size={20} />
                                            </div>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-zinc-500">Before:</span>
                                                    <span className="text-zinc-300">{result.before}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-zinc-500">After:</span>
                                                    <span className="text-playwright font-bold">{result.after}</span>
                                                </div>
                                                <div className="pt-2 border-t border-white/10">
                                                    <span className="text-green-400 font-bold">{result.improvement}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 mb-12 p-6 rounded-xl bg-white/5">
                                <div className="flex items-center gap-3">
                                    <Clock className="text-playwright" size={24} />
                                    <div>
                                        <div className="text-sm text-zinc-500">Timeline</div>
                                        <div className="font-bold">{study.timeline}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Users className="text-playwright" size={24} />
                                    <div>
                                        <div className="text-sm text-zinc-500">Team</div>
                                        <div className="font-bold text-sm">{study.team}</div>
                                    </div>
                                </div>
                            </div>

                            <blockquote className="border-l-4 border-playwright pl-6 py-4 bg-playwright/5 rounded-r-xl">
                                <p className="text-lg text-zinc-300 italic mb-4">"{study.testimonial.quote}"</p>
                                <footer className="text-sm">
                                    <div className="font-bold text-white">{study.testimonial.author}</div>
                                    <div className="text-zinc-500">{study.testimonial.role}</div>
                                </footer>
                            </blockquote>
                        </article>
                    ))}
                </div>

                <div className="mt-16 text-center p-12 rounded-3xl bg-gradient-to-br from-playwright/10 to-orange/10 border border-playwright/20">
                    <h2 className="text-3xl font-bold mb-4 font-display">Ready to Discuss Your Migration?</h2>
                    <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                        Request a migration assessment to explore how Playwright could benefit your team.
                    </p>
                    <a
                        href="/#audit"
                        className="inline-block px-8 py-4 rounded-xl bg-playwright text-black font-bold hover:bg-playwright/90 transition-colors"
                    >
                        Request an Assessment
                    </a>
                </div>
            </div>
        </main>
    );
}
