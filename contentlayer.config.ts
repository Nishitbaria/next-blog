import { defineDocumentType, makeSource } from "contentlayer/source-files"
import { format } from "date-fns"
import { calculateReadingTime } from "./lib/utils"

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    author: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
      required: false,
    },
    categories: {
      type: "list",
      of: { type: "string" },
      required: false,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      required: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath.replace("posts/", "")}`,
    },
    formattedDate: {
      type: "string",
      resolve: (post) => {
        return format(new Date(post.date), "MMMM d, yyyy")
      },
    },
    slug: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath.replace("posts/", ""),
    },
    readingTime: {
      type: "number",
      resolve: (post) => {
        return calculateReadingTime(post.body.raw)
      },
    },
  },
}))

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    // We're handling syntax highlighting in our React components
    rehypePlugins: [],
  },
  disableImportAliasWarning: true,
})

