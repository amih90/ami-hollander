import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig, social } from "@/data/social";
import { JsonLdPerson } from "@/components/JsonLd";
import Analytics from "@/components/Analytics";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`${siteConfig.url}/ami-hollander`),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} ${monoFont.variable} antialiased bg-[#06060e] text-[#f0eff4]`}
      >
        <Analytics />
        <JsonLdPerson
          name={siteConfig.name}
          jobTitle="Senior Software Engineer"
          employer="Microsoft"
          url={siteConfig.url}
          sameAs={[social.github, social.linkedin]}
        />
        <Navbar />
        <main className="pt-14 min-h-screen relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
