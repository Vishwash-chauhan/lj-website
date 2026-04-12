import type { BlogPostPreview } from "@/lib/blog";
import BlogPostCard from "@/app/components/BlogPostCard";

interface BlogPostListProps {
  posts: BlogPostPreview[];
}

export default function BlogPostList({ posts }: BlogPostListProps) {
  if (posts.length === 0) {
    return <p className="text-center text-gray-400">No blog posts yet.</p>;
  }

  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <BlogPostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}