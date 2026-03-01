interface GradientTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span" | "p";
  gradient?: string;
}

export default function GradientText({
  text,
  className = "",
  as: Tag = "h1",
  gradient = "from-[var(--color-gold)] via-[var(--color-champagne)] to-[var(--color-gold)]",
}: GradientTextProps) {
  return (
    <Tag
      className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent ${className}`}
    >
      {text}
    </Tag>
  );
}
