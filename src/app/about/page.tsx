import type { Metadata } from "next";
import { skills } from "@/data/skills";
import XpBar from "@/components/XpBar";
import GradientText from "@/components/GlitchText";
import CategoryTag from "@/components/CategoryTag";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Ami Hollander — Senior Software Engineer at Microsoft. Skills, achievements, and passions.",
};

const achievements = [
  { icon: "🦈", name: "Pull Shark x2", description: "Prolific PR contributor" },
  { icon: "❄️", name: "Arctic Code Vault", description: "Code preserved in Arctic" },
  { icon: "💀", name: "YOLO", description: "Merged without review" },
  { icon: "🤝", name: "Pair Extraordinaire", description: "Co-authored commits" },
  { icon: "☁️", name: "Azure Veteran", description: "Years of cloud mastery" },
  { icon: "🐳", name: "Container Master", description: "Dev Containers expert" },
  { icon: "🤖", name: "AI Pioneer", description: "LLMs, Agents & MCP" },
  { icon: "📚", name: "Educator", description: "Training curricula creator" },
];

const categories = [...new Set(skills.map((s) => s.category))];

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <GradientText
          text="About Me"
          className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-6"
        />
      </div>

      {/* Bio Section */}
      <div className="grid md:grid-cols-5 gap-8 mb-16">
        {/* Avatar / Visual */}
        <div className="md:col-span-2 flex justify-center md:justify-start">
          <div className="glass-card p-6 w-64 h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">👨‍💻</div>
              <div className="font-[family-name:var(--font-heading)] text-lg font-bold text-[var(--color-foreground)]">
                Ami Hollander
              </div>
              <div className="font-[family-name:var(--font-body)] text-sm text-[var(--color-electric)] mt-1">
                Software Engineer
              </div>
              <div className="font-[family-name:var(--font-body)] text-sm text-[var(--color-gold)] mt-1">
                Microsoft
              </div>
            </div>
          </div>
        </div>

        {/* Bio text */}
        <div className="md:col-span-3">
          <p className="font-[family-name:var(--font-body)] text-xl text-[var(--color-foreground)] mb-4 leading-relaxed">
            Senior Software Engineer at <span className="text-[var(--color-electric)]">Microsoft</span>,
            building developer tools and cloud platform services that empower
            millions of engineers worldwide.
          </p>
          <p className="font-[family-name:var(--font-body)] text-lg text-[rgba(240,239,244,0.65)] mb-4 leading-relaxed">
            I specialize in cloud-native architectures on Azure, AI-powered
            developer experiences, and creating open-source educational content.
            My work spans from low-level infrastructure to high-level AI agents
            and everything in between.
          </p>
          <p className="font-[family-name:var(--font-body)] text-lg text-[rgba(240,239,244,0.65)] leading-relaxed">
            When I&apos;m not shipping code, I&apos;m building hands-on training courses
            like <span className="text-[var(--color-gold)]">&quot;Mastering Dev Containers&quot;</span> and
            contributing to the Azure open-source ecosystem. I believe in
            learning by building, sharing knowledge openly, and making complex
            technology accessible to everyone.
          </p>
        </div>
      </div>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-foreground)] mb-8">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div key={category} className="glass-card p-5">
              <div className="mb-4">
                <CategoryTag label={category} />
              </div>
              {skills
                .filter((s) => s.category === category)
                .map((skill) => (
                  <XpBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    category={skill.category}
                  />
                ))}
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section>
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-foreground)] mb-8">
          Achievements
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {achievements.map((a) => (
            <div
              key={a.name}
              className="glass-card p-4 text-center"
            >
              <div className="text-3xl mb-2">{a.icon}</div>
              <div className="font-[family-name:var(--font-heading)] text-sm font-semibold text-[var(--color-foreground)] mb-1">
                {a.name}
              </div>
              <div className="font-[family-name:var(--font-body)] text-xs text-[rgba(240,239,244,0.45)]">
                {a.description}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
