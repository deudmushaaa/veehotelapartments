"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Maximize2, X } from "lucide-react";

// For demonstration, we'll use our generated images and then populate the rest
const images = [
  { src: "/hero.png", title: "Luxury Lounge" },
  { src: "/bedroom.png", title: "Master Bedroom" },
  { src: "/hero.png", title: "Pool Side View" },
  { src: "/bedroom.png", title: "Elegant Dining" },
  // ... let's simulate the 70+ images with placeholders for now
  ...Array.from({ length: 68 }).map((_, i) => ({
    src: `https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop`,
    title: `Gallery Image ${i + 5}`
  }))
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-background px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif">The Gallery</h2>
          <div className="w-24 h-[1px] bg-gold mx-auto" />
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto font-sans">
            Witness the serenity and modern elegance of Luxury Haven. 70+ high-quality captures.
          </p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 10) * 0.05 }}
              className="relative group cursor-pointer overflow-hidden luxury-shadow"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.title}
                width={500}
                height={500}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <Maximize2 className="w-6 h-6 mx-auto mb-2 text-gold" />
                  <p className="text-xs uppercase tracking-widest">{image.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-8 right-8 text-white hover:text-gold transition-colors">
            <X size={32} />
          </button>
          <div className="relative w-full max-w-5xl aspect-video">
            <Image
              src={selectedImage}
              alt="Full view"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
