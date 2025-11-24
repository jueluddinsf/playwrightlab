import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const blogPosts = [
        'selenium-to-playwright-migration-guide',
        'why-e2e-tests-are-flaky',
        'playwright-vs-cypress-benchmark-2025',
    ];

    return [
        {
            url: 'https://playwrightlab.com',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: 'https://playwrightlab.com/blog',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        ...blogPosts.map((slug) => ({
            url: `https://playwrightlab.com/blog/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        })),
        {
            url: 'https://playwrightlab.com/case-studies',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://playwrightlab.com/resources',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
    ]
}
