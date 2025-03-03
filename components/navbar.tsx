"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Newspaper, X } from "lucide-react"
import { usePathname } from "next/navigation"

import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "./ui/sheet"
import { cn } from "@/lib/utils"

/**
 * Responsive Navbar component that adapts to different screen sizes
 * - Shows full navigation on desktop (md breakpoint and above)
 * - Shows a hamburger menu with Sheet component on mobile
 */
export default function Navbar() {
  // Get current pathname to highlight active navigation item
  const pathname = usePathname()
  // State to control the mobile menu sheet
  const [open, setOpen] = useState(false)

  // Navigation items configuration
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        {/* Logo and site name */}
        <Link href="/" className="flex items-center space-x-2">
          <Newspaper className="h-6 w-6" />
          <span className="font-bold">Personal Blog</span>
        </Link>

        {/* Desktop Navigation - Hidden on mobile, visible on md screens and up */}
        <nav className="mx-6 hidden items-center space-x-4 md:flex lg:space-x-6">
          {navItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant="ghost"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-muted-foreground",
              )}
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>

        {/* Right side items container */}
        <div className="ml-auto flex items-center space-x-4">
          {/* Theme toggle - visible on all screen sizes */}
          <ThemeToggle />

          {/* Mobile Navigation - Only visible on small screens (below md breakpoint) */}
          <Sheet open={open} onOpenChange={setOpen}>
            {/* Hamburger menu button */}
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>

            {/* Mobile menu sheet that slides in from the right */}
            <SheetContent side="right" className="w-[300px] p-0">
              <SheetHeader className="border-b p-6">
                <SheetTitle className="text-left text-lg font-medium">Navigation Menu</SheetTitle>
                <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </SheetClose>
              </SheetHeader>
              <nav className="flex flex-col p-6">
                {/* Mobile navigation items */}
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    asChild
                    variant="ghost"
                    className={cn(
                      "mb-4 justify-start text-base font-medium transition-colors hover:text-primary",
                      pathname === item.href ? "text-primary" : "text-muted-foreground",
                    )}
                    onClick={() => setOpen(false)}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

