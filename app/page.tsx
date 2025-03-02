import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
          Welcome to My Personal Blog
        </h1>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
          Sharing thoughts, tutorials, and insights about web development,
          programming, and technology.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
          <Button asChild size="lg">
            <Link href="/blog">
              Read Blog Posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="mt-16 md:mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-xl font-bold">Web Development</h3>
          <p className="mt-2 text-muted-foreground">
            Articles about frontend and backend development, frameworks, and best practices.
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-xl font-bold">JavaScript & TypeScript</h3>
          <p className="mt-2 text-muted-foreground">
            Deep dives into JavaScript concepts, TypeScript tips, and code examples.
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-xl font-bold">UI/UX Design</h3>
          <p className="mt-2 text-muted-foreground">
            Thoughts on design principles, accessibility, and creating better user experiences.
          </p>
        </div>
      </div>
    </div>
  );
}