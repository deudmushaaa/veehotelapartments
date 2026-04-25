"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="relative h-auto md:h-screen w-full overflow-hidden bg-background">
      {/* Mobile Layout */}
      <div className="flex flex-col md:hidden w-full pt-20">
        <div className="px-6 py-4 space-y-1">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="uppercase tracking-[0.3em] text-[10px] font-sans text-gold"
          >
            Serene • Modern • Secure
          </motion.p>
        </div>

        {/* Image Section with Overlay Text */}
        <div className="relative w-full aspect-[1280/742]">
          <Image
            src="/images/bwebajjaherosection.jpg"
            alt="Vee Serviced Apartments & Hotel"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-6">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-serif text-white leading-tight"
            >
              Vee Serviced <br/>
              <span className="italic text-gold">Apartments & Hotel</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[13px] font-sans text-white/90 leading-relaxed mt-2 max-w-[280px]"
            >
              Luxury 2BR Stay in Bwebajja. A premium retreat between Entebbe Airport and Kampala. 
            </motion.p>
          </div>
        </div>

        {/* Action Section Below Image */}
        <div className="p-6 space-y-4">
          <motion.button 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full py-4 bg-gold text-white uppercase tracking-widest text-xs font-bold shadow-lg"
          >
            Discover More
          </motion.button>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-between p-5 bg-muted/30 border border-muted"
          >
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest opacity-50">Luxury Stay</span>
              <span className="text-xl font-serif font-bold text-foreground">Premium Suite</span>
            </div>
            <div className="text-right">
              <span className="text-2xl font-serif font-bold text-gold">$100</span>
              <span className="block text-[10px] uppercase tracking-widest opacity-50">Per Night</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src="/images/bwebajjaherosection.jpg"
          alt="Vee Serviced Apartments & Hotel"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start text-white">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-2xl"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="uppercase tracking-[0.3em] text-sm font-sans text-gold"
            >
              Serene • Modern • Secure
            </motion.p>
            
            <h1 className="text-7xl font-serif leading-tight">
              Vee Serviced <span className="italic text-gold">Apartments & Hotel</span>
            </h1>
            
            <p className="text-xl font-sans text-white/90 leading-relaxed max-w-xl">
              Luxury 2BR Stay in Bwebajja. A premium retreat perfectly set between Entebbe Airport and Kampala. 
              Experience the best of Entebbe Road & Uganda for just $100/night.
            </p>

            <div className="flex gap-4 pt-4">
              <button className="px-8 py-4 bg-gold text-white uppercase tracking-widest text-sm hover:bg-white hover:text-gold transition-all duration-300">
                Discover More
              </button>
              <div className="flex items-center gap-4 px-6 py-4 backdrop-blur-md bg-white/10 border border-white/20">
                <span className="text-2xl font-serif font-bold">$100</span>
                <span className="text-xs uppercase tracking-widest opacity-80">Per Night</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator (Desktop Only) */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-white/20 relative">
            <motion.div 
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute left-0 w-full h-1/4 bg-gold"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
