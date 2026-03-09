import React from 'react';

const Hero = () => {
  return (
    <section className="
      relative min-h-[100dvh] flex flex-col items-center 
      justify-center overflow-hidden bg-brand-primary
    ">
      {/* High-quality skyscraper/infrastructure background */}
      <img 
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80" 
        alt="Skyscraper Architecture" 
        className="
          absolute inset-0 w-full h-full object-cover 
          z-0 grayscale-[15%]
        "
      />
      
      {/* Dark Olive Green gradient overlay for maximum text legibility */}
      <div className="
        absolute inset-0 bg-gradient-to-b from-brand-primary/95 
        via-brand-primary/80 to-brand-primary/95 z-10
      "></div>

      {/* Main Content Flexbox Container */}
      <div className="
        relative z-20 text-center px-6 max-w-5xl mx-auto 
        flex flex-col items-center mt-10 md:mt-0 w-full
      ">
        
        {/* Pre-heading with Safety Yellow border */}
        <div className="
          inline-block border-b-2 border-brand-accent 
          pb-2 mb-4 md:mb-6 max-w-full
        ">
          <h2 className="
            text-brand-accent text-[10px] md:text-sm font-bold 
            tracking-[0.3em] md:tracking-[0.4em] uppercase drop-shadow-md break-words
          ">
            Palladium Global Resources Limited
          </h2>
        </div>
        
        {/* Main Headline - Scaled for mobile */}
        <h1 className="
          text-4xl sm:text-5xl md:text-[5.5rem] lg:text-[6.5rem] 
          font-black text-white uppercase tracking-tighter 
          leading-[1.1] md:leading-[0.95] mb-6 md:mb-8 
          drop-shadow-2xl break-words w-full
        ">
          Let's Build <br />
          <span className="text-brand-accent">Together.......</span>
        </h1>
        
        {/* Mission Statement */}
        <p className="
          max-w-3xl text-base sm:text-lg md:text-2xl 
          text-gray-200 font-light leading-relaxed 
          mb-10 md:mb-12 drop-shadow-lg px-2 sm:px-4 break-words text-center
        ">
          Whether you're seeking a reliable contractor, a forward-thinking 
          energy partner, or an innovative agribusiness ally, Palladium is 
          your partner of choice for lasting impact.
        </p>

        {/* Action Button Flexbox (Industrial Square Design) */}
        <div className="
          flex flex-col sm:flex-row gap-4 sm:gap-5 
          w-full sm:w-auto px-4 sm:px-0
        ">
          <a
            href="#services"
            className="
              px-8 py-4 md:px-12 md:py-5 bg-brand-accent 
              text-brand-primary font-black uppercase tracking-widest 
              text-xs rounded-sm hover:bg-white transition-colors 
              duration-300 shadow-[0_4px_20px_0_rgba(250,204,21,0.3)]
              w-full sm:w-auto text-center break-words
            "
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="
              px-8 py-4 md:px-12 md:py-5 bg-transparent 
              border-2 border-white text-white font-black uppercase 
              tracking-widest text-xs rounded-sm hover:bg-white 
              hover:text-brand-accent hover:border-brand-accent 
              transition-colors duration-300 w-full sm:w-auto text-center break-words
            "
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Decorative Bottom Bar - Matches the sharp industrial aesthetic */}
      <div className="
        absolute bottom-0 left-0 w-full h-1.5 md:h-2 
        bg-brand-accent z-20
      "></div>
    </section>
  );
};

export default Hero;