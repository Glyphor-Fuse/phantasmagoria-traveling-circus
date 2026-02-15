import CircularGallery from '@/components/ui/circular-gallery';

export function PhotoGallery() {
  return (
    <section id="gallery" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="text-5xl md:text-7xl font-display text-primary mb-4">Captured Moments</h2>
        <div className="h-1 w-24 bg-accent mx-auto mb-8" />
        <p className="text-muted-foreground font-body text-xl max-w-2xl mx-auto italic">
          A glimpse into the waking dream of the Phantasmagoria.
        </p>
      </div>
      
      <div className="h-[600px] w-full relative">
        <CircularGallery 
          bend={3} 
          textColor="var(--accent)" 
          borderRadius={0}
        />
        
        {/* Vignette effect */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,transparent_40%,var(--background)_100%)]" />
      </div>
    </section>
  );
}

export default PhotoGallery;
