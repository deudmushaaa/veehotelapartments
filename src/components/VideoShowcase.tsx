"use client";

import { motion } from "framer-motion";

const videos = [
  { id: "qI50fwEFlwM", title: "Cinematic Property Tour" },
  { id: "McEsMuNM_e0", title: "Luxury Living Spaces" },
  { id: "DTB7x4iuk7Y", title: "Poolside Serenity" },
];

export function VideoShowcase() {
  return (
    <section id="videos" className="py-24 bg-muted/20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif">A Glimpse of <span className="text-gold">Vee Hotel</span></h2>
          <div className="w-24 h-[1px] bg-gold mx-auto" />
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto font-sans">
            Take a cinematic journey through our property and experience the luxury before you arrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="space-y-4"
            >
              <div className="aspect-video relative group luxury-shadow overflow-hidden bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-center font-serif text-lg italic text-foreground/80">{video.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
