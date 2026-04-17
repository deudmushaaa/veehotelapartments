import { Phone, MessageSquare, Mail, Globe, Calendar, Home } from "lucide-react";
import Link from "next/link";

const bookingPlatforms = [
  { name: "Booking.com", icon: Globe, link: "#", color: "hover:text-blue-600" },
  { name: "Airbnb", icon: Home, link: "#", color: "hover:text-rose-500" },
  { name: "Expedia", icon: Calendar, link: "#", color: "hover:text-yellow-600" },
  { name: "On-site Booking", icon: Calendar, link: "tel:+256776979729", color: "hover:text-gold" },
  { name: "WhatsApp", icon: MessageSquare, link: "https://wa.me/256776979729", color: "hover:text-green-500" },
  { name: "Send Email", icon: Mail, link: "mailto:info@veehotelapartments.com", color: "hover:text-gold" },
];

export function BookingSection() {
  return (
    <section id="booking" className="py-24 bg-foreground text-background px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif">Reserve Your Stay</h2>
          <div className="w-24 h-[1px] bg-gold mx-auto" />
          <p className="text-lg text-background/60 font-sans">
            Choose your preferred platform to book your luxury retreat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bookingPlatforms.map((platform) => (
            <Link
              key={platform.name}
              href={platform.link}
              className={`flex items-center justify-between p-6 border border-white/10 bg-white/5 transition-all duration-300 group ${platform.color} hover:bg-white hover:border-transparent`}
            >
              <div className="flex items-center gap-4">
                <platform.icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                <span className="font-sans uppercase tracking-widest text-sm font-bold group-hover:text-foreground">
                  {platform.name}
                </span>
              </div>
              <Calendar className="w-4 h-4 opacity-30 group-hover:opacity-100 group-hover:text-foreground" />
            </Link>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Direct Lines</p>
            <p className="text-xl font-serif">+256 776 979 729</p>
            <p className="text-xl font-serif">+256 703 225 193</p>
          </div>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Email Inquiry</p>
            <p className="text-xl font-serif underline underline-offset-8">info@veehotelapartments.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
