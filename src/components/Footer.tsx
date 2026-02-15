import { Instagram, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-accent opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <h2 className="text-5xl font-display tracking-tighter text-accent">PHANTASMAGORIA</h2>
            <p className="font-body text-xl italic max-w-md text-primary-foreground/80">
              "Witness the unravelling of reality. The show begins when the sun sets and the secrets rise."
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-accent/20 hover:bg-accent/40 rounded-full transition-colors border border-accent/30">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-accent/20 hover:bg-accent/40 rounded-full transition-colors border border-accent/30">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-accent/20 hover:bg-accent/40 rounded-full transition-colors border border-accent/30">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-display text-accent border-b border-accent/30 pb-2 inline-block">Correspondence</h3>
            <ul className="space-y-4 font-body text-lg">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span>ravens@phantasmagoria.live</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span>+1 (555) MAGICK-0</span>
              </li>
              <li className="flex items-center gap-3 italic">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Look for the Black & Crimson Tent</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-display text-accent border-b border-accent/30 pb-2 inline-block">Manifesto</h3>
            <ul className="space-y-2 font-body text-lg text-primary-foreground/80 italic">
              <li>• Ticket Policy</li>
              <li>• Terms of Enthrallment</li>
              <li>• Safety of the Soul</li>
              <li>• Press Inquiries</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-12 text-center">
          <p className="font-body text-sm text-primary-foreground/60 tracking-widest uppercase">
            © 1892 - 2024 Phantasmagoria Traveling Circus. All Rights & Spirits Reserved.
          </p>
          <div className="mt-4 flex justify-center gap-8">
            <div className="w-8 h-8 bg-accent/20 rotate-45 border border-accent/30" />
            <div className="w-8 h-8 bg-accent/40 rotate-45 border border-accent/30" />
            <div className="w-8 h-8 bg-accent/20 rotate-45 border border-accent/30" />
          </div>
        </div>
      </div>
      
      {/* Background Graphic Elements */}
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="absolute top-[-50px] left-[-50px] w-[300px] h-[300px] rounded-full bg-background/20 blur-[80px]" />
    </footer>
  );
}

export default Footer;
