import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import { format } from 'date-fns';
import { Separator } from '@/components/ui/separator';
import { TableOfContents } from '@/components/table-of-contents';
import { MDXRenderer } from '@/components/mdx-renderer';
import { Clock, Share2, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CategoryBadge } from '@/components/CategoryBadge';
import { TagBadge } from '@/components/TagBadge';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  // In Next.js 15, params is async and must be awaited
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      authors: [post.author],
      ...(post.image && {
        images: [{ url: post.image, width: 1200, height: 630, alt: post.title }]
      })
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  // In Next.js 15, params is async and must be awaited
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  // Find related posts (by category or tag)
  const relatedPosts = allPosts
    .filter(p => p.slug !== post.slug) // Exclude current post
    .filter(p => {
      // Find posts with matching categories or tags
      const sharedCategories = p.categories?.filter(cat =>
        post.categories?.includes(cat)
      ) || [];

      const sharedTags = p.tags?.filter(tag =>
        post.tags?.includes(tag)
      ) || [];

      return sharedCategories.length > 0 || sharedTags.length > 0;
    })
    .slice(0, 3); // Limit to 3 related posts

  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main content - takes up more space */}
        <article className="lg:col-span-3">
          <div className="mb-8 space-y-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {post.categories?.map(category => (
                <CategoryBadge key={category} category={category} />
              ))}
            </div>

            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground">
              <time dateTime={post.date} className="flex items-center">
                {format(new Date(post.date), 'MMMM d, yyyy')}
              </time>
              <span>·</span>
              <span>{post.author}</span>
              <span>·</span>
              <span className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                {post.readingTime} min read
              </span>
            </div>

            {/* Social Sharing */}
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-1">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <Bookmark className="h-4 w-4" />
                Save
              </Button>
            </div>
          </div>

          {post.image && (
            <div className="relative mb-8 h-[400px] w-full overflow-hidden rounded-lg">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <Separator className="my-8" />

          <div className="prose prose-lg dark:prose-invert max-w-none 
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-p:leading-7 
            prose-pre:rounded-md prose-pre:bg-zinc-900
            prose-img:rounded-lg
            prose-strong:text-foreground
          ">
            <MDXRenderer code={post.body.code} />
          </div>

          {/* Tags */}
          <div className="mt-8">
            <h3 className="font-medium mb-2">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags?.map(tag => (
                <TagBadge key={tag} tag={tag} />
              ))}
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {relatedPosts.map((relPost) => (
                  <a key={relPost.slug} href={relPost.url} className="group block">
                    <div className="border rounded-lg overflow-hidden transition-all hover:shadow-md">
                      {relPost.image && (
                        <div className="relative h-40 w-full overflow-hidden">
                          <Image
                            src={relPost.image}
                            alt={relPost.title}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="p-4">
                        <h3 className="font-bold line-clamp-2">{relPost.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                          {relPost.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Table of Contents - moves to the right on large screens */}
        <aside className="lg:col-span-1">
          <div className="sticky top-20 space-y-6">
            <TableOfContents />

            {/* Author Info */}
            <div className="rounded-lg border bg-card p-4 shadow-2xs">
              <h3 className="font-semibold mb-2">About the Author</h3>
              <p className="text-sm text-muted-foreground">{post.author} is a writer who specializes in {post.categories?.join(', ')}.</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}