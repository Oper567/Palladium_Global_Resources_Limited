import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* About Us Split Section with Industrial Image */}
        <div className="
          flex flex-col lg:flex-row gap-12 lg:gap-24 
          items-center mb-20 lg:mb-32
        ">
          
          {/* Text Side - Adaptive text sizing and responsive alignment */}
          <div className="
            w-full lg:w-1/2 flex flex-col gap-6 text-base lg:text-lg 
            text-gray-600 font-light leading-relaxed text-left lg:text-justify
          ">
            <div className="border-l-8 border-brand-accent pl-4 lg:pl-5 mb-2 lg:mb-4">
              <h2 className="
                text-3xl md:text-4xl lg:text-5xl font-black 
                text-brand-primary uppercase tracking-tight break-words
              ">
                About Us
              </h2>
            </div>
            <p className="break-words">
              Palladium Global Resources Limited is a proudly Nigerian 
              conglomerate committed to reshaping the nation's economic 
              landscape through strategic investments in industrialization, 
              innovation, and infrastructure development. With deep roots 
              in key sectors including engineering, agriculture, 
              logistics, and Energy services.
            </p>
            <p className="break-words">
              Our vision is to foster a self-reliant Nigeria powered 
              by local expertise and sustainable practices.
            </p>
            <p className="font-medium text-gray-700 break-words">
              Founded on the principles of quality, integrity, and 
              national development, we integrate technology, talent, 
              and robust systems to offer end-to-end solutions that 
              accelerate productivity, empower communities, and 
              contribute to Nigeria's long-term economic independence.
            </p>
          </div>

          {/* Image Side - Responsive height and safe frame offset */}
          <div className="w-full lg:w-1/2 relative group mt-6 lg:mt-0">
            {/* Floating Frame - Tighter offset on mobile to prevent overflow */}
            <div className="
              absolute inset-0 border-4 border-brand-accent 
              translate-x-3 translate-y-3 lg:translate-x-5 lg:translate-y-5 
              -z-10 transition-transform duration-500 
              group-hover:translate-x-5 group-hover:translate-y-5 
              lg:group-hover:translate-x-7 lg:group-hover:translate-y-7
            "></div>
            
            <div className="
              relative h-72 sm:h-96 lg:h-[450px] w-full overflow-hidden 
              shadow-2xl bg-brand-primary
            ">
              <img 
                src="/About.png" 
                alt="Infrastructure and Engineering Development" 
                className="
                  w-full h-full object-cover transition-transform 
                  duration-[2000ms] group-hover:scale-110 opacity-90
                "
              />
            </div>
          </div>
        </div>

        {/* Vision and Mission - Stack on mobile, row on tablet/desktop */}
        <div className="flex flex-col md:flex-row gap-0 mb-20 lg:mb-32 shadow-2xl">
          
          <div className="
            flex-1 flex flex-col justify-center bg-brand-light 
            p-8 md:p-10 lg:p-16 border-t-8 border-brand-primary 
            transition-all duration-300
          ">
            <h3 className="
              text-2xl lg:text-3xl font-black text-brand-primary 
              mb-4 lg:mb-6 uppercase tracking-wider break-words
            ">
              Our Vision
            </h3>
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed font-medium break-words text-left">
              To be Nigeria's leading force in industrialization, 
              catalyzing robust infrastructure development and 
              local enterprise growth.
            </p>
          </div>

          <div className="
            flex-1 flex flex-col justify-center bg-brand-primary 
            text-white p-8 md:p-10 lg:p-16 border-t-8 border-brand-accent 
            transition-all duration-300
          ">
            <h3 className="
              text-2xl lg:text-3xl font-black text-brand-accent 
              mb-4 lg:mb-6 uppercase tracking-wider break-words
            ">
              Our Mission
            </h3>
            <p className="text-gray-300 text-base lg:text-lg leading-relaxed font-light break-words text-left">
              To deliver dependable, value-driven products and 
              services through innovative processes that support 
              Nigeria's journey toward self-reliance and 
              sustainable prosperity.
            </p>
          </div>
        </div>

        {/* Core Values Grid - 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="flex flex-col items-center">
          <h3 className="
            text-3xl lg:text-4xl font-black text-brand-primary 
            uppercase mb-12 lg:mb-16 tracking-tight text-center break-words
          ">
            Our Core Values
            <div className="w-16 lg:w-20 h-1.5 bg-brand-accent mx-auto mt-4 lg:mt-6"></div>
          </h3>
          
          <div className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
            gap-4 lg:gap-6 w-full
          ">
            {[
              { 
                title: 'Honesty', 
                desc: 'We uphold transparency and ethical business practices in all our engagements.' 
              },
              { 
                title: 'Dependability', 
                desc: 'Our clients rely on our consistent delivery of quality and excellence.' 
              },
              { 
                title: 'Innovation', 
                desc: 'We harness creativity and technology to offer forward-thinking solutions that endure.' 
              },
              { 
                title: 'Patriotism', 
                desc: 'We are proudly Nigerian, prioritizing local resources, talents, and development initiatives to uplift our economy.' 
              }
            ].map((value, idx) => (
              <div 
                key={idx} 
                className="
                  flex flex-col bg-gray-50 border border-gray-200 
                  p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all 
                  duration-300 group
                "
              >
                {/* Numeric branding block */}
                <div className="
                  w-10 h-10 lg:w-12 lg:h-12 bg-brand-primary 
                  text-brand-accent flex items-center justify-center 
                  font-black text-lg lg:text-xl mb-4 lg:mb-6 rounded-sm 
                  group-hover:bg-brand-accent group-hover:text-brand-primary 
                  transition-colors duration-300
                ">
                  0{idx + 1}
                </div>
                <h4 className="
                  text-lg lg:text-xl font-bold text-brand-primary 
                  mb-2 lg:mb-3 uppercase tracking-wide break-words
                ">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed break-words text-left">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutSection;