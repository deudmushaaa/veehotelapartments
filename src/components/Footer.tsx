"use client";

import { MapPin, Mail, Phone, Camera, Globe } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-24 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        <div className="space-y-6">
          <Link href="/" className="text-2xl font-serif tracking-tight">
            VEE SERVICED <span className="text-gold italic">APARTMENTS & HOTEL</span>
          </Link>
          <p className="text-background/60 font-sans leading-relaxed">
            Your ultimate Uganda retreat at Vee Serviced Apartments & Hotel. Serene, secure, and modern living in the heart of Bwebajja.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-serif">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-4 text-background/60">
              <Phone className="text-gold w-5 h-5" />
              <span>+256 776 979 729</span>
            </li>
            <li className="flex items-center gap-4 text-background/60">
              <Phone className="text-gold w-5 h-5" />
              <span>+256 703 225 193</span>
            </li>
            <li className="flex items-center gap-4 text-background/60">
              <Mail className="text-gold w-5 h-5" />
              <span>info@veehotelapartments.com</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-serif">Location</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-4 text-background/60">
              <MapPin className="text-gold w-5 h-5 shrink-0 mt-1" />
              <span>Bwebajja, Entebbe Road, Uganda (21km from Airport, 19km from Kampala)</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-serif">Quick Links</h4>
          <ul className="space-y-4 text-background/60 font-sans">
            <li>
              <Link href="/#booking" className="hover:text-gold transition-colors">Book Your Stay</Link>
            </li>
            <li>
              <Link href="/about#dining" className="hover:text-gold transition-colors">The Vee Kitchen (Menu)</Link>
            </li>
            <li>
              <Link href="/about#safaris" className="hover:text-gold transition-colors">Vee Quest Safaris Limited</Link>
            </li>
          </ul>
          <div className="pt-4 space-y-4">
            <h4 className="text-sm font-serif text-gold uppercase tracking-widest">Follow Us</h4>
            <div className="flex gap-4">
              <Link href="#" className="p-3 bg-white/5 hover:bg-gold transition-colors">
                <Camera size={20} />
              </Link>
              <Link href="#" className="p-3 bg-white/5 hover:bg-gold transition-colors">
                <Globe size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest text-background/40">
        <p>© 2026 Vee Serviced Apartments & Hotel. All rights reserved.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-gold transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
