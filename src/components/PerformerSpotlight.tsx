import { FocusCards } from '@/components/ui/focus-cards';

export function PerformerSpotlight() {
  const performers = [
    {
      title: "The Alchemist of Shadows",
      src: "/images/performer-1.png",
      description: "Master of illusion and forgotten light arts. He bends reality with but a whisper."
    },
    {
      title: "Seraphina the Aerialist",
      src: "/images/performer-2.png",
      description: "Defying gravity since the turn of the century on silks of spun moonlight."
    },
    {
      title: "Mister Clockwork",
      src: "/images/performer-3.png",
      description: "A marvel of Victorian engineering? Or a soul trapped in brass and gears?"
    },
    {
      title: "The Whispering Sisters",
      src: "/images/performer-4.png",
      description: "A synchronized dance of fire and ice that tells the future in embers."
    },
    {
      title: "The Iron Beast",
      src: "/images/performer-5.png",
      description: "Stronger than ten men, with a heart as soft as the velvet curtains."
    },
    {
      title: "Madame Esmeralda",
      src: "/images/performer-6.png",
      description: "The eyes that see through the veil. Your past and future in a single card."
    }
  ];

  return (
    <section id="performers" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-7xl font-display text-primary">The Curiosities</h2>
          <div className="h-1 w-24 bg-accent mx-auto" />
          <p className="text-muted-foreground font-body text-xl max-w-2xl mx-auto italic">
            "Meet the extraordinary souls who dwell within the Phantasmagoria. Each a card in our mystical deck."
          </p>
        </div>

        <FocusCards cards={performers} />
      </div>

      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]" />
    </section>
  );
}

export default PerformerSpotlight;
