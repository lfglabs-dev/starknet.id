import Image from "next/image"
import Link from "next/link"
import type { BlogPost } from "../../types/blog"
import { Badge } from "../blog/badge"
import React from "react"

interface BlogPostCardProps {
  post: BlogPost
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-xl">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="aspect-video">
          <Image
            src={post.image || "/preview.png"}
            alt={`Cover image for ${post.title}`}
            width={400}
            height={250}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-6">
          {post.tags.length > 0 && <Badge size="sm">{post.tags[0]}</Badge>}

          <h3 className="mb-3 mt-2 text-xl font-bold leading-tight text-text-secondary-dark transition-colors group-hover:text-orange-500">
            {post.title}
          </h3>

          <p className="mb-4 leading-relaxed text-text-secondary">
            {post.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {post.author.profilePicture ? (
                <Image
                  src={post.author.profilePicture}
                  alt={post.author.name}
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300">
                  <span className="text-secondary-dark text-xs font-medium">
                    {post.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              )}
              <div>
                <span className="text-sm font-medium text-text-secondary-dark transition-colors group-hover:text-orange-500">
                  {post.author.name}
                </span>
                <p className="text-xs text-text-secondary-semi-light">
                  {post.readingTime}
                </p>
              </div>
            </div>

            <div className="text-secondary-light transition-colors group-hover:text-text-secondary">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
