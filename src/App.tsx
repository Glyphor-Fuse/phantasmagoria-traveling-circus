import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TourSchedule } from "@/components/TourSchedule";
import { PerformerSpotlight } from "@/components/PerformerSpotlight";
import { PhotoGallery } from "@/components/PhotoGallery";
import { TicketPricing } from "@/components/TicketPricing";
import { CircusHistory } from "@/components/CircusHistory";
import { Footer } from "@/components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
          <Navbar />
          <Hero />
          <TourSchedule />
          <PerformerSpotlight />
          <PhotoGallery />
          <TicketPricing />
          <CircusHistory />
          <Footer />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
