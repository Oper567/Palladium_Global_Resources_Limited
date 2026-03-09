import React from 'react';

const StrategySection = () => {
  return (
    <section id="strategy" className="
      py-24 bg-brand-light overflow-hidden
    ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Heading - Matching the 'About' and 'Services' patterns */}
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="
            text-sm font-bold text-brand-accent tracking-[0.3em] 
            uppercase mb-4
          ">
            How We Work
          </h2>
          <h3 className="
            text-4xl md:text-6xl font-black text-brand-primary 
            uppercase tracking-tight
          ">
            Strategy & Commitment
          </h3>
          <div className="mt-8 w-24 h-1.5 bg-brand-accent rounded-full"></div>
        </div>

        <div className="
          flex flex-col lg:flex-row gap-16 lg:gap-24 items-start
        ">
          
          {/* LEFT COLUMN: Sticky Image Showcase with Floating Frames */}
          <div className="
            w-full lg:w-1/2 lg:sticky lg:top-32 flex flex-col gap-8
          ">
            <div className="relative group">
              {/* Decorative Frame */}
              <div className="
                absolute inset-0 border-2 border-brand-accent 
                rounded-sm translate-x-4 translate-y-4 -z-10 
                transition-transform duration-500 
                group-hover:translate-x-6 group-hover:translate-y-6
              "></div>
              <div className="
                h-72 w-full overflow-hidden shadow-2xl rounded-sm 
                bg-brand-primary
              ">
                <img 
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80" 
                  alt="Industrial Machinery" 
                  className="
                    w-full h-full object-cover transition-transform 
                    duration-[2000ms] group-hover:scale-110 opacity-90
                  " 
                />
              </div>
            </div>

            <div className="relative group self-end w-4/5">
              {/* Decorative Frame */}
              <div className="
                absolute inset-0 border-2 border-brand-primary 
                rounded-sm -translate-x-4 translate-y-4 -z-10 
                transition-transform duration-500 
                group-hover:-translate-x-6 group-hover:translate-y-6
              "></div>
              <div className="
                h-80 w-full overflow-hidden shadow-2xl rounded-sm 
                bg-brand-primary
              ">
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" 
                  alt="Infrastructure Project" 
                  className="
                    w-full h-full object-cover transition-transform 
                    duration-[2000ms] group-hover:scale-110 opacity-90
                  " 
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Professional Content Blocks */}
          <div className="w-full lg:w-1/2 flex flex-col gap-12">
            
            {/* Strategy Block: Start Now, Grow Big */}
            <div className="
              bg-white p-10 border-l-8 border-brand-accent shadow-xl 
              hover:shadow-2xl transition-shadow duration-300
            ">
              <h3 className="
                text-3xl font-black text-brand-primary mb-6 
                uppercase tracking-tighter
              ">
                Our Strategy: <span className="text-brand-accent">Start Now, Grow Big</span>
              </h3>
              <p className="
                text-gray-600 mb-6 text-lg leading-relaxed 
                font-light text-justify
              ">
                At Palladium, we believe in the power of momentum. 
                We turn concepts into reality through a pragmatic, 
                phased approach that breaks down big ideas into 
                manageable, impactful milestones.
              </p>
              <div className="
                bg-brand-light p-6 border border-brand-accent/20 rounded-sm
              ">
                <p className="
                  text-brand-primary font-bold italic text-lg leading-snug
                ">
                  "Our 'Start Now, Grow Big' strategy ensures that no 
                  idea is too ambitious - we build it, adapt it, and 
                  scale it, always with action at the forefront."
                </p>
              </div>
            </div>

            {/* Local Content Block */}
            <div className="
              bg-white p-10 rounded-sm border border-gray-100 shadow-lg
            ">
              <h3 className="
                text-2xl font-black text-brand-primary mb-6 
                uppercase tracking-tight flex items-center
              ">
                <span className="w-8 h-1 bg-brand-accent mr-4"></span>
                Commitment to Local Content
              </h3>
              <p className="text-gray-500 mb-8 font-medium">
                We align with and champion the Federal Government's 
                Local Content Policy by:
              </p>
              <ul className="space-y-5">
                {[
                  "Employing and training Nigerians from local communities",
                  "Engaging indigenous contractors for civil works and logistics",
                  "Facilitating technology transfer through mentorship",
                  "Ensuring fair wages and long-term workforce development"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start group">
                    <div className="
                      flex-shrink-0 h-6 w-6 bg-brand-accent flex 
                      items-center justify-center rounded-full mr-4 
                      transition-transform group-hover:scale-110 
                      shadow-lg shadow-brand-accent/20
                    ">
                      <svg 
                        className="h-3.5 w-3.5 text-brand-primary" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth="4"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                    </div>
                    <span className="
                      text-brand-primary font-bold text-base 
                      leading-tight group-hover:text-brand-accent 
                      transition-colors
                    ">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* HSE Block: zero harm culture */}
            <div className="
              bg-brand-primary text-white p-10 rounded-sm shadow-2xl 
              relative overflow-hidden group
            ">
              {/* Animated decorative corner */}
              <div className="
                absolute top-0 right-0 w-32 h-32 bg-brand-accent 
                opacity-10 rounded-bl-full transition-transform 
                duration-700 group-hover:scale-150
              "></div>
              
              <h3 className="
                text-2xl font-black text-brand-accent mb-6 
                uppercase tracking-wider flex items-center
              ">
                Health, Safety, & Environment
              </h3>
              <p className="text-gray-300 mb-8 font-light text-lg leading-relaxed">
                Our operations are guided by rigorous safety protocols 
                and environmental responsibility. We uphold a culture of 
                <span className="text-white font-bold uppercase ml-1">
                  zero harm
                </span>, proactive risk management, and regulatory compliance.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                {[
                  "ISO 14001 Certified System",
                  "1.6M+ Zero-Incident Man-Hours",
                  "Substance & Weapon-Free Zones",
                  "Regular Audits & Drills"
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="h-2 w-2 bg-brand-accent rounded-full"></div>
                    <span className="
                      text-sm font-bold uppercase tracking-widest text-gray-200
                    ">
                      {stat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;