"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShieldCheck, MapPin, Coffee, Car, Plane, Globe, Star, CheckCircle2, Info } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Header */}
      <section className="pt-40 pb-20 bg-muted/30 px-6 border-b border-gold/10">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col items-center text-center space-y-6">
            <Breadcrumbs items={[{ name: "About Us" }]} />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.3em] text-sm font-sans text-gold"
          >
            Our Legacy & Mission
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif"
          >
            About <span className="text-gold italic">Us</span>
          </motion.h1>
          <div className="w-24 h-[1px] bg-gold mx-auto" />
        </div>
      </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif">Vee Serviced <span className="italic text-gold">Apartments & Hotel</span></h2>
              <div className="space-y-6 text-lg text-foreground/70 font-sans leading-relaxed">
                <p>
                  Vee Serviced Apartments and Hotel, also known as Vee Hotel Apartment, are the official marketing and trading names of <strong>Vero’s Hotel Apartment</strong>, a company registered with the Uganda Registration Services Bureau (URSB).
                </p>
                <p>
                  We provide fully serviced apartments combined with hotel-style services and an on-site restaurant, offering comfort for both short and extended stays.
                </p>
                <p>
                  All names refer to one business, one property, and one management team. When you book with us, you are dealing with one trusted entity.
                </p>
              </div>
            </div>
            
            <div className="p-8 bg-muted/30 border border-gold/10 luxury-shadow space-y-6">
              <div className="flex items-center gap-4 text-gold">
                <ShieldCheck size={32} />
                <h3 className="text-xl font-serif">Booking & Payment</h3>
              </div>
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-widest text-foreground/50">Registration Info</p>
                <p className="text-lg font-sans">
                  To confirm your reservation, all payments are made to:
                </p>
                <p className="text-2xl font-serif text-gold">
                  Vero’s Hotel Apartment
                </p>
                <p className="text-xs text-foreground/40 italic">
                  (Official Registered Company Name)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dining Section */}
      <section id="dining" className="py-24 px-6 bg-muted/20 border-y border-gold/5">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif">The Vee <span className="text-gold italic">Kitchen</span></h2>
            <div className="w-24 h-[1px] bg-gold mx-auto" />
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto font-sans text-center">
              Experience fresh, local, and international flavors prepared with care at our on-site restaurant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative aspect-[1/1.414] overflow-hidden luxury-shadow group border border-gold/10 bg-white p-4">
               <img 
                 src="/images/menu1.jpg" 
                 alt="Vee Restaurant Menu Page 1" 
                 className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
               />
               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.02] transition-colors duration-500 pointer-events-none" />
            </div>
            <div className="relative aspect-[1/1.414] overflow-hidden luxury-shadow group border border-gold/10 bg-white p-4">
               <img 
                 src="/images/menu2.jpg" 
                 alt="Vee Restaurant Menu Page 2" 
                 className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
               />
               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.02] transition-colors duration-500 pointer-events-none" />
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-xs uppercase tracking-widest text-foreground/40">
              * Menu items and prices are subject to seasonal availability.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-24 px-6 bg-foreground text-background">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif">Brand <span className="text-gold italic text-white/90">Story</span></h2>
            <div className="w-24 h-[1px] bg-gold mx-auto" />
          </div>

          <div className="space-y-8 text-xl font-sans text-background/80 leading-relaxed text-center">
            <p className="text-2xl md:text-3xl font-serif text-white italic">
              "Vee was built for a different kind of guest—one who values space, privacy, and consistency without sacrificing service."
            </p>
            <p>
              We saw the gap clearly. Hotels offer service but limit your space. Apartments give you space but leave you on your own. Vee was designed to eliminate that compromise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12">
            <div className="space-y-4 text-center">
              <div className="text-5xl font-serif text-gold mb-2">V</div>
              <p className="uppercase tracking-[0.2em] font-bold">Value</p>
              <p className="text-sm opacity-60">Value means you get what you pay for—and more. Not cheap, but worth every shilling.</p>
            </div>
            <div className="space-y-4 text-center">
              <div className="text-5xl font-serif text-gold mb-2">E</div>
              <p className="uppercase tracking-[0.2em] font-bold">Experience</p>
              <p className="text-sm opacity-60">Experience means your stay goes beyond accommodation. It is comfortable, seamless, and memorable.</p>
            </div>
            <div className="space-y-4 text-center">
              <div className="text-5xl font-serif text-gold mb-2">E</div>
              <p className="uppercase tracking-[0.2em] font-bold">Excellence</p>
              <p className="text-sm opacity-60">Excellence means clean spaces, reliable systems, and professional service you can trust every time.</p>
            </div>
          </div>

          <div className="pt-16 border-t border-white/10 space-y-6 text-center max-w-2xl mx-auto opacity-80">
            <p>
              This is not a casual Airbnb setup. It is a controlled environment built for guests who expect standards: business travelers, corporate clients, families, and long-stay residents who need more than just accommodation.
            </p>
            <p className="text-gold font-serif text-2xl italic">
              "At Vee, you don’t adjust to the space. The space works for you."
            </p>
          </div>
        </div>
      </section>

      {/* Vee Quest Safaris Section */}
      <section id="safaris" className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-serif">Vee Quest <span className="italic text-gold">Safaris Limited</span></h2>
                <div className="w-24 h-[1px] bg-gold" />
              </div>
              <p className="text-lg text-foreground/70 leading-relaxed">
                We believe your experience should go beyond where you stay. That is why we created **Vee Quest Safaris Limited** to give our guests a complete, reliable, and well-managed travel experience from arrival to departure.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Plane, text: "Airport Pickups & Drop-offs" },
                  { icon: Car, text: "Executive & Private Transport" },
                  { icon: Globe, text: "Guided Kampala City Tours" },
                  { icon: MapPin, text: "Tailored Safaris & Trips" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-muted/20 border border-gold/5">
                    <item.icon className="text-gold w-5 h-5" />
                    <span className="text-sm font-sans">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 bg-muted p-12 luxury-shadow space-y-8 border border-gold/10">
              <h3 className="text-2xl font-serif">Why Choose <span className="text-gold">Vee Quest</span></h3>
              <ul className="space-y-4">
                {[
                  "Reliable and secure transport",
                  "Professional drivers and guides",
                  "Fast response and easy booking",
                  "Consistent service quality",
                  "Fully integrated stay experience"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/70">
                    <CheckCircle2 size={18} className="text-gold shrink-0" />
                    <span className="font-sans">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-gold/20">
                <p className="text-sm italic opacity-60">"We do not outsource your experience — we manage it."</p>
              </div>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto space-y-6 pt-12">
            <h3 className="text-2xl font-serif">Make Your Journey Effortless</h3>
            <p className="text-foreground/60">
              Let Vee Quest Safaris Limited take care of your travel plans. Contact us using the details below and our team will respond quickly to arrange your experience.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
