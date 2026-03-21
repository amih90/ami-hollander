"use client";

import { useState, type FormEvent } from "react";
import { FaPaperPlane } from "react-icons/fa";

// Obfuscated email parts to prevent scraper harvesting
const _u = "ami.hollander";
const _d = "outlook.com";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const addr = `${_u}@${_d}`;
    const subjectLine = subject || `Contact from ${name}`;
    const body = `Hi Ami,\n\n${message}\n\n— ${name}`;
    const mailto = `mailto:${encodeURIComponent(addr)}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="contact-name"
            className="font-[family-name:var(--font-body)] text-sm text-[rgba(240,239,244,0.5)] mb-1 block"
          >
            Your Name
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Doe"
            className="w-full px-4 py-2.5 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] text-[var(--color-foreground)] placeholder:text-[rgba(240,239,244,0.25)] focus:outline-none focus:border-[var(--color-gold)] transition-colors font-[family-name:var(--font-body)] text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="contact-subject"
            className="font-[family-name:var(--font-body)] text-sm text-[rgba(240,239,244,0.5)] mb-1 block"
          >
            Subject
          </label>
          <input
            id="contact-subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Let's collaborate"
            className="w-full px-4 py-2.5 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] text-[var(--color-foreground)] placeholder:text-[rgba(240,239,244,0.25)] focus:outline-none focus:border-[var(--color-gold)] transition-colors font-[family-name:var(--font-body)] text-sm"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="font-[family-name:var(--font-body)] text-sm text-[rgba(240,239,244,0.5)] mb-1 block"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me what's on your mind..."
          className="w-full px-4 py-2.5 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] text-[var(--color-foreground)] placeholder:text-[rgba(240,239,244,0.25)] focus:outline-none focus:border-[var(--color-gold)] transition-colors font-[family-name:var(--font-body)] text-sm resize-none"
        />
      </div>
      <button
        type="submit"
        className="font-[family-name:var(--font-heading)] text-sm font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-[var(--color-rose)] to-[var(--color-violet)] text-white hover:shadow-[0_0_20px_rgba(224,124,154,0.3)] transition-all inline-flex items-center gap-2"
      >
        <FaPaperPlane className="text-xs" />
        {sent ? "Opening mail client..." : "Send Message"}
      </button>
    </form>
  );
}
