import { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, MapPin, Menu, SparklesCore, Star, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Tour Dates', href: '#tour', icon: <MapPin className="w-4 h-4" /> },
    { name: 'Performers', href: '#performers', icon: <Star className="w-4 h-4" /> },
    { name: 'Gallery', href: '#gallery', icon: <Camera className="w-4 h-4" /> },
    { name: 'History', href: '#history', icon: <Star className="w-4 h-4" /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-3xl font-display text-primary tracking-tighter">PHANTASMAGORIA</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors flex items-center gap-2 font-medium"
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
              <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 font-display text-lg px-6">
                <Star className="mr-2 h-4 w-4" /> Get Tickets
              </Button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-b border-border"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground block px-3 py-2 rounded-md text-base font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                <span className="flex items-center gap-3">
                  {link.icon}
                  {link.name}
                </span>
              </a>
            ))}
            <div className="pt-4 pb-2">
              <Button className="w-full bg-primary text-primary-foreground font-display text-lg">
                <Star className="mr-2 h-4 w-4" /> Get Tickets
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
