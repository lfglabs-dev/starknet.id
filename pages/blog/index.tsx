import React from "react"
import Head from "next/head"
import type { GetStaticProps } from "next"
import { Badge } from "../../components/blog/badge"
import { BlogPostCard } from "../../components/blog/blogPostCard"
import { FeaturedPost } from "../../components/blog/featuredPost"
import type { BlogPost } from "../../types/blog"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"

const siteConfig = {
  name: "Starknet ID",
  url: "https://starknet.id",
}

const blogPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: `${siteConfig.name} Blog`,
  description:
    "Updates and guides about Starknet identities, naming, and the Starknet ecosystem.",
  url: `${siteConfig.url}/blog`,
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/StarknetIdLogo.png`,
    },
  },
}

interface BlogIndexProps {
  posts: BlogPost[]
}

export const getStaticProps: GetStaticProps<BlogIndexProps> = async () => {
  const { getBlogPosts } = await import("../../lib/blog")
  const posts = await getBlogPosts()
  return {
    props: {
      posts,
    },
  }
}

export default function BlogPage({ posts }: BlogIndexProps) {
  const featuredPost = posts.find((post) => post.featured) || posts[0]
  const regularPosts = posts.filter((post) => post.slug !== featuredPost?.slug)

  return (
    <>
      <Head>
        <title>Blog - Starknet ID</title>
        <meta
          name="description"
          content="Updates and guides about Starknet identities, naming, and the Starknet ecosystem."
        />
        <meta
          name="keywords"
          content="Starknet, Starknet ID, identities, naming, blockchain, crypto, ENS"
        />
        <link rel="canonical" href={`${siteConfig.url}/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Blog | ${siteConfig.name}`} />
        <meta
          property="og:description"
          content="Updates and guides about Starknet identities, naming, and the Starknet ecosystem."
        />
        <meta property="og:url" content={`${siteConfig.url}/blog`} />
        <meta property="og:site_name" content={siteConfig.name} />
        <meta property="og:image" content="/visuals/StarknetIdLogo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Blog | ${siteConfig.name}`} />
        <meta
          name="twitter:description"
          content="Updates and guides about Starknet identities, naming, and the Starknet ecosystem."
        />
        <meta name="twitter:image" content="/visuals/StarknetIdLogo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPageJsonLd) }}
        />
      </Head>
      <Navbar />
      <div id="main-content" className="mx-auto max-w-7xl px-4 py-24">
        <header
          aria-labelledby="blog-title"
          className="mb-16 animate-slide-up-fade"
          style={{
            animationDuration: "600ms",
            animationFillMode: "backwards",
          }}
        >
          <Badge>Blog</Badge>
          <h1
            id="blog-title"
            className="mt-2 inline-block bg-clip-text py-2 text-4xl font-bold tracking-wide sm:text-6xl md:text-6xl"
          >
            Starknet ID Blog - Starknet Ecosystem Updates, News and Guides
          </h1>
          <p className="text-primary-dark dark:text-primary-light mt-6 max-w-2xl text-lg">
              Stay ahead of the Starknet ecosystem with the latest updates, news, guides and more to help you use Starknet to its full potential.
          </p>
        </header>

        {featuredPost && <FeaturedPost post={featuredPost} />}

        <section>
          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {regularPosts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : null}
        </section>
      </div>
      <Footer />
    </>
  )
}


