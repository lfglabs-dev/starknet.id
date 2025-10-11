
import React from "react"
import Head from "next/head"
import Image from "next/image"
import { Badge } from "../../components/blog/badge"
import { AuthorBio } from "../../components/blog/authorBio"
import { getAuthorByName } from "../../lib/authors"
import type { GetStaticPaths, GetStaticProps } from "next"
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote"
import { customComponents } from "../../mdx-components"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"

const siteConfig = {
  name: "Starknet ID",
  url: "https://starknet.id",
}

interface ArticlePageProps {
  id: string
  frontmatter: {
    title: string
    description: string
    date: string
    modifiedDate: string
    author: string
    readingTime: string
    tags: string[]
    image: string
    relens?: boolean
  }
  mdxSource: MDXRemoteSerializeResult
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { getAllPosts } = await import("../../lib/blog")
  const posts = await getAllPosts()
  const paths = posts.map((post) => ({ params: { id: post.slug } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<ArticlePageProps> = async (ctx) => {
  const id = ctx.params?.id as string
  const { getPostBySlugRaw } = await import("../../lib/blog")
  const raw = await getPostBySlugRaw(id)
  if (!raw) {
    return { notFound: true }
  }
  const { serialize } = await import("next-mdx-remote/serialize")
  const mdxSource = await serialize(raw.contentRaw)
  return {
    props: {
      id,
      frontmatter: raw.frontmatter,
      mdxSource,
    },
  }
}

export default function ArticlePage({ id, frontmatter, mdxSource }: ArticlePageProps) {
  const author = getAuthorByName(frontmatter.author)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: frontmatter.title,
    description: frontmatter.description,
    image: `${siteConfig.url}${frontmatter.image}`,
    keywords: "Starknet, Starknet ID, identities, naming, blockchain",
    author: {
      "@type": "Person",
      name: author?.name || frontmatter.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/StarknetIdLogo.png`,
      },
    },
    sameAs: [siteConfig.url],
    datePublished: frontmatter.date,
    dateModified: frontmatter.modifiedDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${id}`,
    },
  }

  return (
    <>
      <Head>
        <title>{frontmatter.title} - {siteConfig.name}</title>
        <meta name="description" content={frontmatter.description} />
        <link rel="canonical" href={`${siteConfig.url}/blog/${id}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.description} />
        <meta property="og:url" content={`${siteConfig.url}/blog/${id}`} />
        <meta property="og:image" content={`${siteConfig.url}${frontmatter.image}`} />
        <meta property="article:published_time" content={frontmatter.date} />
        {frontmatter.modifiedDate && (
          <meta property="article:modified_time" content={frontmatter.modifiedDate} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={frontmatter.title} />
        <meta name="twitter:description" content={frontmatter.description} />
        <meta name="twitter:image" content={`${siteConfig.url}${frontmatter.image}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <Navbar />
      <article className="mx-auto max-w-4xl px-4 py-24">
        <header className="mb-8 text-center">
          <div className="flex flex-col items-center justify-center">
            <Badge>Article</Badge>
            <h1 className="mb-4 inline-block bg-clip-text py-2 text-4xl font-bold tracking-wide sm:text-6xl md:text-6xl">
              {frontmatter.title}
            </h1>
          </div>
          <div className="mb-6 flex items-center justify-center gap-4 text-sm text-text-secondary">
            <time dateTime={frontmatter.date}>
              {new Date(frontmatter.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>•</span>
            <span>{frontmatter.readingTime}</span>
            <span>•</span>
            <span>{author?.name || frontmatter.author}</span>
          </div>

          {frontmatter.image && !frontmatter.relens && (
            <figure className="mb-10 mt-10">
              <Image
                src={frontmatter.image}
                alt={frontmatter.title}
                width={1200}
                height={630}
                className="rounded-lg"
                priority
              />
              <figcaption className="mt-2 text-center text-text-secondary">
                {frontmatter.title}
              </figcaption>
            </figure>
          )}
        </header>

        <div className="prose prose-lg max-w-3xl mx-auto">
          <MDXRemote {...mdxSource} components={customComponents as any} />
        </div>

        <footer className="mt-12 border-t border-light pt-8">
          <div className="mb-6 flex flex-wrap justify-between gap-2">
            <div className="flex flex-wrap gap-2">
              {frontmatter.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full bg-green-100 px-3 py-1 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="text-sm text-text-secondary">
              Last updated:{" "}
              {new Date(frontmatter.modifiedDate).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                },
              )}
            </div>
          </div>

          {author && (
            <AuthorBio
              name={author.name}
              bio={author.bio}
              image={author.profilePicture}
              twitter={author.twitter}
              linkedin={author.linkedin}
            />
          )}
        </footer>
      </article>
      <Footer />
    </>
  )
}
