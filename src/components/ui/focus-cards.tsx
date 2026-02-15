import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Card = {
  title: string;
  src: string;
  description: string;
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: Card;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <motion.div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden rounded-none bg-secondary/50 transition-all duration-300 ease-out border-4 border-accent/20 cursor-pointer",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98] opacity-50",
        hovered === index && "border-primary scale-[1.02] shadow-2xl z-20"
      )}
      style={{
        aspectRatio: "3/4",
      }}
    >
      <img
        src={card.src}
        alt={card.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-110"
      />
      <div
        className={cn(
          "absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <h3 className="text-2xl font-display text-accent mb-2">{card.title}</h3>
        <p className="font-body text-primary-foreground/90 italic leading-snug">
          {card.description}
        </p>
      </div>
      
      {/* Decorative Tarot Border */}
      <div className="absolute inset-4 border border-accent/30 pointer-events-none" />
    </motion.div>
  )
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-3 max-w-7xl mx-auto px-4 md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
