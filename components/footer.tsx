import Link from 'next/link'
import { Newspaper } from 'lucide-react'
import ThemeSwitcher from './ThemeSwitcher'

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Newspaper className="h-6 w-6" />
              <span className="font-bold">Personal Blog</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Sharing thoughts and insights about web development and technology.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Pages</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Topics</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-muted-foreground">Web Development</span>
              </li>
              <li>
                <span className="text-muted-foreground">TypeScript</span>
              </li>
              <li>
                <span className="text-muted-foreground">Accessibility</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:nishitbaria@gmail.com"
                  className="text-muted-foreground hover:text-foreground"
                >
                  nishitbaria@gmail.com
                </a>
              </li>
              <li>
                <Link
                  href="https://twitter.com/nishitbaria1"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/Nishitbaria"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Personal Blog. All rights reserved.</p>
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  )
}