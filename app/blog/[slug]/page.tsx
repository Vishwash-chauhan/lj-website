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
          className="prose prose-lg max-w-none text-gray-800 
          prose-p:mb-6
          prose-headings:text-gray-900 prose-headings:font-bold
          prose-a:text-orange-500 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-gray-900 prose-strong:font-semibold
          prose-em:text-gray-700
          prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded
          prose-pre:bg-gray-900 prose-pre:text-white
          prose-blockquote:border-l-4 prose-blockquote:border-orange-500 prose-blockquote:pl-4 prose-blockquote:italic
          prose-li:marker:text-orange-500
          leading-relaxed"
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
