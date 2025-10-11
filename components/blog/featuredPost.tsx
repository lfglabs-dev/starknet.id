import Image from "next/image"
import Link from "next/link"
import type { BlogPost } from "../../types/blog"
import { Badge } from "../blog/badge"
import React from "react"

interface FeaturedPostProps {
  post: BlogPost
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <section className="mb-20">
      <article className="group cursor-pointer overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl transition-shadow hover:shadow-2xl">
        <Link href={`/blog/${post.slug}`} className="block">
          <div className="lg:flex">
            <div className="lg:w-1/2">
              <Image
                src={post.image || "/blog/introducing-relens.webp"}
                alt={`Cover image for ${post.title}`}
                width={700}
                height={500}
                className="h-80 w-full object-cover lg:h-full"
              />
            </div>
            <div className="flex flex-col justify-center p-10 lg:w-1/2 lg:p-12">
              <Badge>Featured</Badge>

              <h2 className="mb-6 mt-4 text-4xl font-bold leading-tight text-text-secondary-dark transition-colors group-hover:text-green-500 lg:text-5xl">
                {post.title}
              </h2>

              <p className="mb-8 text-xl leading-relaxed text-text-secondary">
                {post.description}
              </p>

              <div className="flex items-center gap-4">
                {post.author.profilePicture ? (
                  <Image
                    src={post.author.profilePicture}
                    alt={post.author.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300">
                    <span className="text-secondary-dark text-sm font-medium">
                      {post.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                )}
                <div>
                  <span className="block font-semibold text-text-secondary-dark transition-colors group-hover:text-green-500">
                    {post.author.name}
                  </span>
                  <p className="text-sm text-text-secondary-semi-light">
                    {post.readingTime}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </article>
    </section>
  )
}
