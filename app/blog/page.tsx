import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
    title: "Playwright Blog - Migration Guides, Tutorials & Best Practices",
    description: "Expert guides on Playwright test automation, Selenium/Cypress migration strategies, CI/CD integration, and performance optimization. Free tutorials from experienced automation engineers.",
    keywords: [
        "playwright blog",
        "playwright tutorial",
        "selenium to playwright guide",
        "test automation blog",
        "playwright best practices",
        "e2e testing tips"
    ],
    openGraph: {
        title: "Playwright Blog - Migration Guides & Tutorials",
        description: "Expert guides on Playwright migration, automation best practices, and performance optimization.",
        url: "https://playwrightlab.io/blog",
    },
    alternates: {
        canonical: "https://playwrightlab.io/blog",
    },
};

const blogPosts = [
    {
        slug: "selenium-to-playwright-migration-guide",
        title: "Selenium to Playwright: Complete Migration Guide",
        excerpt: "A comprehensive step-by-step guide to migrating your Selenium test suite to Playwright with minimal disruption.",
        date: "2025-01-15",
        readTime: "12 min read",
        category: "Migration",
    },
    {
        slug: "why-e2e-tests-are-flaky",
        title: "5 Reasons Your E2E Tests Are Flaky (And How Playwright Fixes Them)",
        excerpt: "Discover the root causes of flaky tests and how Playwright's architecture eliminates them at the framework level.",
        date: "2025-01-10",
        readTime: "8 min read",
        category: "Best Practices",
    },
    {
        slug: "playwright-vs-cypress-benchmark-2025",
        title: "Playwright vs Cypress: Performance Benchmark 2025",
        excerpt: "Data-driven comparison of execution speed, reliability, and developer experience across 1,000+ test scenarios.",
        date: "2025-01-05",
        readTime: "10 min read",
        category: "Performance",
    },
];

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-black text-white py-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <Breadcrumbs items={[{ label: "Blog" }]} />
                
                <div className="mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">Blog</h1>
                    <p className="text-xl text-zinc-400">
                        Expert insights on Playwright migration, automation best practices, and performance optimization.
                    </p>
                </div>

                <div className="space-y-8">
                    {blogPosts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="block group"
                        >
                            <article className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-playwright/30 hover:bg-zinc-900/60 transition-all duration-300">
                                <div className="flex items-center gap-4 mb-4 text-sm text-zinc-500">
                                    <span className="px-3 py-1 rounded-full bg-playwright/10 text-playwright border border-playwright/20">
                                        {post.category}
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} />
                                        <time>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock size={16} />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>

                                <h2 className="text-2xl font-bold mb-3 group-hover:text-playwright transition-colors">
                                    {post.title}
                                </h2>

                                <p className="text-zinc-400 leading-relaxed">
                                    {post.excerpt}
                                </p>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
