"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Copy, Check } from 'lucide-react';

// Used to create IDs for headings to enable TOC linking
function createHeadingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');
}

// Separate component for code blocks with syntax highlighting
const CodeHighlighter = React.memo(({ language, children }: { language: string; children: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative group my-6 rounded-lg overflow-hidden border border-zinc-700 dark:border-zinc-800">
      {/* Language badge */}
      <div className="absolute left-3 top-3 z-10 text-xs font-mono text-zinc-400 select-none">
        {language}
      </div>

      {/* Copy button */}
      <div className="absolute right-3 top-3 z-10">
        <button
          onClick={copyToClipboard}
          className={cn(
            "rounded-md p-2 transition-all",
            "bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 shadow-md",
            "focus:outline-hidden focus:ring-2 focus:ring-primary"
          )}
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <div className="flex items-center gap-1">
              <Check className="h-4 w-4 text-green-500" />
              <span className="text-xs text-green-500 font-medium">Copied!</span>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <Copy className="h-4 w-4 text-zinc-300" />
              <span className="text-xs text-zinc-300 font-medium">Copy</span>
            </div>
          )}
        </button>
      </div>

      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: '2.5rem 1rem 1.5rem 1rem',
          fontSize: '0.9rem',
          lineHeight: 1.5,
          background: '#1E1E1E',
          borderRadius: '0.375rem',
          fontFamily: 'var(--font-mono), Menlo, Monaco, Consolas, "Courier New", monospace',
        }}
        showLineNumbers={true}
        lineNumberStyle={{
          minWidth: '2.5em',
          paddingRight: '1em',
          textAlign: 'right',
          color: '#606366',
          marginRight: '0.5em',
          borderRight: '1px solid #333',
        }}
        codeTagProps={{
          style: {
            fontFamily: 'inherit',
          },
        }}
        wrapLines={true}
        wrapLongLines={false}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
});

CodeHighlighter.displayName = 'CodeHighlighter';

export const MDXComponents = {
  // Handle headers with auto-generated IDs for TOC
  h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = createHeadingId(children as string);
    return (
      <h1 id={id} className="mt-12 mb-4 text-3xl font-bold tracking-tight lg:text-4xl scroll-m-20" {...props}>
        {children}
      </h1>
    );
  },

  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = createHeadingId(children as string);
    return (
      <h2 id={id} className="mt-10 mb-4 text-2xl font-bold tracking-tight scroll-m-20" {...props}>
        {children}
      </h2>
    );
  },

  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = createHeadingId(children as string);
    return (
      <h3 id={id} className="mt-8 mb-3 text-xl font-bold tracking-tight scroll-m-20" {...props}>
        {children}
      </h3>
    );
  },

  // Handle paragraphs
  p: ({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cn("leading-7 mb-4", className)} {...props}>
      {children}
    </p>
  ),

  // Anchor links
  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = href?.startsWith('http');
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:text-primary/80 font-medium"
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href || '#'}
        className="text-primary underline hover:text-primary/80 font-medium"
        {...props}
      >
        {children}
      </Link>
    );
  },

  // Images
  img: ({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <div className="relative my-6 rounded-lg overflow-hidden w-full h-auto">
      {src && (
        <Image
          src={src}
          alt={alt || ''}
          width={800}
          height={500}
          className="object-cover w-full"
          {...props as any}
        />
      )}
    </div>
  ),

  // Lists
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-outside ml-6 mb-6 space-y-2" {...props}>
      {children}
    </ul>
  ),

  ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-outside ml-6 mb-6 space-y-2" {...props}>
      {children}
    </ol>
  ),

  li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-7" {...props}>
      {children}
    </li>
  ),

  // Inline code
  code: ({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) => {
    const match = /language-(\w+)/.exec(className || '');
    const language = match ? match[1] : 'text';

    // For inline code (no language specified)
    if (!match) {
      return (
        <code className={cn("relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm bg-muted", className)} {...props}>
          {children}
        </code>
      );
    }

    // For code blocks with language
    return (
      <CodeHighlighter language={language}>
        {typeof children === 'string' ? children : String(children)}
      </CodeHighlighter>
    );
  },

  // Code blocks
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
    // Extract the code element from children
    const childArray = React.Children.toArray(children);
    const codeElement = childArray.find(
      (child) => React.isValidElement(child) && (child as React.ReactElement).type === 'code'
    ) as React.ReactElement | undefined;

    // If no code element is found, render a regular pre
    if (!codeElement) {
      return <pre className="p-4 rounded-lg bg-muted overflow-x-auto" {...props}>{children}</pre>;
    }

    // Just return the code element directly - the code component will handle it
    return codeElement;
  },

  // Other elements
  blockquote: ({ children, ...props }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-4 py-1 my-6 italic text-zinc-600 dark:text-zinc-400"
      {...props}
    >
      {children}
    </blockquote>
  ),

  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-8 border-zinc-200 dark:border-zinc-800" {...props} />
  ),

  table: ({ children, ...props }: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm" {...props}>
        {children}
      </table>
    </div>
  ),

  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-zinc-100 dark:bg-zinc-800" {...props} />
  ),

  tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800" {...props} />
  ),

  tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className="divide-x divide-zinc-200 dark:divide-zinc-800" {...props} />
  ),

  th: ({ children, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th className="px-4 py-3 text-left font-medium" {...props}>
      {children}
    </th>
  ),

  td: ({ children, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-4 py-3" {...props}>
      {children}
    </td>
  ),
};