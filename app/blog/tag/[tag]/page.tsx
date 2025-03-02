import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { TagBadge } from "@/components/TagBadge";

interface TagPageProps {
  params: {
    tag: string;
  };
}

export async function generateStaticParams() {
  // Get all unique tags
  const tags = new Set<string>();

  allPosts.forEach((post) => {
    post.tags?.forEach((tag) => {
      tags.add(tag.toLowerCase().replace(/\s+/g, '-'));
    });
  });

  return Array.from(tags).map((tag) => ({
    tag,
  }));
}

export default async function TagPage({ params }: TagPageProps) {
  // In Next.js 15, params is async and must be awaited
  const { tag } = await params;

  // Normalize the tag from URL
  const normalizedTag = tag.replace(/-/g, ' ');

  // Get all posts with this tag
  const filteredPosts = allPosts.filter((post) =>
    post.tags?.some(tag =>
      tag.toLowerCase() === normalizedTag
    )
  ).sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  // Find original tag name with proper casing
  const tagName = filteredPosts.length > 0 && filteredPosts[0].tags
    ? filteredPosts[0].tags.find(
      t => t.toLowerCase() === normalizedTag
    )
    : normalizedTag;

  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Posts Tagged: #{tagName}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Browse all articles with the #{tagName} tag
        </p>
      </div>

      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No posts found with this tag.</p>
          <Link href="/blog" className="mt-4 inline-block text-primary hover:underline">
            Browse all posts
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Link key={post.slug} href={post.url} className="group">
              <Card className="h-full overflow-hidden transition-all hover:shadow-md">
                {post.image && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="space-y-1">
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-1 flex items-center justify-between">
                      <span>{post.formattedDate} · {post.author}</span>
                      <span className="flex items-center text-xs font-medium">
                        <Clock className="mr-1 h-3 w-3" />
                        {post.readingTime} min read
                      </span>
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 text-muted-foreground">
                    {post.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <span className="text-sm font-medium text-primary">
                    Read more
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}