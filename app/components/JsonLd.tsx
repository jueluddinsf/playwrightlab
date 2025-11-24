export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://playwrightlab.com/#organization",
                "name": "PlaywrightLab LLC",
                "url": "https://playwrightlab.com",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://playwrightlab.com/logo.png"
                },
                "sameAs": [
                    "https://twitter.com/playwrightlab",
                    "https://github.com/playwrightlab",
                    "https://linkedin.com/company/playwrightlab"
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+1-555-0123-456",
                    "contactType": "sales",
                    "areaServed": "US",
                    "availableLanguage": "en"
                }
            },
            {
                "@type": "ProfessionalService",
                "@id": "https://playwrightlab.com/#service",
                "name": "Playwright Migration Services",
                "url": "https://playwrightlab.com",
                "provider": {
                    "@id": "https://playwrightlab.com/#organization"
                },
                "description": "Expert migration from Selenium/Cypress to Playwright test automation framework.",
                "areaServed": "Worldwide",
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Automation Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Enterprise Migration"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Visual Regression Testing"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Performance Engineering"
                            }
                        }
                    ]
                }
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
