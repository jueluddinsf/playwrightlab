export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://playwrightlab.io/#organization",
                "name": "PlaywrightLab",
                "legalName": "PlaywrightLab LLC",
                "url": "https://playwrightlab.io",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://playwrightlab.io/logo.png",
                    "width": 512,
                    "height": 512
                },
                "description": "Professional Playwright test automation migration and consulting services",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "New York",
                    "addressRegion": "NY",
                    "addressCountry": "US"
                },
                "sameAs": [
                    "https://twitter.com/playwrightlab",
                    "https://github.com/playwrightlab",
                    "https://linkedin.com/company/playwrightlab"
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "hello@playwrightlab.io",
                    "contactType": "customer service",
                    "areaServed": ["US", "CA", "GB", "EU"],
                    "availableLanguage": ["en"]
                }
            },
            {
                "@type": "LocalBusiness",
                "@id": "https://playwrightlab.io/#localbusiness",
                "name": "PlaywrightLab",
                "image": "https://playwrightlab.io/logo.png",
                "url": "https://playwrightlab.io",
                "telephone": "Contact via website",
                "priceRange": "$$$",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "New York",
                    "addressRegion": "NY",
                    "addressCountry": "US"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "40.7128",
                    "longitude": "-74.0060"
                },
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "18:00"
                },
                "sameAs": [
                    "https://twitter.com/playwrightlab",
                    "https://linkedin.com/company/playwrightlab"
                ]
            },
            {
                "@type": "ProfessionalService",
                "@id": "https://playwrightlab.io/#service",
                "name": "Playwright Migration & Test Automation Services",
                "url": "https://playwrightlab.io",
                "provider": {
                    "@id": "https://playwrightlab.io/#organization"
                },
                "serviceType": "Software Testing & Quality Assurance Consulting",
                "description": "Professional migration services from Selenium/Cypress to Playwright, including framework architecture, CI/CD integration, and team training.",
                "areaServed": {
                    "@type": "Country",
                    "name": "United States"
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Test Automation Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Test Suite Migration",
                                "description": "Migration of Selenium/Cypress tests to Playwright with Page Object Model refactoring"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Framework Architecture",
                                "description": "Scalable test framework design with TypeScript and best practices"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "CI/CD Integration",
                                "description": "Test automation integration with GitHub Actions, Jenkins, and other CI platforms"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Visual Regression Testing",
                                "description": "Automated visual testing using Playwright's snapshot capabilities"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Team Training & Support",
                                "description": "Hands-on training and ongoing support for Playwright adoption"
                            }
                        }
                    ]
                }
            },
            {
                "@type": "WebSite",
                "@id": "https://playwrightlab.io/#website",
                "url": "https://playwrightlab.io",
                "name": "PlaywrightLab",
                "description": "Professional Playwright migration and test automation consulting",
                "publisher": {
                    "@id": "https://playwrightlab.io/#organization"
                },
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://playwrightlab.io/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                }
            },
            {
                "@type": "FAQPage",
                "@id": "https://playwrightlab.io/#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Is migrating to Playwright worth the investment?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "For most teams, yes. Playwright offers better reliability, faster execution, and modern features that reduce maintenance burden. The time saved on debugging flaky tests and faster CI runs typically provides positive ROI within 6-12 months."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Which programming languages do you support?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We primarily work with TypeScript/JavaScript as it provides excellent tooling and integrates well with modern web applications. We can also support Python-based Playwright migrations depending on your team's needs."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long does a typical migration take?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Timeline varies based on test suite size and complexity. A medium-sized suite (300-500 tests) typically takes 4-6 weeks including migration, verification, and CI/CD integration. We provide detailed timeline estimates after the initial audit."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do you offer post-migration support?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. All packages include post-launch support periods, and we offer extended support packages for ongoing maintenance, troubleshooting, and additional training as needed."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
