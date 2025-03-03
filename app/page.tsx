import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Star, GitFork, Code, FileText, Palette, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Metadata } from "next";
import GitHubStats from "@/components/GitHubStats";

// GitHub repository information
const REPO_OWNER = "Nishitbaria";
const REPO_NAME = "next-blog";
const REPO_URL = `https://github.com/${REPO_OWNER}/${REPO_NAME}`;

export const metadata: Metadata = {
  title: "Next.js 15 Blog Template with MDX",
  description: "A modern, feature-rich blog template built with Next.js 15, TypeScript, Tailwind CSS, and MDX.",
  keywords: ["Next.js", "Blog", "MDX", "TypeScript", "Tailwind CSS", "Template"],
  authors: [{ name: "Nishit Baria" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blogs.nishitbaria.tech",
    title: "Next.js 15 Blog Template with MDX",
    description: "A modern, feature-rich blog template built with Next.js 15, TypeScript, Tailwind CSS, and MDX.",
    siteName: "Next.js Blog Template",
    images: [
      {
        url: "/blog-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Next.js 15 Blog Template Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js 15 Blog Template with MDX",
    description: "A modern, feature-rich blog template built with Next.js 15, TypeScript, Tailwind CSS, and MDX.",
    images: ["/blog-preview.jpg"]
  }
};

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="mt-8">
          <div className="mx-auto px-4 sm:px-0 sm:max-w-[1200px]">
            <div className="hidden sm:block border-x border-dashed">
              <div className="flex flex-col items-center justify-center gap-8 py-8 rounded-lg border border-dashed bg-background px-8 py-20 shadow-sm mx-4">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                  Modern Blog Template
                </h1>
                <p className="max-w-2xl text-center text-xl text-muted-foreground">
                  A beautiful, fully responsive, and modern blog template built using Next.js 15, TypeScript, Tailwind CSS, and MDX.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link href="/blog">
                      View Demo
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Star on GitHub
                    </a>
                  </Button>
                </div>

                {/* GitHub Stats */}
                <GitHubStats
                  owner={REPO_OWNER}
                  repo={REPO_NAME}
                  defaultStats={{
                    stars: "0",
                    forks: "0",
                    license: "MIT"
                  }}
                />
              </div>
            </div>
            <div className="sm:hidden">
              <div className="flex flex-col items-center justify-center gap-8 py-8 rounded-lg border border-dashed bg-background px-8 py-20 shadow-sm">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                  Modern Blog Template
                </h1>
                <p className="max-w-2xl text-center text-xl text-muted-foreground">
                  A beautiful, fully responsive, and modern blog template built using Next.js 15, TypeScript, Tailwind CSS, and MDX.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link href="/blog">
                      View Demo
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Star on GitHub
                    </a>
                  </Button>
                </div>

                {/* GitHub Stats */}
                <GitHubStats
                  owner={REPO_OWNER}
                  repo={REPO_NAME}
                  defaultStats={{
                    stars: "0",
                    forks: "0",
                    license: "MIT"
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Divider - Full width style with dashed border */}
        <div className="w-full my-12">
          <div className="border-t border-dashed my-2"></div>
        </div>

        {/* Features Section */}
        <section>
          <div className="mx-auto px-4 sm:px-0 sm:max-w-[1200px]">
            <div className="hidden sm:block border-x border-dashed">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-4">
                <div className="rounded-lg border border-dashed bg-background p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-xl">MDX Support</h3>
                  <p className="text-muted-foreground">
                    Write your content using MDX, an extension of Markdown that allows you to use JSX in your markdown.
                  </p>
                </div>
                <div className="rounded-lg border border-dashed bg-background p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Palette className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-xl">Tailwind CSS</h3>
                  <p className="text-muted-foreground">
                    Style your blog with the popular utility-first CSS framework, making it easy to customize.
                  </p>
                </div>
                <div className="rounded-lg border border-dashed bg-background p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-xl">Fast Performance</h3>
                  <p className="text-muted-foreground">
                    Built with performance in mind, ensuring your blog loads quickly and efficiently.
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:hidden">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border border-dashed bg-background p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-xl">MDX Support</h3>
                  <p className="text-muted-foreground">
                    Write your content using MDX, an extension of Markdown that allows you to use JSX in your markdown.
                  </p>
                </div>
                <div className="rounded-lg border border-dashed bg-background p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Palette className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-xl">Tailwind CSS</h3>
                  <p className="text-muted-foreground">
                    Style your blog with the popular utility-first CSS framework, making it easy to customize.
                  </p>
                </div>
                <div className="rounded-lg border border-dashed bg-background p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-xl">Fast Performance</h3>
                  <p className="text-muted-foreground">
                    Built with performance in mind, ensuring your blog loads quickly and efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider - Full width style with dashed border */}
        <div className="w-full my-12">
          <div className="border-t border-dashed my-2"></div>
        </div>

        {/* How to Use Section */}
        <section>
          <div className="mx-auto px-4 sm:px-0 sm:max-w-[1200px]">
            <div className="hidden sm:block border-x border-dashed">
              <div className="flex flex-col gap-8 py-8 rounded-lg border border-dashed bg-background px-8 py-16 shadow-sm mx-4">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    How to Use
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Get started with our blog template in just a few simple steps.
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex gap-4 items-start">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-medium">
                      <span className="font-medium">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Clone the repository</h3>
                      <p className="text-muted-foreground">
                        Start by cloning the repository to your local machine.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-medium">
                      <span className="font-medium">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Install dependencies</h3>
                      <p className="text-muted-foreground">
                        Install all the required dependencies using npm or yarn.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-medium">
                      <span className="font-medium">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Add your content</h3>
                      <p className="text-muted-foreground">
                        Add your blog posts as MDX files in the content directory.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-medium">
                      <span className="font-medium">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Deploy your blog</h3>
                      <p className="text-muted-foreground">
                        Deploy to Vercel or your preferred hosting platform with a single command.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button asChild size="lg">
                    <Link href="/blog">
                      View the demo
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="sm:hidden">
              <div className="flex flex-col gap-8 py-8 rounded-lg border border-dashed bg-background px-8 py-16 shadow-sm">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    How to Use
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Get started with our blog template in just a few simple steps.
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex gap-4 items-start">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-medium">
                      <span className="font-medium">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Clone the repository</h3>
                      <p className="text-muted-foreground">
                        Start by cloning the repository to your local machine.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-medium">
                      <span className="font-medium">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Install dependencies</h3>
                      <p className="text-muted-foreground">
                        Install all the required dependencies using npm or yarn.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-medium">
                      <span className="font-medium">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Add your content</h3>
                      <p className="text-muted-foreground">
                        Add your blog posts as MDX files in the content directory.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-medium">
                      <span className="font-medium">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Deploy your blog</h3>
                      <p className="text-muted-foreground">
                        Deploy to Vercel or your preferred hosting platform with a single command.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button asChild size="lg">
                    <Link href="/blog">
                      View the demo
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider - Full width style with dashed border */}
        <div className="w-full my-12">
          <div className="border-t border-dashed my-2"></div>
        </div>

        {/* Terminal Section */}
        <section>
          <div className="mx-auto px-4 sm:px-0 sm:max-w-[1200px]">
            <div className="hidden sm:block border-x border-dashed">
              <div className="relative bg-black rounded-lg p-4 shadow-lg mx-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-2 text-xs text-gray-400">Terminal</div>
                </div>
                <pre className="text-sm font-mono text-green-400 p-4">
                  <code>
                    {`# Clone the repository
git clone ${REPO_URL}.git my-blog

# Navigate to the project
cd my-blog

# Install dependencies
npm install

# Start the development server
npm run dev`}
                  </code>
                </pre>
              </div>
            </div>
            <div className="sm:hidden">
              <div className="relative bg-black rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-2 text-xs text-gray-400">Terminal</div>
                </div>
                <pre className="text-sm font-mono text-green-400 p-4">
                  <code>
                    {`# Clone the repository
git clone ${REPO_URL}.git my-blog

# Navigate to the project
cd my-blog

# Install dependencies
npm install

# Start the development server
npm run dev`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Divider - Full width style with dashed border */}
        <div className="w-full my-12">
          <div className="border-t border-dashed my-2"></div>
        </div>

        {/* Stay Updated Section */}
        <section>
          <div className="mx-auto px-4 sm:px-0 sm:max-w-[1200px]">
            <div className="hidden sm:block border-x border-dashed">
              <div className="flex flex-col gap-8 py-8 rounded-lg border border-dashed bg-background px-8 py-16 shadow-sm mx-4">
                <div className="text-center">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    Stay Updated
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Subscribe to our newsletter for updates, new features, and tips.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto w-full">
                  <div className="flex-1">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 rounded-md border border-input bg-background"
                    />
                  </div>
                  <Button>Subscribe</Button>
                </div>
              </div>
            </div>
            <div className="sm:hidden">
              <div className="flex flex-col gap-8 py-8 rounded-lg border border-dashed bg-background px-8 py-16 shadow-sm">
                <div className="text-center">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    Stay Updated
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Subscribe to our newsletter for updates, new features, and tips.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto w-full">
                  <div className="flex-1">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 rounded-md border border-input bg-background"
                    />
                  </div>
                  <Button>Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider - Full width style with dashed border */}
        <div className="w-full my-12">
          <div className="border-t border-dashed my-2"></div>
        </div>

        {/* Testimonials Section */}
        <section>
          <div className="mx-auto px-4 sm:px-0 sm:max-w-[1200px]">
            <div className="hidden sm:block border-x border-dashed">
              <div className="flex flex-col gap-8 py-8 rounded-lg border border-dashed bg-background px-8 py-16 shadow-sm mx-4">
                <div className="text-center">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    Loved by Developers
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    See what others are saying about our blog template
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-lg border border-dashed bg-background p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold">
                        JD
                      </div>
                      <div>
                        <h3 className="font-semibold">John Doe</h3>
                        <p className="text-sm text-muted-foreground">Frontend Developer</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "This blog template saved me hours of setup time. The code is clean, well-organized, and easy to customize."
                    </p>
                  </div>

                  <div className="rounded-lg border border-dashed bg-background p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold">
                        JS
                      </div>
                      <div>
                        <h3 className="font-semibold">Jane Smith</h3>
                        <p className="text-sm text-muted-foreground">Content Creator</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "I'm not a developer, but I was able to set up my blog quickly. The documentation is excellent and the design is beautiful."
                    </p>
                  </div>

                  <div className="rounded-lg border border-dashed bg-background p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold">
                        RJ
                      </div>
                      <div>
                        <h3 className="font-semibold">Robert Johnson</h3>
                        <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "The performance is incredible. Server components and image optimization make this blog template lightning fast."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:hidden">
              <div className="flex flex-col gap-8 py-8 rounded-lg border border-dashed bg-background px-8 py-16 shadow-sm">
                <div className="text-center">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    Loved by Developers
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    See what others are saying about our blog template
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-lg border border-dashed bg-background p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold">
                        JD
                      </div>
                      <div>
                        <h3 className="font-semibold">John Doe</h3>
                        <p className="text-sm text-muted-foreground">Frontend Developer</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "This blog template saved me hours of setup time. The code is clean, well-organized, and easy to customize."
                    </p>
                  </div>

                  <div className="rounded-lg border border-dashed bg-background p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold">
                        JS
                      </div>
                      <div>
                        <h3 className="font-semibold">Jane Smith</h3>
                        <p className="text-sm text-muted-foreground">Content Creator</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "I'm not a developer, but I was able to set up my blog quickly. The documentation is excellent and the design is beautiful."
                    </p>
                  </div>

                  <div className="rounded-lg border border-dashed bg-background p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold">
                        RJ
                      </div>
                      <div>
                        <h3 className="font-semibold">Robert Johnson</h3>
                        <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "The performance is incredible. Server components and image optimization make this blog template lightning fast."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider - Full width style with dashed border */}
        <div className="w-full my-12">
          <div className="border-t border-dashed my-2"></div>
        </div>

        {/* CTA Section */}
        <section>
          <div className="mx-auto px-4 sm:px-0 sm:max-w-[1200px]">
            <div className="hidden sm:block border-x border-dashed">
              <div className="flex flex-col items-center justify-center gap-8 py-8 rounded-lg border border-dashed bg-background px-8 py-16 shadow-sm mx-4">
                <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
                  Ready to Start Your Blog?
                </h2>
                <p className="text-xl text-muted-foreground mb-4 max-w-2xl text-center">
                  Get started with our modern blog template today and focus on what matters - your content.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link href="/blog">
                      View Demo
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Star on GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="sm:hidden">
              <div className="flex flex-col items-center justify-center gap-8 py-8 rounded-lg border border-dashed bg-background px-8 py-16 shadow-sm">
                <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
                  Ready to Start Your Blog?
                </h2>
                <p className="text-xl text-muted-foreground mb-4 max-w-2xl text-center">
                  Get started with our modern blog template today and focus on what matters - your content.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link href="/blog">
                      View Demo
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Star on GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}