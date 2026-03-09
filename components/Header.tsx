"use client"

import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitors scroll position to add depth to the flexbox container
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`
      w-full z-50 sticky top-0 transition-all duration-300 
      ${isScrolled ? 'bg-white shadow-lg' : 'bg-white shadow-sm'}
    `}>
      
      {/* Top Bar - Contact & RC Number (Olive Green Background) */}
      <div className="
        bg-brand-primary text-brand-light text-[10px] md:text-xs 
        py-2.5 px-6 lg:px-8 flex flex-col md:flex-row 
        justify-between items-center gap-3 border-b-2 
        border-brand-accent
      ">
        <div className="
          flex items-center gap-4 tracking-widest uppercase font-bold
        ">
          <span className="
            text-brand-primary bg-brand-accent px-2.5 py-1 
            rounded-sm shadow-sm
          ">
            RC 1925948 
          </span>
          <div className="
            hidden lg:flex items-center gap-4 border-l 
            border-white/20 pl-4
          ">
            <span className="
              hover:text-brand-accent transition-colors cursor-pointer
            ">
              Abuja Head Office 
            </span>
            <span className="text-white/40">|</span>
            <span className="
              hover:text-brand-accent transition-colors cursor-pointer
            ">
              Asaba Office 
            </span>
          </div>
        </div>
        
        <div className="
          flex items-center gap-4 md:gap-6 font-medium tracking-wide
        ">
          <div className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <a href="tel:+2348066605477" className="
              hover:text-brand-accent transition-colors
            ">
              +234-806-660-5477 
            </a>
          </div>
          <span className="hidden sm:inline text-white/40">|</span>
          <div className="hidden sm:flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <a href="mailto:palladiumglobalresources@gmail.com" className="
              hover:text-brand-accent transition-colors
            ">
              palladiumglobalresources@gmail.com 
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="
        max-w-7xl mx-auto px-6 lg:px-8 py-5 flex 
        justify-between items-center
      ">
        
        {/* Logo Flexbox */}
        <div 
          className="flex flex-col group cursor-pointer" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <h1 className="
            text-2xl md:text-3xl font-black text-brand-primary 
            uppercase leading-none tracking-tighter 
            group-hover:text-brand-accent transition-colors 
            duration-300
          ">
            Palladium Global
          </h1>
          <h2 className="
            text-[10px] md:text-sm font-bold text-slate-500 
            tracking-[0.28em] uppercase mt-1
          ">
            Resources Limited
          </h2>
        </div>
        
        {/* Desktop Nav Flexbox */}
        <nav className="
          hidden lg:flex items-center gap-10 font-extrabold 
          text-xs text-brand-primary uppercase tracking-[0.15em]
        ">
          <a href="#about" className="
            hover:text-brand-accent transition-all relative py-2 
            after:content-[''] after:absolute after:bottom-0 
            after:left-0 after:w-0 after:h-0.5 after:bg-brand-accent 
            hover:after:w-full after:transition-all
          ">
            About Us
          </a>
          <a href="#strategy" className="
            hover:text-brand-accent transition-all relative py-2 
            after:content-[''] after:absolute after:bottom-0 
            after:left-0 after:w-0 after:h-0.5 after:bg-brand-accent 
            hover:after:w-full after:transition-all
          ">
            Strategy
          </a>
          <a href="#services" className="
            hover:text-brand-accent transition-all relative py-2 
            after:content-[''] after:absolute after:bottom-0 
            after:left-0 after:w-0 after:h-0.5 after:bg-brand-accent 
            hover:after:w-full after:transition-all
          ">
            Services
          </a>
          
          {/* High-Contrast Action Button */}
          <a href="#contact" className="
            ml-2 px-7 py-3 bg-brand-accent text-brand-primary 
            text-[11px] font-black hover:bg-brand-primary 
            hover:text-brand-accent transition-all duration-300 
            rounded-sm shadow-md
          ">
            Get In Touch
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="
            lg:hidden p-2 text-brand-primary transition-transform 
            active:scale-90
          "
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Dropdown with Animation */}
      <div className={`
        lg:hidden overflow-hidden transition-all duration-300 
        ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="
          bg-brand-light border-t border-gray-200 px-6 py-8 
          flex flex-col gap-6 shadow-inner
        ">
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="
            text-sm font-black text-brand-primary uppercase 
            tracking-widest hover:text-brand-accent
          ">
            About Us
          </a>
          <a href="#strategy" onClick={() => setIsMobileMenuOpen(false)} className="
            text-sm font-black text-brand-primary uppercase 
            tracking-widest hover:text-brand-accent
          ">
            Strategy
          </a>
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="
            text-sm font-black text-brand-primary uppercase 
            tracking-widest hover:text-brand-accent
          ">
            Services
          </a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="
            text-sm font-black text-brand-primary bg-brand-accent 
            px-4 py-3 text-center uppercase tracking-widest 
            rounded-sm shadow-sm
          ">
            Get In Touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;