import React from 'react';

const StrategySection = () => {
  return (
    <section id="strategy" className="
      py-16 lg:py-24 bg-brand-light overflow-hidden
    ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Heading - Fluid margins and text sizing */}
        <div className="flex flex-col items-center text-center mb-12 lg:mb-20">
          <h2 className="
            text-xs md:text-sm font-bold text-brand-accent 
            tracking-[0.3em] uppercase mb-3 lg:mb-4 animate-fade-up break-words
          ">
            How We Work
          </h2>
          <h3 className="
            text-3xl md:text-5xl lg:text-6xl font-black 
            text-brand-primary uppercase tracking-tight animate-fade-up break-words
          ">
            Strategy & Commitment
          </h3>
          <div className="
            mt-6 lg:mt-8 w-16 lg:w-24 h-1.5 bg-brand-accent rounded-full
          "></div>
        </div>

        <div className="
          flex flex-col lg:flex-row gap-12 lg:gap-24 items-start
        ">
          
          {/* LEFT COLUMN: Sticky Image Showcase with Floating Frames */}
          <div className="
            w-full lg:w-1/2 lg:sticky lg:top-32 flex flex-col gap-6 lg:gap-8
          ">
            <div className="relative group">
              {/* Decorative Frame - Safe zones for mobile */}
              <div className="
                absolute inset-0 border-2 border-brand-accent 
                rounded-sm translate-x-3 translate-y-3 
                lg:translate-x-4 lg:translate-y-4 -z-10 
                transition-transform duration-500 animate-float
                group-hover:translate-x-5 group-hover:translate-y-5
                lg:group-hover:translate-x-6 lg:group-hover:translate-y-6
              "></div>
              <div className="
                h-64 sm:h-72 lg:h-80 w-full overflow-hidden 
                shadow-2xl rounded-sm bg-brand-primary
              ">
                {/* Image 1: Heavy Industrial Machinery */}
                <img 
                  src="Heavy.png" 
                  alt="Heavy Industrial Construction Machinery" 
                  className="
                    w-full h-full object-cover transition-transform 
                    duration-[2000ms] group-hover:scale-110 opacity-90
                  " 
                />
              </div>
            </div>

            <div className="relative group self-end w-[85%] lg:w-4/5 mt-2 lg:mt-0">
              {/* Decorative Frame - Safe zones for mobile */}
              <div className="
                absolute inset-0 border-2 border-brand-primary 
                rounded-sm -translate-x-2 translate-y-2 
                lg:-translate-x-4 lg:translate-y-4 -z-10 
                transition-transform duration-500 animate-float
                group-hover:-translate-x-4 group-hover:translate-y-4
                lg:group-hover:-translate-x-6 lg:group-hover:translate-y-6
              "></div>
              <div className="
                h-56 sm:h-64 lg:h-80 w-full overflow-hidden 
                shadow-2xl rounded-sm bg-brand-primary
              ">
                {/* Image 2: Large Scale Infrastructure Project */}
                <img 
                  src="large.png" 
                  alt="Infrastructure Development Project" 
                  className="
                    w-full h-full object-cover transition-transform 
                    duration-[2000ms] group-hover:scale-110 opacity-90
                  " 
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Professional Content Blocks */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:gap-12 mt-4 lg:mt-0">
            
            {/* Strategy Block: Start Now, Grow Big */}
            <div className="
              bg-white p-6 md:p-8 lg:p-10 border-l-8 border-brand-accent 
              shadow-xl hover:shadow-2xl transition-shadow duration-300
            ">
              <h3 className="
                text-2xl md:text-3xl font-black text-brand-primary 
                mb-4 lg:mb-6 uppercase tracking-tighter leading-tight break-words
              ">
                Our Strategy: <br className="hidden lg:block"/>
                <span className="text-brand-accent">Start Now, Grow Big</span>
              </h3>
              {/* FIX APPLIED HERE: text-left on mobile, lg:text-justify on desktop */}
              <p className="
                text-gray-600 mb-6 text-base lg:text-lg leading-relaxed 
                font-light text-left lg:text-justify break-words
              ">
                At Palladium, we believe in the power of momentum. 
                We turn concepts into reality through a pragmatic, 
                phased approach that breaks down big ideas into 
                manageable, impactful milestones.
              </p>
              <div className="
                bg-brand-light p-4 lg:p-6 border border-brand-accent/20 rounded-sm
              ">
                <p className="
                  text-brand-primary font-bold italic text-base 
                  lg:text-lg leading-snug break-words text-left lg:text-justify
                ">
                  "Our 'Start Now, Grow Big' strategy ensures that no 
                  idea is too ambitious - we build it, adapt it, and 
                  scale it, always with action at the forefront."
                </p>
              </div>
            </div>

            {/* Local Content Block */}
            <div className="
              bg-white p-6 md:p-8 lg:p-10 rounded-sm border 
              border-gray-100 shadow-lg hover-lift
            ">
              <h3 className="
                text-xl md:text-2xl font-black text-brand-primary 
                mb-4 lg:mb-6 uppercase tracking-tight flex items-center break-words
              ">
                <span className="w-6 lg:w-8 h-1 bg-brand-accent mr-3 lg:mr-4 shrink-0"></span>
                Commitment to Local Content
              </h3>
              <p className="text-gray-500 mb-6 lg:mb-8 font-medium text-sm lg:text-base break-words">
                We align with and champion the Federal Government's 
                Local Content Policy by:
              </p>
              <ul className="space-y-4 lg:space-y-5">
                {[
                  "Employing and training Nigerians from local communities",
                  "Engaging indigenous contractors for civil works and logistics",
                  "Facilitating technology transfer through mentorship",
                  "Ensuring fair wages and long-term workforce development"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start group">
                    <div className="
                      flex-shrink-0 h-5 w-5 lg:h-6 lg:w-6 bg-brand-accent 
                      flex items-center justify-center rounded-full 
                      mr-3 lg:mr-4 transition-transform group-hover:scale-110 
                      shadow-md shadow-brand-accent/20 mt-0.5
                    ">
                      <svg 
                        className="h-3 w-3 lg:h-3.5 lg:w-3.5 text-brand-primary" 
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
                      text-brand-primary font-bold text-sm lg:text-base 
                      leading-tight group-hover:text-brand-accent 
                      transition-colors break-words
                    ">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Choose Us Block */}
            <div className="
              bg-white p-6 md:p-8 lg:p-10 rounded-sm border 
              border-gray-100 shadow-lg hover-lift
            ">
              <h3 className="
                text-xl md:text-2xl font-black text-brand-primary 
                mb-6 lg:mb-8 uppercase tracking-tight flex items-center break-words
              ">
                <span className="w-6 lg:w-8 h-1 bg-brand-accent mr-3 lg:mr-4 shrink-0"></span>
                Why Choose Us
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                <div>
                  <h4 className="font-black text-brand-primary mb-2 uppercase text-sm tracking-wide break-words">
                    End-to-End Execution
                  </h4>
                  <p className="text-gray-500 text-sm font-light leading-relaxed break-words text-left">
                    From conceptual design to final handover, we manage every detail with precision.
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-brand-primary mb-2 uppercase text-sm tracking-wide break-words">
                    Multi-Sector Expertise
                  </h4>
                  <p className="text-gray-500 text-sm font-light leading-relaxed break-words text-left">
                    Diverse, industry-leading capabilities across engineering, energy, ICT, and logistics.
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-brand-primary mb-2 uppercase text-sm tracking-wide break-words">
                    Uncompromising Quality
                  </h4>
                  <p className="text-gray-500 text-sm font-light leading-relaxed break-words text-left">
                    Rigorous adherence to international standards, engineering codes, and best practices.
                  </p>
                </div>
                <div>
                  <h4 className="font-black text-brand-primary mb-2 uppercase text-sm tracking-wide break-words">
                    Timely Delivery
                  </h4>
                  <p className="text-gray-500 text-sm font-light leading-relaxed break-words text-left">
                    Pragmatic project management ensuring milestones are consistently met on schedule.
                  </p>
                </div>
              </div>
            </div>

            {/* HSE Block: zero harm culture */}
            <div className="
              bg-brand-primary text-white p-6 md:p-8 lg:p-10 rounded-sm 
              shadow-2xl relative overflow-hidden group hover-lift
            ">
              {/* Animated decorative corner */}
              <div className="
                absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 
                bg-brand-accent opacity-10 rounded-bl-full 
                transition-transform duration-700 group-hover:scale-150
              "></div>
              
              <h3 className="
                text-xl md:text-2xl font-black text-brand-accent 
                mb-4 lg:mb-6 uppercase tracking-wider flex items-center 
                relative z-10 break-words
              ">
                Health, Safety, & Environment
              </h3>
              {/* FIX APPLIED HERE: text-left on mobile, lg:text-justify on desktop */}
              <p className="
                text-gray-300 mb-6 lg:mb-8 font-light text-base lg:text-lg 
                leading-relaxed relative z-10 text-left lg:text-justify break-words
              ">
                Our operations are guided by rigorous safety protocols 
                and environmental responsibility. We uphold a culture of 
                <span className="text-white font-bold uppercase mx-1">
                  zero harm
                </span>, proactive risk management, and regulatory compliance.
              </p>
              
              <div className="
                grid grid-cols-1 md:grid-cols-2 gap-y-4 lg:gap-y-6 
                gap-x-6 lg:gap-x-8 relative z-10
              ">
                {[
                  "ISO 14001 Certified System",
                  "1.6M+ Zero-Incident Man-Hours",
                  "Substance & Weapon-Free Zones",
                  "Regular Audits & Drills"
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-3 lg:gap-4">
                    <div className="h-1.5 w-1.5 lg:h-2 lg:w-2 bg-brand-accent rounded-full shrink-0"></div>
                    <span className="
                      text-xs lg:text-sm font-bold uppercase 
                      tracking-widest text-gray-200 leading-snug break-words
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