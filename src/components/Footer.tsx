import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { social } from "@/data/social";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(201,168,76,0.06)] mt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social links */}
          <div className="flex items-center gap-6">
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgba(240,239,244,0.3)] hover:text-[var(--color-gold)] transition-colors text-xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgba(240,239,244,0.3)] hover:text-[var(--color-electric)] transition-colors text-xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={`mailto:${social.email}`}
              className="text-[rgba(240,239,244,0.3)] hover:text-[var(--color-rose)] transition-colors text-xl"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Copyright */}
          <p className="font-[family-name:var(--font-body)] text-sm text-[rgba(240,239,244,0.3)]">
            &copy; {new Date().getFullYear()} Ami Hollander
          </p>

          {/* Built with */}
          <p className="font-[family-name:var(--font-body)] text-xs text-[rgba(240,239,244,0.2)]">
            Built with Next.js &amp; Azure
          </p>
        </div>
      </div>
    </footer>
  );
}
