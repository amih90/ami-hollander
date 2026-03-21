import type { Metadata } from "next";
import { experience } from "@/data/experience";
import GradientText from "@/components/GlitchText";
import ExperienceTimeline from "./ExperienceTimeline";

export const metadata: Metadata = {
  title: "Journey",
  description:
    "Ami Hollander's professional journey — from startup to Microsoft.",
};

export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <GradientText
          text="My Journey"
          shimmer
          className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-6"
        />
        <p className="font-[family-name:var(--font-body)] text-lg text-[rgba(240,239,244,0.5)]">
          A path of growth — each chapter building on the last.
        </p>
      </div>

      {/* Timeline */}
      <ExperienceTimeline entries={experience} />
    </div>
  );
}
