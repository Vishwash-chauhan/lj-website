import BlogHeader from "@/app/components/BlogHeader";
import BlogPostCard from "@/app/components/BlogPostCard";
import { getAllBlogPosts } from "@/lib/blog";

export const revalidate = 3600;

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="min-h-screen bg-white">
      <BlogHeader />
      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="space-y-12">
          {posts.length === 0 ? (
            <p className="text-center text-gray-400">No blog posts yet.</p>
          ) : (
            posts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
