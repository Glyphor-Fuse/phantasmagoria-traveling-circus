import { Timeline } from '@/components/ui/timeline';

export function CircusHistory() {
  const historyData = [
    {
      title: "1892",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-display text-primary">The Fog-Born Beginning</h3>
          <p className="text-muted-foreground font-body leading-relaxed">
            Founded by the enigmatic Silas Vane on the outskirts of London. The Phantasmagoria began as a single wagon containing artifacts of "questionable origin" and a troupe of three who claimed to have escaped from time itself.
          </p>
          <div className="aspect-[16/9] w-full bg-primary/10 overflow-hidden border-2 border-accent/20">
            <img 
              src="/images/history-1.png" 
              alt="Vintage wagon" 
              className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      ),
    },
    {
      title: "1924",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-display text-primary">The Great Expansion</h3>
          <p className="text-muted-foreground font-body leading-relaxed">
            The circus crossed the Atlantic, arriving in New York Harbor during a solar eclipse. Eyewitnesses claimed the big top appeared from the mist already fully erected. It was during this era the "Whirlwind of Whispers" act was introduced.
          </p>
        </div>
      ),
    },
    {
      title: "1947",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-display text-primary">The Midnight Fire</h3>
          <p className="text-muted-foreground font-body leading-relaxed">
            Disaster struck in the Appalachian mountains. The entire troupe vanished for seven days, only to reappear with "Mister Clockwork," the mechanical marvel that breathes life into our current spectacles.
          </p>
          <div className="aspect-[4/3] w-full bg-primary/10 overflow-hidden border-2 border-accent/20">
            <img 
              src="/images/history-2.png" 
              alt="Vintage clockwork" 
              className="w-full h-full object-cover grayscale opacity-80"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Today",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-display text-primary">A Modern Myth</h3>
          <p className="text-muted-foreground font-body leading-relaxed">
            The Phantasmagoria remains a ghost in the machine of the modern world. We appear without warning, leaving only memories of impossible sights and the faint smell of ozone and old books.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section id="history" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-display text-primary text-center mb-16">Our Legend</h2>
          <Timeline data={historyData} />
        </div>
      </div>
    </section>
  );
}

export default CircusHistory;
