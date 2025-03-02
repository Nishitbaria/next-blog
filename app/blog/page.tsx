import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Search } from "lucide-react";
import { CategoryBadge } from "@/components/CategoryBadge";
import { Input } from "@/components/ui/input";

export default function BlogPage() {
  const posts = allPosts.sort((a, b) => 
    compareDesc(new Date(a.date), new Date(b.date))
  );

  // Get all unique categories
  const allCategories = Array.from(
    new Set(
      posts.flatMap(post => post.categories || [])
    )
  );

  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Blog Posts
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore the latest articles and tutorials
        </p>
        
        {/* Search (client component would be needed for full implementation) */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search posts..." 
              className="pl-10"
            />
          </div>
        </div>
        
        {/* Categories */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {allCategories.map(category => (
            <CategoryBadge key={category} category={category} />
          ))}
        </div>
      </div>

      {/* Featured Post */}
      {posts.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured</h2>
          <Link href={posts[0].url} className="group">
            <Card className="overflow-hidden transition-all hover:shadow-md">
              <div className="grid md:grid-cols-2 gap-6">
                {posts[0].image && (
                  <div className="relative h-64 md:h-full w-full overflow-hidden">
                    <Image
                      src={posts[0].image}
                      alt={posts[0].title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {posts[0].categories?.map(category => (
                      <CategoryBadge 
                        key={category} 
                        category={category}
                        size="sm"
                        asLink={false}
                      />
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{posts[0].title}</h3>
                  <div className="text-sm text-muted-foreground mb-4 flex items-center">
                    <span>{posts[0].formattedDate} · {posts[0].author}</span>
                    <span className="mx-2">·</span>
                    <span className="flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      {posts[0].readingTime} min read
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {posts[0].description}
                  </p>
                  <span className="text-sm font-medium text-primary mt-auto">
                    Read more
                  </span>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      )}

      <h2 className="text-2xl font-bold mb-6">All Posts</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.slice(1).map((post) => (
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
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.categories?.slice(0, 2).map(category => (
                    <CategoryBadge 
                      key={category} 
                      category={category} 
                      size="sm"
                      asLink={false}
                    />
                  ))}
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-1 flex items-center justify-between">
                  <span>{post.formattedDate} · {post.author}</span>
                  <span className="flex items-center text-xs font-medium">
                    <Clock className="mr-1 h-3 w-3" />
                    {post.readingTime} min read
                  </span>
                </CardDescription>
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
    </div>
  );
}