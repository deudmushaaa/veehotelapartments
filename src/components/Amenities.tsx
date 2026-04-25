"use client";

import { 
  Shield, Wifi, Coffee, Waves, Car, Utensils, Sun, Zap, Tv, ChefHat, Trees, Plane,
  Dumbbell, Bed, Sparkles
} from "lucide-react";
import Link from "next/link";

const amenities = [
  { name: "Bed & Breakfast", icon: Coffee, description: "Start your morning with a curated selection of fresh, local delights." },
  { name: "Sparkling Pool", icon: Waves, description: "Refreshing pool with twilight lighting and loungers." },
  { name: "Lake Victoria View", icon: Sun, description: "Stunning panoramic vistas of the lake from the balcony." },
  { name: "Modern Fitness Gym", icon: Dumbbell, description: "Stay active with our fully equipped on-site fitness center." },
  { name: "On-site Restaurant", icon: ChefHat, description: "Enjoy gourmet meals prepared by our professional chefs.", link: "/about#dining", linkText: "View Menu" },
  { name: "Private Garden", icon: Trees, description: "Lush green spaces perfect for relaxation and fresh air." },
  { name: "Airport Taxi", icon: Plane, description: "Reliable airport transfers and local shuttles available." },
  { name: "Eco-Solar Powered", icon: Zap, description: "Sustainable energy with backup solar power system." },
  { name: "Smart TV & Sound", icon: Tv, description: "55-inch Smart TV with cinematic soundbar system." },
  { name: "High-end Kitchen", icon: Utensils, description: "Fully equipped with oven, microwave & coffee maker." },
  { name: "High-Speed Wi-Fi", icon: Wifi, description: "Fast and reliable internet for work or play." },
  { name: "24/7 Security", icon: Shield, description: "Gated community with secure on-site reception." },
  { name: "Secure Parking", icon: Car, description: "Safe and spacious parking for all our guests." },
  { name: "Daily Housekeeping", icon: Sparkles, description: "Pristine living conditions with our professional cleaning staff." },
  { name: "Luxury Bedding", icon: Bed, description: "Premium linens and comfortable mattresses for a restful sleep." },
];

export function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif">Curated Amenities</h2>
          <div className="w-24 h-[1px] bg-gold mx-auto" />
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto font-sans">
            Every detail has been carefully selected to ensure your stay is as comfortable as it is luxurious.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((item: any, idx) => (
            <div 
              key={idx}
              className="p-8 border border-muted hover:border-gold group transition-all duration-500 luxury-shadow bg-background flex flex-col"
            >
              <item.icon className="w-10 h-10 mb-6 text-gold group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-xl font-serif mb-2">{item.name}</h3>
              <p className="text-sm text-foreground/50 leading-relaxed mb-4">
                {item.description}
              </p>
              {item.link && (
                <Link 
                  href={item.link} 
                  className="mt-auto inline-block text-xs font-bold text-gold hover:underline uppercase tracking-widest"
                >
                  {item.linkText} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
