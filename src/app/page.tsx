import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Amenities } from "@/components/Amenities";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";

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
                Perfectly set between Entebbe Airport (21km) & Kampala (19km), our 2BR Haven in Bwebajja is more than just an apartment; it's a lifestyle.
              </p>
              <p>
                Enjoy a master suite, twin room, 2 baths & a stylish lounge with Smart TV. Our high-end kitchen is equipped with everything you need: oven, microwave, and coffee maker.
              </p>
              <p>
                Whether you're looking for a peaceful retreat after a long flight or a secure base for your Kampala business trip, we provide the perfect blend of modern comfort and Ugandan serenity.
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
          </div>
          
          <div className="relative aspect-square md:aspect-video lg:aspect-square group overflow-hidden luxury-shadow">
            <img 
              src="/bedroom.png" 
              alt="Luxury bedroom" 
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none" />
          </div>
        </div>
      </section>

      <Amenities />
      <Gallery />
      <Footer />
    </main>
  );
}
