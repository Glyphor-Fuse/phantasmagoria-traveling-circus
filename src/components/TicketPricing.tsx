import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export function TicketPricing() {
  const tiers = [
    {
      name: "The Wanderer",
      price: "$29",
      description: "General admission to the main show.",
      features: ["Main Stage Seating", "Access to the Midway", "Souvenir Program"],
      accent: false
    },
    {
      name: "The Aristocrat",
      price: "$59",
      description: "Premium viewing and luxury perks.",
      features: ["Reserved Front-Row Seating", "Early Entry", "Complimentary Absinthe Mocktail", "Photo with Performers"],
      accent: true
    },
    {
      name: "The Oracle",
      price: "$149",
      description: "The ultimate immersive experience.",
      features: ["Private Box Seating", "Backstage Tour", "Personal Tarot Reading", "Limited Edition Vintage Poster", "VIP Lounge Access"],
      accent: false
    }
  ];

  return (
    <section className="py-24 bg-secondary/20 relative border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-display text-primary">Admission Tiers</h2>
          <p className="text-muted-foreground font-body text-xl italic">Choose your level of immersion into the strange.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, idx) => (
            <Card key={idx} className={`relative flex flex-col border-4 rounded-none transition-transform hover:-translate-y-2 ${
              tier.accent ? 'border-accent shadow-2xl scale-105 z-10' : 'border-primary/20'
            }`}>
              {tier.accent && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-accent text-background px-4 py-1 font-display text-lg tracking-widest flex items-center gap-2">
                  <Star className="w-4 h-4 fill-current" /> MOST COVETED <Star className="w-4 h-4 fill-current" />
                </div>
              )}
              
              <CardHeader className="text-center pt-10">
                <CardTitle className="font-display text-4xl text-primary">{tier.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-5xl font-display text-accent">{tier.price}</span>
                  <span className="text-muted-foreground ml-2">/ soul</span>
                </div>
                <CardDescription className="font-body text-lg italic mt-4">{tier.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-grow">
                <div className="h-px w-full bg-border mb-8" />
                <ul className="space-y-4">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground/80 font-body">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pb-10 pt-6">
                <Button className={`w-full font-display text-2xl py-8 rounded-none ${
                  tier.accent ? 'bg-accent hover:bg-accent/90' : 'bg-primary hover:bg-primary/90'
                }`}>
                  SECURE PASSAGE
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TicketPricing;
