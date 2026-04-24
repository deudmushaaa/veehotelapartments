"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp, Quote } from "lucide-react";

export function BrandStory() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-24 px-6 bg-muted/30 border-y border-gold/10">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <Quote className="w-10 h-10 text-gold mx-auto opacity-50" />
          <h2 className="text-4xl md:text-5xl font-serif">Brand <span className="text-gold italic">Story</span></h2>
          <div className="w-24 h-[1px] bg-gold mx-auto" />
        </div>

        <div className="space-y-6">
          <p className="text-2xl md:text-3xl font-serif text-foreground/90 leading-tight italic">
            "Vee Hospitality was built to solve one problem in African travel: inconsistency."
          </p>
          
          <div className="text-lg text-foreground/70 font-sans leading-relaxed max-w-2xl mx-auto">
            <p>
              We combine accommodation, travel planning, and curated experiences into one trusted system. 
              {!isExpanded && (
                <button 
                  onClick={() => setIsExpanded(true)}
                  className="text-gold font-bold ml-2 hover:underline inline-flex items-center gap-1"
                >
                  Read More <ChevronDown size={16} />
                </button>
              )}
            </p>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="space-y-8 pt-6 border-t border-gold/10 mt-8">
                  <p className="text-lg text-foreground/70 font-sans leading-relaxed max-w-2xl mx-auto">
                    Whether you are traveling for business or leisure, we ensure your journey is seamless from arrival to departure.
                  </p>

                  <div className="py-8 bg-white luxury-shadow border border-gold/10 rounded-sm">
                    <h3 className="text-2xl font-serif mb-6 text-gold">
                      VEE = “Value • Experience • Excellence”
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                      <div className="space-y-2">
                        <p className="font-serif text-xl">Value</p>
                        <p className="text-sm opacity-60 uppercase tracking-widest">for money</p>
                        <p className="text-sm font-sans italic text-foreground/50">"not cheap, but worth it"</p>
                      </div>
                      <div className="space-y-2">
                        <p className="font-serif text-xl">Experience</p>
                        <p className="text-sm opacity-60 uppercase tracking-widest">beyond stay</p>
                        <p className="text-sm font-sans italic text-foreground/50">"not just accommodation"</p>
                      </div>
                      <div className="space-y-2">
                        <p className="font-serif text-xl">Excellence</p>
                        <p className="text-sm opacity-60 uppercase tracking-widest">quality service</p>
                        <p className="text-sm font-sans italic text-foreground/50">"clean, reliable, professional"</p>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => setIsExpanded(false)}
                    className="text-gold font-bold hover:underline inline-flex items-center gap-1 mt-8"
                  >
                    Show Less <ChevronUp size={16} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
