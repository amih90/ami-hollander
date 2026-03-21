import type { Metadata } from "next";
import GradientText from "@/components/GlitchText";
import { social } from "@/data/social";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ami Hollander — book a coffee chat, connect on LinkedIn, or send a message.",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <GradientText
          text="Get In Touch"
          shimmer
          className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-6"
        />
        <p className="font-[family-name:var(--font-body)] text-lg text-[rgba(240,239,244,0.55)] max-w-2xl">
          Whether you want to discuss a project, explore opportunities, or just
          grab a virtual coffee — I&apos;m always happy to connect.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Calendly Section */}
        <div className="glass-card p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--color-gold)] mb-4">
            Book a Coffee ☕
          </h2>
          <p className="font-[family-name:var(--font-body)] text-base text-[rgba(240,239,244,0.5)] mb-6">
            Schedule a 30-minute coffee chat. Let&apos;s talk tech, career, open
            source, or anything else on your mind.
          </p>
          <a
            href={social.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-heading)] text-sm font-semibold px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-champagne)] text-[#06060e] hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-all inline-block"
          >
            Open Calendar
          </a>
        </div>

        {/* Quick Links */}
        <div className="glass-card p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--color-electric)] mb-6">
            Connect Directly
          </h2>

          <div className="space-y-4">
            {/* GitHub */}
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3 rounded-xl border border-[rgba(255,255,255,0.04)] hover:border-[rgba(201,168,76,0.2)] hover:bg-[rgba(201,168,76,0.04)] transition-all group"
            >
              <FaGithub className="text-2xl text-[rgba(240,239,244,0.3)] group-hover:text-[var(--color-gold)] transition-colors" />
              <div>
                <div className="font-[family-name:var(--font-body)] text-base text-[var(--color-foreground)] group-hover:text-[var(--color-gold)] transition-colors">
                  GitHub
                </div>
                <div className="font-[family-name:var(--font-body)] text-xs text-[rgba(240,239,244,0.35)]">
                  github.com/amih90
                </div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3 rounded-xl border border-[rgba(255,255,255,0.04)] hover:border-[rgba(59,130,246,0.2)] hover:bg-[rgba(59,130,246,0.04)] transition-all group"
            >
              <FaLinkedin className="text-2xl text-[rgba(240,239,244,0.3)] group-hover:text-[var(--color-electric)] transition-colors" />
              <div>
                <div className="font-[family-name:var(--font-body)] text-base text-[var(--color-foreground)] group-hover:text-[var(--color-electric)] transition-colors">
                  LinkedIn
                </div>
                <div className="font-[family-name:var(--font-body)] text-xs text-[rgba(240,239,244,0.35)]">
                  linkedin.com/in/ami-hollander
                </div>
              </div>
            </a>

          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="glass-card p-6 mt-8">
        <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--color-rose)] mb-2">
          Send a Message ✉️
        </h2>
        <p className="font-[family-name:var(--font-body)] text-sm text-[rgba(240,239,244,0.45)] mb-6">
          Fill out the form and it&apos;ll open in your email client — no
          email address exposed.
        </p>
        <ContactForm />
      </div>

    </div>
  );
}
