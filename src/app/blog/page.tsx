import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import GradientText from "@/components/GlitchText";
import WarmCard from "@/components/PixelCard";
import { format } from "date-fns";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Ami Hollander's blog — thoughts on cloud, AI, dev tools, and open source.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <GradientText
          text="Blog"
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
        <div className="space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
              <WarmCard>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-foreground)] leading-relaxed">
                    {post.title}
                  </h2>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="font-[family-name:var(--font-body)] text-sm text-[var(--color-gold)]">
                      {format(new Date(post.date), "MMM d, yyyy")}
                    </span>
                    <span className="font-[family-name:var(--font-body)] text-xs text-[rgba(240,239,244,0.35)]">
                      {post.readingTime}
                    </span>
                  </div>
                </div>
                <p className="font-[family-name:var(--font-body)] text-base text-[rgba(240,239,244,0.5)] mb-3">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-[family-name:var(--font-body)] text-xs px-2.5 py-1 rounded-full bg-[rgba(59,130,246,0.08)] text-[var(--color-electric)] border border-[rgba(59,130,246,0.15)]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </WarmCard>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
