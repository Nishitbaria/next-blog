"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface CategoryBadgeProps {
  category: string;
  className?: string;
  size?: 'sm' | 'md';
  asLink?: boolean;
}

const CATEGORY_COLORS: Record<string, string> = {
  'Accessibility': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',
  'Web Development': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  'React': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300',
  'Frontend': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
  'Frameworks': 'bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300',
  'TypeScript': 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
  'JavaScript': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
  'Programming': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
  // Default color for any category not listed
  'default': 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300',
};

export function CategoryBadge({ category, className, size = 'md', asLink = true }: CategoryBadgeProps) {
  const colorClass = CATEGORY_COLORS[category] || CATEGORY_COLORS.default;
  const baseClasses = cn(
    'inline-flex items-center rounded-full px-2.5 py-0.5 font-medium transition-colors',
    colorClass,
    size === 'sm' ? 'text-xs' : 'text-sm',
    className
  );
  
  if (asLink) {
    return (
      <Link 
        href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
        className={baseClasses}
      >
        {category}
      </Link>
    );
  }
  
  return (
    <span className={baseClasses}>
      {category}
    </span>
  );
}