"use client";

import { useEffect, useState } from "react";
import BlogHeader from "@/app/components/BlogHeader";
import BlogPostCard from "@/app/components/BlogPostCard";
import type { BlogPost } from "@/lib/blog";

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <BlogHeader />
        <div className="max-w-3xl mx-auto px-4 py-6">
          <p className="text-center text-gray-600">Loading blogs...</p>
        </div>
      </div>
    );
  }

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
