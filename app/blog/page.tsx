"use client";

import { useEffect, useState } from "react";
import BlogHeader from "@/app/components/BlogHeader";
import BlogPostList from "@/app/components/BlogPostList";
import type { BlogPostPreview } from "@/lib/blog";

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPostPreview[]>([]);
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
        <div className="max-w-4xl mx-auto px-4 py-12">
          <p className="text-center text-gray-600">Loading blogs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <BlogHeader />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <BlogPostList posts={posts} />
      </div>
    </div>
  );
}
