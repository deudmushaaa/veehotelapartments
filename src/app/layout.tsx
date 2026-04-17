import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Bwebajja Haven | Luxury 2BR Apartment in Uganda",
  description: "Experience the ultimate Uganda retreat. A luxury 2-bedroom apartment perfectly set between Entebbe Airport and Kampala. Pool, private garden, and high-end amenities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
