import fs from "fs"
import { compileMDX } from "next-mdx-remote/rsc"
import path from "path"
import { ReactElement } from "react"
import authorsData from "../lib/authors.json"
import { customComponents } from "../mdx-components"

const postsDirectory = path.join(process.cwd(), "public/blog/posts")

function estimateReadingTime(text: string): string {
  // Remove YAML frontmatter if present
  const withoutFrontmatter = text.replace(/^---[\s\S]*?^---\s*/m, "")
  // Very simple word count
  const words = (withoutFrontmatter.trim().match(/\S+/g) || []).length
  const minutes = Math.max(1, Math.ceil(words / 200))
  return `${minutes} min read`
}

export interface PostFrontmatter {
  title: string
  description: string
  date: string
  modifiedDate: string
  author: string
  readingTime: string
  tags: string[]
  image: string
  featured?: boolean
  relens?: boolean
}

export interface Post {
  slug: string
  frontmatter: PostFrontmatter
  content: ReactElement
}

export interface RawPost {
  slug: string
  frontmatter: PostFrontmatter
  contentRaw: string
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  author: {
    name: string
    id: string
    profilePicture?: string
  }
  date: string
  modifiedDate?: string
  readingTime: string
  tags: string[]
  image?: string
  featured?: boolean
  content: string
}

export async function getAllPosts(): Promise<Post[]> {
  const fileNames = fs.readdirSync(postsDirectory)
  const posts = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith(".mdx"))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.mdx$/, "")
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf8")

        const { content, frontmatter } = await compileMDX<PostFrontmatter>({
          source: fileContents,
          components: customComponents,
          options: {
            parseFrontmatter: true,
          },
        })

        const fm = frontmatter as PostFrontmatter
        const readingTime = fm.readingTime || estimateReadingTime(fileContents)

        return {
          slug,
          frontmatter: { ...fm, readingTime },
          content,
        }
      }),
  )

  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime(),
  )
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const authors = authorsData as Record<string, any>

  try {
    const fileNames = fs.readdirSync(postsDirectory)
    const posts = await Promise.all(
      fileNames
        .filter((fileName) => fileName.endsWith(".mdx"))
        .map(async (fileName) => {
          const slug = fileName.replace(/\.mdx$/, "")
          const fullPath = path.join(postsDirectory, fileName)
          const fileContents = fs.readFileSync(fullPath, "utf8")

          const { frontmatter } = await compileMDX<PostFrontmatter>({
            source: fileContents,
            components: customComponents,
            options: {
              parseFrontmatter: true,
            },
          })

          const authorData = authors[frontmatter.author] || {
            name: "Unknown Author",
            id: frontmatter.author || "unknown",
          }

          const readingTime =
            frontmatter.readingTime || estimateReadingTime(fileContents)

          return {
            slug,
            title: frontmatter.title || "Untitled",
            description: frontmatter.description || "",
            author: {
              name: authorData.name,
              id: frontmatter.author || "unknown",
              profilePicture: authorData.profilePicture,
            },
            date: frontmatter.date || new Date().toISOString().split("T")[0],
            modifiedDate: frontmatter.modifiedDate,
            readingTime,
            tags: frontmatter.tags || [],
            image: frontmatter.image,
            featured: frontmatter.featured || false,
            content: fileContents,
          }
        }),
    )

    // Sort posts by date (newest first)
    return posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    )
  } catch (error) {
    console.error("Error reading blog posts:", error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    const { content, frontmatter } = await compileMDX<PostFrontmatter>({
      source: fileContents,
      components: customComponents,
      options: {
        parseFrontmatter: true,
      },
    })

    const fm = frontmatter as PostFrontmatter
    const readingTime = fm.readingTime || estimateReadingTime(fileContents)

    return {
      slug,
      frontmatter: { ...fm, readingTime },
      content,
    }
  } catch (error) {
    return null
  }
}

export async function getPostBySlugRaw(slug: string): Promise<RawPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    const { frontmatter } = await compileMDX<PostFrontmatter>({
      source: fileContents,
      components: customComponents,
      options: {
        parseFrontmatter: true,
      },
    })

    const fm = frontmatter as PostFrontmatter
    const readingTime = fm.readingTime || estimateReadingTime(fileContents)
    const contentWithoutFrontmatter = fileContents.replace(/^---[\s\S]*?^---\s*/m, "")

    return {
      slug,
      frontmatter: { ...fm, readingTime },
      contentRaw: contentWithoutFrontmatter,
    }
  } catch (error) {
    return null
  }
}
