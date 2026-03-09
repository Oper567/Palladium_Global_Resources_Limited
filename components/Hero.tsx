import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-primary">
      {/* High-quality skyscraper/infrastructure background */}
      <img 
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80" 
        alt="Skyscraper Architecture" 
        className="absolute inset-0 w-full h-full object-cover z-0 grayscale-[15%]"
      />
      
      {/* Dark Olive Green gradient overlay for maximum text legibility and brand consistency */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/95 via-brand-primary/80 to-brand-primary/95 z-10"></div>

      {/* Main Content Flexbox Container */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto flex flex-col items-center -mt-10 md:-mt-16">
        
        {/* Pre-heading with Safety Yellow border */}
        <div className="inline-block border-b-2 border-brand-accent pb-2 mb-6">
          <h2 className="text-brand-accent text-xs md:text-sm font-bold tracking-[0.4em] uppercase drop-shadow-md">
            Palladium Global Resources Limited
          </h2>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-[5.5rem] font-black text-white uppercase tracking-tighter leading-[0.95] mb-8 drop-shadow-2xl">
          Let's Build <br />
          <span className="text-brand-accent">Together.......</span>
        </h1>
        
        {/* Mission Statement */}
        <p className="max-w-3xl text-lg md:text-2xl text-gray-200 font-light leading-relaxed mb-12 drop-shadow-lg px-4">
          Whether you're seeking a reliable contractor, a forward-thinking energy partner, or an innovative agribusiness ally, Palladium is your partner of choice for lasting impact.
        </p>

        {/* Action Button Flexbox (Industrial Square Design) */}
        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
          <a
            href="#services"
            className="px-12 py-5 bg-brand-accent text-brand-primary font-black uppercase tracking-widest text-xs rounded-sm hover:bg-white transition-colors duration-300 shadow-[0_4px_20px_0_rgba(250,204,21,0.3)]"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="px-12 py-5 bg-transparent border-2 border-white text-white font-black uppercase tracking-widest text-xs rounded-sm hover:bg-white hover:text-brand-accent hover:border-brand-accent transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Decorative Bottom Bar - Matches the sharp industrial aesthetic */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-brand-accent z-20"></div>
    </section>
  );
};

export default Hero;