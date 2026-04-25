import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Amenities } from "@/components/Amenities";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { MapSection } from "@/components/MapSection";
import { BookingSection } from "@/components/BookingSection";
import { VideoShowcase } from "@/components/VideoShowcase";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif">
              Experience the best of <span className="text-gold italic">Entebbe Road</span>
            </h2>
            <div className="w-24 h-[1px] bg-gold" />
            <div className="space-y-6 text-lg text-foreground/70 font-sans leading-relaxed">
              <p>
                Begin your day with our **Bed & Breakfast service**, a hallmark of the hospitality at **Vee Serviced Apartments & Hotel**. Perfectly set between Entebbe Airport (21km) & Kampala (19km) in Bwebajja, we offer more than just a stay; we offer a sanctuary.
              </p>
              <p>
                Our property features **8 uniquely named units**, each offering a distinct atmosphere of peace and luxury: **Bethel, Eden, Horeb, Moriah, Ramah, Shilloh, Sinai, and Zion**.
              </p>
              <p>
                Each apartment features a master suite with panoramic views of Lake Victoria, a twin room, and a stylish lounge with a 55-inch Smart TV. With a fully equipped gourmet kitchen and solar-powered convenience, we provide the perfect blend of modern luxury and serene Ugandan charm.
              </p>
            </div>
            <div className="flex gap-12 pt-4">
              <div>
                <p className="text-3xl font-serif text-gold">21km</p>
                <p className="text-xs uppercase tracking-widest opacity-50">To Airport</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-gold">19km</p>
                <p className="text-xs uppercase tracking-widest opacity-50">To Kampala</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-gold">$100</p>
                <p className="text-xs uppercase tracking-widest opacity-50">Per Night</p>
              </div>
            </div>
            <div className="pt-4">
              <Link 
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background uppercase tracking-widest text-xs font-bold hover:bg-gold transition-all duration-300"
              >
                Read Our Full Story <ChevronRight size={16} />
              </Link>
            </div>
          </div>
          
          <div className="relative aspect-square md:aspect-video lg:aspect-square group overflow-hidden luxury-shadow">
            <img 
              src="/images/section2.jpg" 
              alt="Luxury Master Bedroom" 
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        </div>
      </section>
      
      <Amenities />
      <VideoShowcase /> {/* Added the cinematic video showcase */}
      <Gallery limit={15} />
      <MapSection />
      <BookingSection />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
