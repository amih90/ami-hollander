import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllSlugs, getPostBySlug } from "@/lib/mdx";
import { format } from "date-fns";
import { remark } from "remark";
import remarkHtml from "remark-html";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // Process MDX/markdown content to HTML
  const processed = await remark().use(remarkHtml).process(post.content);
  const htmlContent = processed.toString();

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      {/* Back link */}
      <Link
        href="/blog"
        className="font-[family-name:var(--font-body)] text-sm text-[rgba(240,239,244,0.4)] hover:text-[var(--color-gold)] transition-colors mb-8 inline-block"
      >
        ← Back to Blog
      </Link>

      {/* Post header */}
      <header className="mb-10">
        <h1 className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl font-bold text-[var(--color-foreground)] mb-4 leading-snug">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <span className="font-[family-name:var(--font-body)] text-base text-[var(--color-gold)]">
            {format(new Date(post.date), "MMMM d, yyyy")}
          </span>
          <span className="font-[family-name:var(--font-body)] text-sm text-[rgba(240,239,244,0.35)]">
            {post.readingTime}
          </span>
        </div>
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
      </header>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.2)] to-transparent mb-8" />

      {/* Content */}
      <article
        className="prose-warm"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      {/* Footer */}
      <div className="mt-12 pt-8 border-t border-[rgba(201,168,76,0.08)]">
        <Link
          href="/blog"
          className="font-[family-name:var(--font-heading)] text-sm font-semibold px-5 py-2.5 rounded-full border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[rgba(201,168,76,0.08)] transition-all"
        >
          More Posts
        </Link>
      </div>
    </div>
  );
}
