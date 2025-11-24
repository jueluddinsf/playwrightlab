"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    // Generate JSON-LD structured data for breadcrumbs
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://playwrightlab.io"
            },
            ...items.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": item.label,
                ...(item.href && { "item": `https://playwrightlab.io${item.href}` })
            }))
        ]
    };

    return (
        <>
            {/* JSON-LD for search engines */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Visual breadcrumb navigation */}
            <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex items-center gap-2 text-sm text-zinc-400">
                    <li className="flex items-center">
                        <Link
                            href="/"
                            className="flex items-center gap-1 hover:text-playwright transition-colors"
                        >
                            <Home size={14} />
                            <span>Home</span>
                        </Link>
                    </li>
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <ChevronRight size={14} className="text-zinc-600" />
                            {item.href ? (
                                <Link
                                    href={item.href}
                                    className="hover:text-playwright transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-white font-medium">{item.label}</span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
}

