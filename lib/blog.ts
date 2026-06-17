import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const postsDirectory = path.join(process.cwd(), "app/blog/_posts");

export interface BlogPostPreview {
  slug: string;
  title: string;
  date: string;
  author: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

export interface BlogPost extends BlogPostPreview {
  content: string;
  htmlContent: string;
  metaTitle?: string;
  metaDescription?: string;
}

// Get all blog posts
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const files = fs.readdirSync(postsDirectory);
  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    return getBlogPost(slug);
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

// Get single blog post by slug
export function getBlogPost(slug: string): BlogPost {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const htmlContent = marked.parse(content, { async: false }) as string;

  return {
    slug,
    title: data.title || "",
    date: data.date || "",
    author: data.author || "",
    description: data.description || "",
    image: data.image ? (data.image.startsWith("/") ? data.image : `/${data.image}`) : "",
    imageAlt: data.imageAlt || "",
    content,
    htmlContent,
    metaTitle: data.metaTitle || "",
    metaDescription: data.metaDescription || "",
  };
}

// Get blog post slugs for static generation
export function getBlogPostSlugs(): string[] {
  const files = fs.readdirSync(postsDirectory);
  return files.map((file) => file.replace(/\.md$/, ""));
}
