import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";
import Image from "next/image";
import { Clock, Search, ArrowUpRight } from "lucide-react";
import { CategoryBadge } from "@/components/CategoryBadge";
import { Input } from "@/components/ui/input";

export default function BlogPage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  // Get featured post (first post) and remaining posts
  const featuredPost = posts.length > 0 ? posts[0] : null;
  const remainingPosts = posts.slice(1);

  // Group remaining posts by year
  const postsByYear = remainingPosts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as Record<number, typeof remainingPosts>);

  // Get years in descending order
  const years = Object.keys(postsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  // Get all unique categories
  const allCategories = Array.from(
    new Set(
      posts.flatMap(post => post.categories || [])
    )
  );

  return (
    <main className="divide-y sm:border-b">
      {/* Featured Post Section */}
      <section>
        <div className="container relative mx-auto">
          <div className="sm:border-x divide-y border-t">
            {featuredPost && (
              <div className="grid sm:grid-cols-3">
                <div className="bg-background sm:col-span-2">
                  {featuredPost.image && (
                    <div className="relative h-[400px] w-full">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  )}
                </div>
                <div className="h-full">
                  <div className="flex h-full flex-col items-start justify-between gap-4 px-4 py-8 sm:px-8">
                    <div className="flex flex-col gap-2">
                      <small className="text-muted-foreground">Featured post</small>
                      <h2 className="font-bold text-2xl leading-normal tracking-tight">{featuredPost.title}</h2>
                      <div className="prose prose-neutral dark:prose-invert line-clamp-5">
                        {featuredPost.description}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mt-2">
                        <span>{featuredPost.formattedDate}</span>
                        <span className="mx-2">·</span>
                        <span className="flex items-center">
                          <Clock className="mr-1 h-3 w-3" />
                          {featuredPost.readingTime} min read
                        </span>
                      </div>
                    </div>
                    <Link
                      href={featuredPost.url}
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Posts by Year */}
            {years.map((year) => (
              <div key={year} className="grid divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                <div className="bg-dashed">
                  <div className="sticky top-16 px-4 py-8 sm:px-8">
                    <h2 className="font-bold text-2xl leading-normal tracking-tight">{year}</h2>
                  </div>
                </div>
                <div className="divide-y sm:col-span-2">
                  {postsByYear[year].map((post) => (
                    <Link
                      key={post.slug}
                      href={post.url}
                      className="block transition-colors hover:bg-background"
                    >
                      <div className="flex flex-col gap-2 px-4 py-8 sm:px-8">
                        <h2 className="font-bold text-lg leading-normal tracking-tight">{post.title}</h2>
                        <div className="prose prose-neutral dark:prose-invert prose-sm line-clamp-3">
                          {post.description}
                        </div>
                        <small className="text-muted-foreground text-xs">
                          {post.formattedDate} • {post.readingTime} min read
                        </small>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Corner decorations */}
          <div className="-bottom-3 -left-3 absolute z-10 hidden h-6 sm:block">
            <div className="relative h-6 w-6">
              <div className="absolute left-3 h-6 w-px bg-backdrop"></div>
              <div className="absolute top-3 h-px w-6 bg-backdrop"></div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2">
                <PlusIcon className="text-connection" />
              </div>
            </div>
          </div>
          <div className="-bottom-3 -right-3 -translate-x-px absolute z-10 hidden h-6 sm:block">
            <div className="relative h-6 w-6">
              <div className="absolute left-3 h-6 w-px bg-backdrop"></div>
              <div className="absolute top-3 h-px w-6 bg-backdrop"></div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2">
                <PlusIcon className="text-connection" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section>
        <div className="container relative mx-auto">
          <div className="sm:border-x grid gap-8 bg-dashed p-4 sm:grid-cols-2 sm:p-8">
            <div>
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-2xl tracking-tight sm:text-3xl">
                  Join our newsletter for updates on new articles
                </h2>
                <div className="-space-x-2 flex items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-background ring-2 ring-secondary">
                    <span className="text-[8px] text-muted-foreground">Join</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form className="relative">
                <div className="space-y-0">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
                    htmlFor="email-form-item"
                  >
                    Email
                  </label>
                  <input
                    className="flex w-full border border-input text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-auto rounded-full bg-background px-8 py-4 pr-16"
                    placeholder="jane@example.com"
                    id="email-form-item"
                    name="email"
                  />
                  <p className="text-[0.8rem] text-muted-foreground py-2">
                    We promise not to spam you or sell your email address.
                  </p>
                </div>
                <button
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 px-4 py-2 absolute top-[3px] right-[3px] aspect-square h-auto rounded-full"
                  type="submit"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Corner decorations */}
          <div className="-bottom-3 -left-3 absolute z-10 hidden h-6 sm:block">
            <div className="relative h-6 w-6">
              <div className="absolute left-3 h-6 w-px bg-backdrop"></div>
              <div className="absolute top-3 h-px w-6 bg-backdrop"></div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2">
                <PlusIcon className="text-connection" />
              </div>
            </div>
          </div>
          <div className="-bottom-3 -right-3 -translate-x-px absolute z-10 hidden h-6 sm:block">
            <div className="relative h-6 w-6">
              <div className="absolute left-3 h-6 w-px bg-backdrop"></div>
              <div className="absolute top-3 h-px w-6 bg-backdrop"></div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2">
                <PlusIcon className="text-connection" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-plus ${className}`}
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}