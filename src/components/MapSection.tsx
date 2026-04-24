import { MapPin } from "lucide-react";

export function MapSection() {
  return (
    <section id="location" className="py-24 bg-background px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
               <h2 className="text-4xl md:text-5xl font-serif">Perfectly Situated</h2>
               <div className="w-24 h-[1px] bg-gold" />
            </div>
            
            <div className="space-y-6 text-lg text-foreground/70 font-sans leading-relaxed">
              <p>
                Located in the serene hills of <span className="text-foreground font-bold">Bwebajja</span> along Entebbe Road, our haven offers the perfect balance between urban access and quiet retreat.
              </p>
              
              <div className="flex items-start gap-4 p-6 bg-muted/30 border border-muted luxury-shadow">
                <MapPin className="text-gold w-6 h-6 shrink-0 mt-1" />
                <div className="space-y-2">
                    <p className="font-bold text-foreground">Vee Serviced Apartments & Hotel</p>
                    <p className="text-sm opacity-70">Entebbe Road, Bwebajja, Uganda</p>
                    <p className="text-sm opacity-70">21km from Entebbe International Airport</p>
                    <p className="text-sm opacity-70">19km from Kampala Central Business District</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-video lg:aspect-square bg-muted overflow-hidden luxury-shadow order-1 lg:order-2 border border-muted group cursor-pointer">
            {/* Real Map Placeholder UI */}
            <div className="absolute inset-0 bg-[#e5e3df] flex items-center justify-center">
               <div className="text-center space-y-4 px-8">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 scale-110 shadow-lg">
                    <MapPin className="text-white w-8 h-8" />
                  </div>
                  <p className="text-foreground/40 font-sans uppercase tracking-widest text-xs">Interactive Map Loading...</p>
               </div>
               
               {/* Aesthetic overlays to mimic a real map */}
               <div className="absolute top-4 left-4 p-2 bg-white/80 backdrop-blur-sm text-[10px] space-y-1">
                 <div className="w-12 h-1 bg-gold/20" />
                 <div className="w-8 h-1 bg-gold/20" />
               </div>
            </div>
            
            <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
