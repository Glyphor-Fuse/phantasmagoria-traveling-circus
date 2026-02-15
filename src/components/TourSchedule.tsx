import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Star } from 'lucide-react';

export function TourSchedule() {
  const dates = [
    { city: "New Orleans, LA", venue: "The Bayou Grounds", date: "Oct 12-15", status: "Selling Fast" },
    { city: "Savannah, GA", venue: "Forsyth Park Encampment", date: "Oct 19-22", status: "Limited" },
    { city: "Charleston, SC", venue: "The Old Market Square", date: "Oct 26-31", status: "Halloween Special" },
    { city: "Salem, MA", venue: "Gallows Hill Meadows", date: "Nov 03-07", status: "Open" },
    { city: "Philadelphia, PA", venue: "The Fairmount Big Top", date: "Nov 12-18", status: "Open" },
    { city: "Asbury Park, NJ", venue: "The Boardwalk Pavilion", date: "Nov 22-26", status: "Season Finale" },
  ];

  return (
    <section id="tour" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-display text-primary">Tour Itinerary</h2>
            <p className="text-muted-foreground font-body text-xl italic">Follow the caravan through the mist...</p>
          </div>
          <div className="flex items-center gap-4 bg-background p-4 border-2 border-border shadow-sm">
            <MapPin className="text-accent h-6 w-6" />
            <span className="font-display text-xl uppercase tracking-wider">Current Location: New Orleans</span>
          </div>
        </div>

        <div className="bg-background border-4 border-primary/20 shadow-2xl overflow-hidden rounded-sm">
          <Table>
            <TableHeader className="bg-primary/5">
              <TableRow className="border-b-2 border-primary/20">
                <TableHead className="font-display text-xl py-6 text-primary">Location</TableHead>
                <TableHead className="font-display text-xl py-6 text-primary">Venue</TableHead>
                <TableHead className="font-display text-xl py-6 text-primary">Dates</TableHead>
                <TableHead className="font-display text-xl py-6 text-primary">Availability</TableHead>
                <TableHead className="text-right py-6"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dates.map((item, idx) => (
                <TableRow key={idx} className="hover:bg-primary/5 transition-colors border-b border-border">
                  <TableCell className="font-bold py-6">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-accent" />
                      {item.city}
                    </div>
                  </TableCell>
                  <TableCell className="italic text-muted-foreground">{item.venue}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-accent" />
                      {item.date}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={`px-3 py-1 text-xs uppercase tracking-widest font-bold border ${
                      item.status === 'Limited' || item.status === 'Selling Fast' 
                        ? 'border-primary text-primary bg-primary/10' 
                        : 'border-accent text-accent bg-accent/10'
                    }`}>
                      {item.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-foreground transition-all">
                      <Star className="w-4 h-4 mr-2" /> Tickets
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-12 text-center">
          <p className="font-body italic text-muted-foreground">
            * Doors open 1 hour prior to performance. Dress in your vintage best for a chance at backstage entry.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TourSchedule;
