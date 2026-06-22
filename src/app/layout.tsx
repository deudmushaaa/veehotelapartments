import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
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
  title: "Vee Serviced Apartments & Hotel | Luxury 2BR Apartment in Uganda",
  description: "Experience the ultimate Uganda retreat at Vee Serviced Apartments & Hotel. A luxury 2-bedroom apartment perfectly set between Entebbe Airport and Kampala. Pool, private garden, and high-end amenities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/3ca495938596f64a81340e18/script.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-white">
        {children}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-E5L5RXNZBK"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E5L5RXNZBK');
            `,
          }}
        />
      </body>
    </html>
  );
}
