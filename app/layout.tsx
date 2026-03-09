import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#3f4d21",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://palladium-global-resources-limited-beryl.vercel.app/",
  ),
  title: "Palladium Global Resources Limited | Engineering & Infrastructure",
  description: `A proudly Nigerian conglomerate reshaping the nation's economic landscape through strategic investments in civil engineering, downstream energy, ICT, and supply chain logistics.`,
  keywords: [
    "Palladium Global",
    "Civil Engineering Nigeria",
    "Downstream Energy",
    "Supply Chain Logistics",
    "ICT Management",
    "Infrastructure Development",
    "Construction Company Abuja",
    "Energy Services Delta",
  ],
  authors: [{ name: "Palladium Global Resources Limited" }],
  creator: "Palladium Global Resources Limited",
  publisher: "Palladium Global Resources Limited",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: "Palladium Global Resources",
    title: "Palladium Global | Building Nigeria’s Future",
    description: `Leading the way in civil engineering, energy, and infrastructure development across Nigeria. Start Now, Grow Big.`,
    images: [
      {
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "Palladium Global Corporate Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Palladium Global Resources Limited",
    description: "Strategic investments in industrialization, innovation, and infrastructure.",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=630&fit=crop&q=80",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${inter.className} bg-white text-slate-900 antialiased 
          selection:bg-brand-accent selection:text-brand-primary
          w-full overflow-x-clip
        `}
      >
        {/* Global Shell */}
        <div className="flex flex-col min-h-screen w-full overflow-x-clip relative">
          <Header />
          {/* FIX: Added pt (padding-top) to account for the fixed floating header. 
              This prevents the Hero section from being cut off.
          */}
          <main className="flex-grow w-full pt-[95px] md:pt-[110px] lg:pt-[130px]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}