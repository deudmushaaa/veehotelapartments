"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt="Luxury Bwebajja Haven"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
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
          
          <h1 className="text-5xl md:text-7xl font-serif leading-tight">
            Luxury 2BR Haven in <span className="italic">Bwebajja</span>
          </h1>
          
          <p className="text-lg md:text-xl font-sans text-white/90 leading-relaxed max-w-xl">
            A premium retreat perfectly set between Entebbe Airport and Kampala. 
            Experience the best of Entebbe Road for just $100/night.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
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

      {/* Scroll Indicator */}
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
    </section>
  );
}
