import { useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextPressureProps {
  text: string;
  className?: string;
  flex?: boolean;
  alpha?: boolean;
  stroke?: boolean;
  width?: boolean;
  weight?: boolean;
  italic?: boolean;
  textColor?: string;
  strokeColor?: string;
  minFontSize?: number;
}

export function TextPressure({
  text,
  className,
  textColor = "currentColor",
  strokeColor = "currentColor",
  minFontSize = 24,
}: TextPressureProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const characters = useMemo(() => text.split(""), [text]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex w-full flex-wrap items-center justify-center overflow-hidden",
        className
      )}
    >
      {characters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: i * 0.05,
            duration: 0.5,
            ease: "easeOut",
          }}
          style={{
            color: textColor,
            WebkitTextStroke: `1px ${strokeColor}`,
            fontSize: `clamp(${minFontSize}px, 10vw, 150px)`,
            display: "inline-block",
            whiteSpace: "pre",
          }}
          className="font-display"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}
