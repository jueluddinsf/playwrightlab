import { Metadata } from "next";
import { ExternalLink, Youtube, FileText, Linkedin, Twitter } from "lucide-react";

export const metadata: Metadata = {
    title: "Resources | Playwright Learning Hub",
    description: "Curated Playwright resources, tutorials, and external content. Learn from industry experts and stay updated on automation best practices.",
};

const externalArticles = [
    {
        title: "Getting Started with Playwright",
        platform: "dev.to",
        url: "https://dev.to",
        description: "A beginner-friendly introduction to Playwright test automation.",
    },
    {
        title: "Advanced Playwright Patterns",
        platform: "Medium",
        url: "https://medium.com",
        description: "Deep dive into Page Object Models and custom fixtures.",
    },
    {
        title: "Playwright in CI/CD",
        platform: "dev.to",
        url: "https://dev.to",
        description: "Best practices for running Playwright tests in GitHub Actions.",
    },
];

const videoContent = [
    {
        title: "Selenium to Playwright Migration Tutorial",
        platform: "YouTube",
        description: "Step-by-step video guide on migrating your first test.",
        placeholder: true,
    },
    {
        title: "Debugging Flaky Tests with Playwright",
        platform: "YouTube",
        description: "Techniques for identifying and fixing unreliable tests.",
        placeholder: true,
    },
];

export default function ResourcesPage() {
    return (
        <main className="min-h-screen bg-black text-white py-24">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">Resources</h1>
                    <p className="text-xl text-zinc-400">
                        Curated content to help you master Playwright and modern test automation.
                    </p>
                </div>

                {/* External Articles */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 font-display flex items-center gap-3">
                        <FileText className="text-playwright" />
                        Articles & Guides
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {externalArticles.map((article, idx) => (
                            <a
                                key={idx}
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-playwright/30 hover:bg-zinc-900/60 transition-all duration-300"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <span className="px-3 py-1 rounded-full bg-playwright/10 text-playwright border border-playwright/20 text-sm">
                                        {article.platform}
                                    </span>
                                    <ExternalLink className="text-zinc-500 group-hover:text-playwright transition-colors" size={20} />
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-playwright transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-zinc-400 text-sm">{article.description}</p>
                            </a>
                        ))}
                    </div>
                </section>

                {/* Video Content */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 font-display flex items-center gap-3">
                        <Youtube className="text-red-500" />
                        Video Tutorials
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {videoContent.map((video, idx) => (
                            <div
                                key={idx}
                                className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5"
                            >
                                <div className="aspect-video bg-zinc-800 rounded-xl mb-4 flex items-center justify-center">
                                    <div className="text-center">
                                        <Youtube className="mx-auto mb-2 text-red-500" size={48} />
                                        <p className="text-sm text-zinc-500">Coming Soon</p>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                                <p className="text-zinc-400 text-sm">{video.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Social & Community */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 font-display">Follow Us</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <a
                            href="https://twitter.com/playwrightlab"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-blue-500/30 hover:bg-zinc-900/60 transition-all duration-300 flex items-center gap-4"
                        >
                            <Twitter className="text-blue-400" size={32} />
                            <div>
                                <div className="font-bold">Twitter</div>
                                <div className="text-sm text-zinc-500">@playwrightlab</div>
                            </div>
                        </a>
                        <a
                            href="https://linkedin.com/company/playwrightlab"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-blue-600/30 hover:bg-zinc-900/60 transition-all duration-300 flex items-center gap-4"
                        >
                            <Linkedin className="text-blue-600" size={32} />
                            <div>
                                <div className="font-bold">LinkedIn</div>
                                <div className="text-sm text-zinc-500">PlaywrightLab LLC</div>
                            </div>
                        </a>
                        <a
                            href="https://dev.to/playwrightlab"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-purple-500/30 hover:bg-zinc-900/60 transition-all duration-300 flex items-center gap-4"
                        >
                            <FileText className="text-purple-400" size={32} />
                            <div>
                                <div className="font-bold">DEV Community</div>
                                <div className="text-sm text-zinc-500">@playwrightlab</div>
                            </div>
                        </a>
                    </div>
                </section>

                {/* Newsletter */}
                <section className="p-12 rounded-3xl bg-gradient-to-br from-playwright/10 to-orange/10 border border-playwright/20 text-center">
                    <h2 className="text-3xl font-bold mb-4 font-display">Stay Updated</h2>
                    <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                        Get monthly insights on Playwright best practices, migration strategies, and automation trends.
                    </p>
                    <form className="max-w-md mx-auto flex gap-4">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="flex-1 px-6 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-playwright focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="px-8 py-3 rounded-xl bg-playwright text-black font-bold hover:bg-playwright/90 transition-colors"
                        >
                            Subscribe
                        </button>
                    </form>
                </section>
            </div>
        </main>
    );
}
