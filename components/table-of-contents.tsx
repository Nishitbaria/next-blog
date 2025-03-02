"use client";

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ListChecks } from 'lucide-react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Find all headings (h1, h2, h3)
    const elements = Array.from(document.querySelectorAll('h1[id], h2[id], h3[id]'))
      .map((element) => ({
        id: element.id,
        text: element.textContent || '',
        level: parseInt(element.tagName.substring(1), 10),
      }));

    setHeadings(elements);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -80% 0px', threshold: 0.1 }
    );

    elements.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elements.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  if (headings.length < 2) return null;

  return (
    <Card>
      <CardHeader className="py-4">
        <CardTitle className="flex items-center text-lg">
          <ListChecks className="mr-2 h-5 w-5" />
          Table of Contents
        </CardTitle>
      </CardHeader>
      <CardContent className="py-0 pb-4">
        <nav>
          <ul className="space-y-1.5">
            {headings.map((heading) => (
              <li 
                key={heading.id}
                className={cn(
                  "text-muted-foreground hover:text-foreground transition-colors",
                  heading.level === 1 && "font-medium",
                  heading.level === 2 && "ml-4 text-sm",
                  heading.level === 3 && "ml-8 text-xs",
                  activeId === heading.id && "text-primary font-medium"
                )}
              >
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(heading.id)?.scrollIntoView({
                      behavior: 'smooth',
                    });
                    window.history.pushState(null, '', `#${heading.id}`);
                  }}
                  className="block py-1 hover:underline transition-colors"
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </CardContent>
    </Card>
  );
}