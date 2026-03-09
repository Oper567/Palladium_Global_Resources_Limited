import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

/**
 * PALLADIUM GLOBAL RESOURCES LIMITED - ROOT LAYOUT
 * Sets the global architectural shell for the application.
 */

export const metadata: Metadata = {
  title: 'Palladium Global Resources Limited | Reshaping Nigeria’s Economy',
  description: `A proudly Nigerian conglomerate committed to reshaping the 
    nation's economic landscape through strategic investments in 
    industrialization, innovation, and infrastructure development.`,
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`
          ${inter.className} bg-white text-gray-900 antialiased 
          selection:bg-brand-accent selection:text-brand-primary
        `}
      >
        
        {/* Global Flexbox Shell: Ensures Footer stays at bottom on short pages */}
        <div className="flex flex-col min-h-screen">
          
          {/* Global Header: Contains TopBar (RC Number/Contacts) and Main Nav */}
          <Header />
          
          {/* Main Content Area: flex-grow allows this to fill the screen */}
          <main className="flex-grow">
            {children}
          </main>
          
          {/* Global Footer: Contains all 3 Office Locations and Quick Links */}
          <Footer />
          
        </div>

      </body>
    </html>
  );
}