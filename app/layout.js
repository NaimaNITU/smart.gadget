// app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Global SEO metadata
export const metadata = {
  metadataBase: new URL("https://bestgearbuy.com"), // 🔄 replace with your real domain
  title: {
    default: "SmartGadget - Best Gadgets & Reviews",
    template: "%s | SmartGadget",
  },
   icons: {
    icon: '/logo.png', 
  },
  description:
    "Discover the best drones, smartwatches, soundbars, cordless drills, and earbuds. Detailed reviews, guides, and deals for affordable and premium gadgets.",
  keywords: [
    "Drones",
    "Smartwatches",
    "Soundbars",
    "Cordless Drills",
    "Earbuds",
    "Tech Reviews",
    "Best Gadgets",
  ],
  openGraph: {
    title: "SmartGadget - Best Gadgets & Reviews",
    description:
      "Explore top drones, smartwatches, soundbars, drills, and earbuds with expert reviews and buying guides.",
    url: "https://bestgearbuy.com",
    siteName: "SmartGadget",
    images: [
      {
        url: "https://bestgearbuy.com/og-image.jpg", // 🔄 replace with real OG image
        width: 1200,
        height: 630,
        alt: "SmartGadget - Gadgets & Reviews",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartGadget - Best Gadgets & Reviews",
    description:
      "Shop and compare the best drones, smartwatches, soundbars, cordless drills, and earbuds.",
    images: ["https://bestgearbuy.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://bestgearbuy.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
