import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import GradientText from "@/components/GlitchText";
import { format } from "date-fns";
import BlogPostList from "./BlogPostList";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Ami Hollander's writing — thoughts on cloud, AI, dev tools, and open source.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <GradientText
          text="Writing"
          shimmer
          className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-6"
        />
        <p className="font-[family-name:var(--font-body)] text-lg text-[rgba(240,239,244,0.5)]">
          Thoughts on cloud, AI, developer tools, and lessons learned.
        </p>
      </div>

      {/* Posts list */}
      {posts.length === 0 ? (
        <div className="glass-card p-8 text-center">
          <div className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-gold)] mb-4">
            No posts yet
          </div>
          <p className="font-[family-name:var(--font-body)] text-base text-[rgba(240,239,244,0.5)]">
            Blog posts are coming soon! In the meantime,{" "}
            <Link
              href="/contact"
              className="text-[var(--color-electric)] hover:underline"
            >
              get in touch
            </Link>{" "}
            if you&apos;d like me to write about something specific.
          </p>
        </div>
      ) : (
        <BlogPostList posts={posts.map(p => ({
          slug: p.slug,
          title: p.title,
          date: format(new Date(p.date), "MMM d, yyyy"),
          readingTime: p.readingTime,
          excerpt: p.excerpt,
          tags: p.tags,
        }))} />
      )}
    </div>
  );
}
