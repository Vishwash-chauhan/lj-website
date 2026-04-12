import { getBlogPost, getBlogPostSlugs } from "@/lib/blog";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    const post = getBlogPost(slug);
    return Response.json(post);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return Response.json(
      { error: "Blog post not found" },
      { status: 404 }
    );
  }
}

export async function generateStaticParams() {
  const slugs = getBlogPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}
