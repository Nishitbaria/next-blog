import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Star, GitFork, Code, FileText, Palette, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Metadata } from "next";
import GitHubStats from "@/components/GitHubStats";
``
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
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter max-w-3xl">
              Production-grade Next.js Blog Template
            </h1>
            <p className="text-xl text-muted-foreground max-w-[700px]">
              A modern, feature-rich blog template designed with Next.js 15, TypeScript, and Tailwind CSS. Everything you need to start publishing content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button asChild size="lg" className="gap-2">
                <Link href="/blog">
                  View Blog Demo <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" /> Star on GitHub
                </a>
              </Button>
            </div>

            {/* GitHub Stats - Client Component */}
            <GitHubStats
              owner={REPO_OWNER}
              repo={REPO_NAME}
              defaultStats={{
                stars: "500+",
                forks: "100+",
                license: "MIT License"
              }}
            />
          </div>

          {/* Preview Image */}
          <div className="relative w-full max-w-5xl mx-auto rounded-lg overflow-hidden border shadow-lg">
            <Image
              src="/blog-preview.jpg"
              alt="Blog Template Preview"
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Everything You Need</h2>
            <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
              Start your blog in minutes with these powerful features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-background rounded-lg p-6 border shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Next.js 15 App Router</h3>
              <p className="text-muted-foreground">
                Built with the latest Next.js features including React Server Components and improved routing.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-background rounded-lg p-6 border shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">MDX Content</h3>
              <p className="text-muted-foreground">
                Write your blog posts in MDX with full support for React components, code highlighting, and more.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-background rounded-lg p-6 border shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern UI Components</h3>
              <p className="text-muted-foreground">
                Beautiful, accessible components built with Tailwind CSS, Radix UI, and shadcn/ui.
              </p>
            </div>

            {/* More features */}
            <div className="bg-background rounded-lg p-6 border shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                  <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                  <path d="M10 2c1 .5 2 2 2 5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Dark Mode Support</h3>
              <p className="text-muted-foreground">
                Built-in dark mode with system preference detection and user toggle.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 border shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                  <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                  <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                  <path d="M16 16h5v5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Social Sharing</h3>
              <p className="text-muted-foreground">
                Integrated social sharing features for Twitter, Facebook, LinkedIn and more.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 border shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                  <path d="M4 17V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
                  <path d="M4 7h16" />
                  <path d="M4 11h16" />
                  <path d="M8 15h8" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">SEO Optimized</h3>
              <p className="text-muted-foreground">
                Built-in SEO features with metadata, Open Graph tags, and structured data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Quick Start</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Get your blog up and running in minutes with our simple setup process.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-medium">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Clone the repository</h3>
                    <p className="text-muted-foreground">
                      Start by cloning our GitHub repository to your local machine.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-medium">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Install dependencies</h3>
                    <p className="text-muted-foreground">
                      Run npm install to install all required dependencies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-medium">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Add your content</h3>
                    <p className="text-muted-foreground">
                      Create your blog posts as MDX files in the content directory.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
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
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg -m-4"></div>
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
npm run dev

# Your blog is now running at http://localhost:3000`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Stay Updated</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Subscribe to our newsletter for updates, new features, and tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Loved by Developers</h2>
            <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
              See what others are saying about our blog template
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-background rounded-lg p-6 border shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-bold text-primary">JD</span>
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

            {/* Testimonial 2 */}
            <div className="bg-background rounded-lg p-6 border shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-bold text-primary">JS</span>
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

            {/* Testimonial 3 */}
            <div className="bg-background rounded-lg p-6 border shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-bold text-primary">RJ</span>
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Ready to Start Your Blog?</h2>
            <p className="text-xl opacity-90 mb-8">
              Get started with our modern blog template today and focus on what matters - your content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/blog">
                  View Demo
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent">
                <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> Star on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}