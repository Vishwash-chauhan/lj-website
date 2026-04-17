import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPostSlugs } from "@/lib/blog";

export async function generateStaticParams() {
  const slugs = getBlogPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const post = getBlogPost(slug);
    const title = post.metaTitle || post.title;
    const description = post.metaDescription || post.description;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "article",
        url: `https://littlejalebis.com/blog/${slug}`,
        images: post.image
          ? [{ url: post.image, alt: post.imageAlt || post.title }]
          : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: post.image ? [post.image] : undefined,
      },
      alternates: {
        canonical: `https://littlejalebis.com/blog/${slug}`,
      },
    };
  } catch {
    return {
      title: "Blog | Little Jalebis",
      description: "Little Jalebis blog.",
    };
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getBlogPost(slug);
  } catch {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <article className="max-w-3xl mx-auto px-4 py-5">
        <Link href="/blog" className="text-orange-500 font-semibold mb-8 inline-block">
          ← Back to Blog
        </Link>

        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center justify-between text-gray-600 text-sm">
            <div>
              <time>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              {" • "} {post.author}
            </div>
          </div>
        </header>

        {post.image ? (
          <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-3xl bg-orange-50">
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 768px, 100vw"
              priority
            />
          </div>
        ) : null}

        <div
          className="max-w-none text-gray-800 leading-relaxed
          [&_p]:my-5 [&_p]:leading-8
          [&_h1]:mt-12 [&_h1]:mb-5 [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:text-gray-900
          [&_h2]:mt-12 [&_h2]:mb-5 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-gray-900
          [&_h3]:mt-10 [&_h3]:mb-4 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-gray-900
          [&_h4]:mt-8 [&_h4]:mb-3 [&_h4]:text-xl [&_h4]:font-bold [&_h4]:text-gray-900
          [&_ul]:my-6 [&_ol]:my-6 [&_li]:my-2 [&_li::marker]:text-orange-500
          [&_a]:text-orange-500 [&_a]:no-underline hover:[&_a]:underline [&_a]:font-medium
          [&_strong]:text-gray-900 [&_strong]:font-semibold [&_em]:text-gray-700
          [&_img]:my-8 [&_img]:rounded-2xl
          [&_table]:my-8 [&_table]:w-full [&_table]:border-collapse
          [&_th]:border [&_th]:border-gray-300 [&_th]:bg-orange-50 [&_th]:px-3 [&_th]:py-2 [&_th]:text-left
          [&_td]:border [&_td]:border-gray-300 [&_td]:px-3 [&_td]:py-2 [&_td]:align-top
          [&_hr]:my-10 [&_hr]:border-gray-300
          [&_code]:rounded [&_code]:bg-gray-100 [&_code]:px-2 [&_code]:py-1
          [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:bg-gray-900 [&_pre]:p-4 [&_pre]:text-white
          [&_blockquote]:my-8 [&_blockquote]:border-l-4 [&_blockquote]:border-orange-500 [&_blockquote]:pl-4 [&_blockquote]:italic"
          dangerouslySetInnerHTML={{ __html: post.htmlContent }}
        />

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog" className="text-orange-500 font-semibold">
            ← Back to Blog
          </Link>
        </footer>
      </article>
    </div>
  );
}
