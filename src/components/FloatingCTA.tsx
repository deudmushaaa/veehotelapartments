"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 p-4 z-[40] md:hidden"
        >
          <Link
            href="#booking"
            className="flex items-center justify-between w-full bg-foreground text-background px-6 py-4 luxury-shadow rounded-sm font-sans uppercase tracking-[0.2em] text-xs font-bold"
          >
            <span>Book Your Stay</span>
            <span className="text-gold">$100/Night</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
