"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface TagBadgeProps {
  tag: string;
  className?: string;
  asLink?: boolean;
}

export function TagBadge({ tag, className, asLink = true }: TagBadgeProps) {
  const baseClasses = cn(
    'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium',
    'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    'transition-colors',
    className
  );
  
  if (asLink) {
    return (
      <Link 
        href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
        className={baseClasses}
      >
        #{tag}
      </Link>
    );
  }
  
  return (
    <span className={baseClasses}>
      #{tag}
    </span>
  );
}