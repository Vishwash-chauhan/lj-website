import Image from "next/image";
import Link from "next/link";
import type { BlogPostPreview } from "@/lib/blog";

interface BlogPostCardProps {
  post: BlogPostPreview;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group cursor-pointer">
        <div className="mb-5 aspect-[16/9] overflow-hidden rounded-3xl bg-gradient-to-br from-orange-100 via-orange-50 to-white ring-1 ring-orange-100">
          {post.image ? (
            <div className="relative h-full w-full transition duration-300 group-hover:scale-[1.02]">
              <Image
                src={post.image}
                alt={post.imageAlt || post.title}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 896px, 100vw"
              />
            </div>
          ) : (
            <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(251,191,36,0.18),_transparent_30%)] text-sm font-semibold uppercase tracking-[0.25em] text-orange-500 transition group-hover:scale-[1.02]">
              Image Placeholder
            </div>
          )}
        </div>
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
        <p className="text-x0.5 md:text-xl mb-8 mx-auto font-bold opacity-80 text-gray-700">
          {post.description}
        </p>
        <span className="inline-block font-semibold text-orange-500 transition group-hover:translate-x-2">
          Read More →
        </span>
      </article>
    </Link>
  );
}