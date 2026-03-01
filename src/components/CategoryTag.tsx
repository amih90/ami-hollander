const categoryColors: Record<string, string> = {
  "Cloud & Infra": "bg-[#3b82f6]/12 text-[#3b82f6] border-[#3b82f6]/20",
  Languages: "bg-[#c9a84c]/12 text-[#c9a84c] border-[#c9a84c]/20",
  "AI & Data": "bg-[#a78bfa]/12 text-[#a78bfa] border-[#a78bfa]/20",
  "Dev Practices": "bg-[#6ee7b7]/12 text-[#6ee7b7] border-[#6ee7b7]/20",
  ai: "bg-[#a78bfa]/12 text-[#a78bfa] border-[#a78bfa]/20",
  education: "bg-[#c9a84c]/12 text-[#c9a84c] border-[#c9a84c]/20",
  featured: "bg-[#e07c9a]/12 text-[#e07c9a] border-[#e07c9a]/20",
  "oss-contribution": "bg-[#3b82f6]/12 text-[#3b82f6] border-[#3b82f6]/20",
};

interface CategoryTagProps {
  label: string;
  className?: string;
}

export default function CategoryTag({ label, className = "" }: CategoryTagProps) {
  const colors = categoryColors[label] || "bg-[#9ca3af]/12 text-[#9ca3af] border-[#9ca3af]/20";
  return (
    <span
      className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full border ${colors} ${className}`}
    >
      {label}
    </span>
  );
}
