import { Vortex } from '@/components/ui/vortex';
import { TextPressure } from '@/components/ui/text-pressure';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      <Vortex
        backgroundColor="transparent"
        rangeY={800}
        particleCount={300}
        baseHue={10}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <div className="z-10 text-center space-y-6 max-w-4xl mx-auto">
          <p className="text-accent font-display text-xl md:text-2xl uppercase tracking-[0.3em] mb-4">
            Step Into The Strange
          </p>
          
          <div className="h-[200px] md:h-[300px] w-full flex items-center justify-center">
            <TextPressure
              text="PHANTASMAGORIA"
              className="font-display text-7xl md:text-9xl text-primary drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="var(--primary)"
              strokeColor="var(--primary)"
              minFontSize={48}
            />
          </div>

          <p className="text-foreground/80 font-body text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed italic border-y border-border/50 py-4">
            "A traveling spectacle of the uncanny, the impossible, and the divine. 
            Where the past breathes again under the velvet sky."
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-display text-2xl px-12 py-8 rounded-none border-4 border-accent shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
              <Star className="mr-3 h-6 w-6" /> SECURE YOUR PASSAGE
            </Button>
            <Button variant="outline" size="lg" className="font-display text-2xl px-12 py-8 rounded-none border-2 border-primary text-primary hover:bg-primary/10">
              VIEW THE TOUR
            </Button>
          </div>
        </div>
      </Vortex>
      
      {/* Decorative corners */}
      <div className="absolute top-8 left-8 w-24 h-24 border-t-4 border-l-4 border-accent/30 pointer-events-none" />
      <div className="absolute top-8 right-8 w-24 h-24 border-t-4 border-r-4 border-accent/30 pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-24 h-24 border-b-4 border-l-4 border-accent/30 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-b-4 border-r-4 border-accent/30 pointer-events-none" />
    </section>
  );
}

export default Hero;
