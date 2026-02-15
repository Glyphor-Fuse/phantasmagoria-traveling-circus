import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CircularGalleryProps {
  bend?: number;
  textColor?: string;
  borderRadius?: number;
}

export default function CircularGallery({
  bend = 3,
  textColor = "currentColor",
  borderRadius = 0,
}: CircularGalleryProps) {
  const images = [
    "/images/performer-1.png",
    "/images/performer-2.png",
    "/images/performer-3.png",
    "/images/performer-4.png",
    "/images/performer-5.png",
    "/images/performer-6.png",
  ];

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="relative flex h-[500px] w-[500px] items-center justify-center"
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="absolute h-[250px] w-[180px] border-4 border-primary/20 shadow-xl overflow-hidden"
            style={{
              transform: `rotate(${i * (360 / images.length)}deg) translateY(-200px)`,
              borderRadius: `${borderRadius}px`,
            }}
          >
            <img src={src} alt={`Gallery ${i}`} className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
