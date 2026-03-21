import type { Metadata } from "next";
import HomePage from "./page-client";
import { siteConfig } from "@/data/social";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function Page() {
  return <HomePage />;
}
