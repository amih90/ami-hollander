"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/components/ScrollReveal";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
  tags: string[];
}

export default function BlogPostList({ posts }: { posts: BlogPost[] }) {
  return (
    <motion.div
      className="space-y-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {posts.map((post) => (
        <motion.div key={post.slug} variants={staggerItem}>
          <Link href={`/blog/${post.slug}`} className="block">
            <motion.div
              className="glass-card p-5"
              whileHover={{ scale: 1.01, y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-foreground)] leading-relaxed">
                  {post.title}
                </h2>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="font-[family-name:var(--font-body)] text-sm text-[var(--color-gold)]">
                    {post.date}
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
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
