"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Maximize2, X, ChevronRight } from "lucide-react";
import Link from "next/link";

const allImages = [
  { src: "/gallery/img1.jpg", title: "Aerial Building View" },
  { src: "/gallery/img2.jpg", title: "Sparkling Swimming Pool" },
  { src: "/gallery/img3.jpg", title: "Lake Victoria Panorama" },
  { src: "/gallery/img4.jpg", title: "Gourmet Kitchen" },
  { src: "/gallery/img5.jpg", title: "Luxury Living Room" },
  { src: "/gallery/img6.jpg", title: "Eco-Friendly Solar Setup" },
  { src: "/gallery/img7.jpg", title: "Elegant Interior" },
  { src: "/gallery/img8.jpg", title: "Spacious Lounge" },
  { src: "/gallery/img9.jpg", title: "Modern Bedroom" },
  { src: "/gallery/img10.jpg", title: "Bathroom Details" },
  { src: "/gallery/img11.jpg", title: "Dining Experience" },
  { src: "/gallery/img12.jpg", title: "Master Suite" },
  { src: "/gallery/img13.jpg", title: "View from Balcony" },
  { src: "/gallery/img14.jpg", title: "Property Landscape" },
  { src: "/gallery/img15.jpg", title: "Night Ambiance" },
  ...Array.from({ length: 55 }).map((_, i) => ({
    src: `/gallery/img${(i % 15) + 1}.jpg`, // Cycling for now to maintain the count
    title: `Gallery Image ${i + 16}`
  }))
];

export function Gallery({ limit }: { limit?: number }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const imagesToShow = limit ? allImages.slice(0, limit) : allImages;

  return (
    <section id="gallery" className="py-24 bg-background px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif">The Gallery</h2>
          <div className="w-24 h-[1px] bg-gold mx-auto" />
           <p className="text-lg text-foreground/60 max-w-2xl mx-auto font-sans">
            Witness the serenity and modern elegance of Vee Hotel Apartments. 
            {limit ? " A curated selection of our finest spaces." : " Explore all 70+ high-quality captures."}
          </p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {imagesToShow.map((image, idx) => (
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

        {limit && (
          <div className="mt-16 text-center">
            <Link 
              href="/gallery"
              className="inline-flex items-center gap-2 px-10 py-4 bg-foreground text-background uppercase tracking-[0.2em] text-xs font-bold hover:bg-gold transition-colors duration-300"
            >
              View More Photos <ChevronRight size={16} />
            </Link>
          </div>
        )}
      </div>

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
