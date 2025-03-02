import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">404 - Not Found</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Sorry, the page you are looking for does not exist.
      </p>
      <Button asChild variant="default" size="lg" className="mt-8">
        <Link href="/">
          <Home className="mr-2 h-4 w-4" /> Go Home
        </Link>
      </Button>
    </div>
  );
}