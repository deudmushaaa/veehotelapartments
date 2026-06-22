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
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7986373232256!2d32.5400252!3d0.1799729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db12732b6118f%3A0xa2878ebba0ab8228!2sVee%20Hotel%20Apartment!5e0!3m2!1sen!2sug!4v1782110068157!5m2!1sen!2sug" 
              className="absolute inset-0 w-full h-full" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
