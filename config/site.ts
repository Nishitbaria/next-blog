import type { Metadata } from "next"

// Ensure the URL is always valid by providing a default
const DEFAULT_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"

export const siteConfig = {
    name: "Next.js Blog Template",
    description:
        "A modern blog template built with Next.js 15, React 19, TypeScript, and MDX.",
    url: DEFAULT_URL,
    ogImage: `${DEFAULT_URL}/og.jpg`,
    links: {
        twitter: "https://twitter.com/Nishitbaria1",
        github: "https://github.com/Nishitbaria",
    },
    author: {
        name: "Nishit Baria",
        website: "https://blogs.nishitbaria.tech/",
        twitter: "@Nishitbaria1",
    },
    keywords: [
        "Next.js",
        "React",
        "TypeScript",
        "MDX",
        "Blog",
        "Tailwind CSS",
        "Server Components",
    ],
} as const

export type SiteConfig = typeof siteConfig

// Default metadata for SEO
export const defaultMetadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [...siteConfig.keywords],
    authors: [
        {
            name: siteConfig.author.name,
            url: siteConfig.author.website,
        },
    ],
    creator: siteConfig.author.name,
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        creator: siteConfig.author.twitter,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    verification: {
        google: "your-google-site-verification",
        // Add other supported verification tokens as needed
        // See: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#verification
    },
} satisfies Metadata
