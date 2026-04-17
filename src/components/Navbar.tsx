"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Amenities", href: "#amenities" },
  { name: "Gallery", href: "#gallery" },
  { name: "Location", href: "#location" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
        scrolled ? "bg-background/80 backdrop-blur-md luxury-shadow py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          href="/" 
          className="text-2xl font-serif tracking-tight text-foreground"
        >
          VEE HOTEL <span className="text-gold italic">APARTMENTS</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest hover:text-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="https://wa.me/256776979729"
            target="_blank"
            className="px-6 py-2 bg-foreground text-background text-sm uppercase tracking-widest hover:bg-gold transition-all duration-300"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-background border-t border-muted p-6 flex flex-col space-y-4 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-serif"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="https://wa.me/256776979729"
            className="w-full py-3 bg-gold text-white text-center rounded-sm uppercase tracking-widest"
          >
            Book Now
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
