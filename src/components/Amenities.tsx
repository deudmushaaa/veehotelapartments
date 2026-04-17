import { Star, Shield, Wifi, Coffee, Waves, Car, Utensils, Maximize } from "lucide-react";

const amenities = [
  { name: "Master Suite", icon: Star, description: "Luxurious queen bed with private bath." },
  { name: "Sparkling Pool", icon: Waves, description: "Perfect for a refreshing dip anytime." },
  { name: "High-Speed Wi-Fi", icon: Wifi, description: "Fast and reliable internet for work or play." },
  { name: "Premium Kitchen", icon: Coffee, description: "Equipped with oven, microwave & coffee maker." },
  { name: "24/7 Security", icon: Shield, description: "Gated community with on-site reception." },
  { name: "Secure Parking", icon: Car, description: "Private parking space for guests." },
  { name: "Elegant Dining", icon: Utensils, description: "Stylish area for shared meals." },
  { name: "Private Garden", icon: Maximize, description: "Serene terrace and lush greenery." },
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
          {amenities.map((item, idx) => (
            <div 
              key={idx}
              className="p-8 border border-muted hover:border-gold group transition-all duration-500 luxury-shadow bg-background"
            >
              <item.icon className="w-10 h-10 mb-6 text-gold group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-xl font-serif mb-2">{item.name}</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
