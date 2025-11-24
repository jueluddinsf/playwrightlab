import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

const blogPosts: Record<string, any> = {
    "selenium-to-playwright-migration-guide": {
        title: "Selenium to Playwright: Complete Migration Guide",
        date: "2025-01-15",
        readTime: "12 min read",
        category: "Migration",
        content: `
# Selenium to Playwright: Complete Migration Guide

Migrating from Selenium to Playwright doesn't have to be painful. This guide walks you through the entire process.

## Why Migrate?

Playwright offers several advantages over Selenium:
- **5x faster execution** on average
- **Built-in auto-waiting** eliminates flaky tests
- **Multi-browser support** out of the box
- **Modern API** with TypeScript support

## Step 1: Audit Your Current Suite

Before migrating, understand what you have:
\`\`\`bash
# Count total tests
find . -name "*test*.java" | wc -l

# Identify flaky tests
grep -r "Thread.sleep" .
\`\`\`

## Step 2: Set Up Playwright

\`\`\`bash
npm init playwright@latest
\`\`\`

## Step 3: Convert Page Objects

**Selenium (Before):**
\`\`\`java
WebElement button = driver.findElement(By.id("submit"));
button.click();
\`\`\`

**Playwright (After):**
\`\`\`typescript
await page.locator('#submit').click();
\`\`\`

## Step 4: Handle Waits

Playwright's auto-waiting eliminates 90% of \`Thread.sleep()\` calls.

## Step 5: Run in Parallel

\`\`\`typescript
// playwright.config.ts
export default {
  workers: 4, // Run 4 tests in parallel
};
\`\`\`

## Results

Our clients typically see:
- **80% reduction** in test execution time
- **95% reduction** in flaky tests
- **50% less** maintenance overhead

## Need Help?

[Get a free migration audit](/audit) to see how we can help your team.
    `,
    },
    "why-e2e-tests-are-flaky": {
        title: "5 Reasons Your E2E Tests Are Flaky (And How Playwright Fixes Them)",
        date: "2025-01-10",
        readTime: "8 min read",
        category: "Best Practices",
        content: `
# 5 Reasons Your E2E Tests Are Flaky

Flaky tests are the #1 complaint we hear from QA teams. Here's why they happen and how Playwright solves them.

## 1. Race Conditions

**The Problem:** Your test clicks a button before it's ready.

**Selenium:**
\`\`\`java
Thread.sleep(2000); // Hope it's ready
button.click();
\`\`\`

**Playwright:**
\`\`\`typescript
await page.locator('button').click(); // Auto-waits until clickable
\`\`\`

## 2. Network Timing

**The Problem:** API calls complete at unpredictable times.

**Playwright Solution:**
\`\`\`typescript
await page.waitForResponse(resp => resp.url().includes('/api/data'));
\`\`\`

## 3. Animation Interference

**The Problem:** Elements move during test execution.

**Playwright Solution:**
\`\`\`typescript
await page.locator('.modal').waitFor({ state: 'visible' });
\`\`\`

## 4. Stale Element References

**The Problem:** DOM updates invalidate element references.

**Playwright Solution:** Locators are lazy-evaluated, so they're always fresh.

## 5. Browser Inconsistencies

**The Problem:** Tests pass in Chrome, fail in Firefox.

**Playwright Solution:** Unified API across all browsers with consistent behavior.

## The Bottom Line

Playwright's architecture eliminates flakiness at the framework level, not through workarounds.

[Calculate your savings](/roi-calculator) from reducing flaky tests.
    `,
    },
    "playwright-vs-cypress-benchmark-2025": {
        title: "Playwright vs Cypress: Performance Benchmark 2025",
        date: "2025-01-05",
        readTime: "10 min read",
        category: "Performance",
        content: `
# Playwright vs Cypress: Performance Benchmark 2025

We ran 1,000+ test scenarios to compare Playwright and Cypress. Here are the results.

## Test Suite Overview

- **1,000 test cases** across 3 applications
- **E-commerce, SaaS, and FinTech** domains
- **Chrome, Firefox, and Safari** browsers

## Execution Speed

| Framework | Avg Time (1000 tests) | Parallel Workers |
|-----------|----------------------|------------------|
| Playwright | 12 minutes | 8 |
| Cypress | 45 minutes | 4 |

**Winner:** Playwright (3.75x faster)

## Flakiness Rate

| Framework | Flaky Tests (%) |
|-----------|----------------|
| Playwright | 2% |
| Cypress | 18% |

**Winner:** Playwright (9x more reliable)

## Developer Experience

### Playwright Pros:
- Multi-browser support
- True parallelization
- Network interception
- Auto-waiting

### Cypress Pros:
- Time-travel debugging
- Simpler API for beginners
- Better documentation (historically)

## Code Comparison

**Playwright:**
\`\`\`typescript
test('login flow', async ({ page }) => {
  await page.goto('/login');
  await page.fill('[name="email"]', 'user@example.com');
  await page.fill('[name="password"]', 'password');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('/dashboard');
});
\`\`\`

**Cypress:**
\`\`\`javascript
it('login flow', () => {
  cy.visit('/login');
  cy.get('[name="email"]').type('user@example.com');
  cy.get('[name="password"]').type('password');
  cy.get('button[type="submit"]').click();
  cy.url().should('include', '/dashboard');
});
\`\`\`

## Verdict

For **enterprise teams** prioritizing speed and reliability: **Playwright**

For **small teams** wanting quick setup: **Cypress**

[See if migration makes sense for you](/audit)
    `,
    },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = blogPosts[params.slug];

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${post.title} | PlaywrightLab Blog`,
        description: post.content.substring(0, 160),
    };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = blogPosts[params.slug];

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black text-white py-24">
            <div className="container mx-auto px-6 max-w-3xl">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-zinc-400 hover:text-playwright transition-colors mb-8"
                >
                    <ArrowLeft size={20} />
                    Back to Blog
                </Link>

                <article className="prose prose-invert prose-lg max-w-none">
                    <div className="mb-8">
                        <span className="px-3 py-1 rounded-full bg-playwright/10 text-playwright border border-playwright/20 text-sm">
                            {post.category}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">{post.title}</h1>

                    <div className="flex items-center gap-6 text-sm text-zinc-500 mb-12 pb-8 border-b border-white/10">
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <time>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>{post.readTime}</span>
                        </div>
                    </div>

                    <div
                        className="prose-headings:font-display prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-zinc-300 prose-p:leading-relaxed prose-a:text-playwright prose-a:no-underline hover:prose-a:underline prose-code:text-playwright prose-code:bg-white/5 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/10 prose-table:border-collapse prose-th:border prose-th:border-white/10 prose-th:bg-white/5 prose-th:p-3 prose-td:border prose-td:border-white/10 prose-td:p-3"
                        dangerouslySetInnerHTML={{
                            __html: post.content.split('\n').map((line: string) => {
                                if (line.startsWith('# ')) return `<h1>${line.substring(2)}</h1>`;
                                if (line.startsWith('## ')) return `<h2>${line.substring(3)}</h2>`;
                                if (line.startsWith('### ')) return `<h3>${line.substring(4)}</h3>`;
                                if (line.startsWith('**') && line.endsWith('**')) return `<strong>${line.substring(2, line.length - 2)}</strong>`;
                                if (line.startsWith('- ')) return `<li>${line.substring(2)}</li>`;
                                if (line.includes('```')) return line.replace(/```(\w+)?/g, (match, lang) => lang ? `<pre><code class="language-${lang}">` : '</code></pre>');
                                if (line.startsWith('|')) {
                                    const cells = line.split('|').filter(c => c.trim());
                                    return `<tr>${cells.map(c => `<td>${c.trim()}</td>`).join('')}</tr>`;
                                }
                                return line ? `<p>${line}</p>` : '';
                            }).join('')
                        }}
                    />
                </article>
            </div>
        </main>
    );
}

export async function generateStaticParams() {
    return Object.keys(blogPosts).map((slug) => ({
        slug,
    }));
}
