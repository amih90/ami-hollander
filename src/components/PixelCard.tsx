import { ReactNode } from "react";

interface WarmCardProps {
  children: ReactNode;
  className?: string;
  accentColor?: string;
}

export default function WarmCard({
  children,
  className = "",
  accentColor,
}: WarmCardProps) {
  return (
    <div
      className={`glass-card p-5 ${className}`}
      style={
        accentColor
          ? { borderTop: `2px solid ${accentColor}` }
          : undefined
      }
    >
      {children}
    </div>
  );
}
