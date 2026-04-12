import { getAllBlogPosts } from "@/lib/blog";

export async function GET() {
  try {
    const posts = await getAllBlogPosts();
    // Return only necessary fields for listing
    const simplifiedPosts = posts.map(({ slug, title, date, author, description, image }) => ({
      slug,
      title,
      date,
      author,
      description,
      image,
    }));
    return Response.json(simplifiedPosts);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return Response.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}
