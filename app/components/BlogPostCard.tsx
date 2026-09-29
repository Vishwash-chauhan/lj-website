import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/blog";

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block">
      <article className="group cursor-pointer">
        {post.image ? (
          <div className="relative mb-4 aspect-[16/9] w-full overflow-hidden rounded-3xl bg-orange-50 border border-orange-100 shadow-sm">
            <img
              src={post.image}
              alt={post.imageAlt || post.title}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />
          </div>
        ) : null}
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 transition group-hover:text-orange-500">
            {post.title}
          </h2>
        </div>
        <p className="mb-4 text-sm text-gray-600">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          by {post.author}
        </p>
        <p className="text-sm sm:text-base md:text-lg font-bold opacity-80 text-gray-700">
          {post.description}
        </p>
        <span className="inline-block font-semibold text-orange-500 transition group-hover:translate-x-2">
          Read More →
        </span>
      </article>
    </Link>
  );
}
