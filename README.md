# Next.js 15 Blog Template with MDX

A modern, feature-rich blog template built with Next.js 15, TypeScript, Tailwind CSS, and MDX.

## ✨ Features

- 📝 MDX for writing blog posts
- 🎨 Fully customizable with Tailwind CSS
- 🌙 Dark/Light mode support
- 📱 Fully responsive design
- 🎯 SEO optimized
- 📊 Reading time calculation
- 🔍 Full-text search (coming soon)
- 🏷️ Category and tag support
- 📅 Date formatting
- ⚡ Super fast page loads
- 🔒 TypeScript support
- 📦 Content management with Contentlayer

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/next-blog-template.git
cd next-blog-template
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser.

## 📝 Creating Blog Posts

1. Add your MDX files in the `content/posts` directory
2. Use the following frontmatter format:

```mdx
---
title: Your Post Title
description: A brief description of your post
date: 2024-03-03
author: Your Name
categories: [category1, category2]
tags: [tag1, tag2]
image: /path/to/image.jpg
---

Your content here...
```

## 🎨 Customization

### Styling

- Modify `tailwind.config.ts` for theme customization
- Update `app/globals.css` for global styles
- Components use Tailwind CSS classes for styling

### Components

- UI components are built with Radix UI and Shadcn UI
- Customize components in the `components` directory
- Add new components as needed

## 📚 Project Structure

```
├── app/                 # Next.js app directory
├── components/          # React components
├── content/            # MDX blog posts
├── lib/               # Utility functions
├── public/            # Static assets
└── styles/            # Global styles
```

## 🛠️ Built With

- [Next.js 15](https://nextjs.org/)
- [React 19](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Contentlayer](https://contentlayer.dev/)
- [MDX](https://mdxjs.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Shadcn UI](https://ui.shadcn.com/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Support

If you have any questions or need help, please open an issue or contact us.
