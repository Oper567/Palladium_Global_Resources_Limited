import React from 'react';

const Footer = () => {
  return (
    <footer 
      id="contact" 
      className="
        bg-brand-primary text-gray-300 pt-20 pb-10 border-t-4 
        border-brand-accent
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Flexbox Layout */}
        <div className="
          flex flex-col lg:flex-row justify-between gap-12 
          lg:gap-8 mb-16
        ">
          
          {/* Brand Info Flex Column */}
          <div className="flex flex-col w-full lg:w-1/4">
            <h2 className="
              text-2xl font-black text-white uppercase 
              tracking-tighter mb-4
            ">
              Palladium Global
            </h2>
            <h3 className="
              text-xs font-bold text-gray-400 tracking-[0.2em] 
              uppercase mb-6
            ">
              Resources Limited
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 font-light">
              Reshaping the nation's economic landscape through 
              strategic investments in industrialization, innovation, 
              and infrastructure.
            </p>
            <div className="
              inline-block bg-white/10 px-4 py-2 border-l-2 
              border-brand-accent self-start shadow-inner
            ">
               <span className="text-brand-accent font-bold tracking-widest">
                 RC 1925948
               </span>
            </div>
          </div>

          {/* Quick Links Flex Column */}
          <div className="flex flex-col w-full lg:w-1/6">
            <h3 className="
              text-lg font-black text-white uppercase tracking-wider 
              mb-6 border-b border-white/20 pb-2 inline-block self-start
            ">
              Company
            </h3>
            <ul className="flex flex-col space-y-4 text-sm font-medium">
              <li>
                <a href="#about" className="
                  hover:text-brand-accent transition-colors flex items-center group
                ">
                  <span className="
                    text-brand-accent mr-2 transform group-hover:translate-x-1 
                    transition-transform
                  ">›</span> 
                  About Us
                </a>
              </li>
              <li>
                <a href="#strategy" className="
                  hover:text-brand-accent transition-colors flex items-center group
                ">
                  <span className="
                    text-brand-accent mr-2 transform group-hover:translate-x-1 
                    transition-transform
                  ">›</span> 
                  Our Strategy
                </a>
              </li>
              <li>
                <a href="#services" className="
                  hover:text-brand-accent transition-colors flex items-center group
                ">
                  <span className="
                    text-brand-accent mr-2 transform group-hover:translate-x-1 
                    transition-transform
                  ">›</span> 
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Flex Column */}
          <div className="flex flex-col w-full lg:w-1/4">
            <h3 className="
              text-lg font-black text-white uppercase tracking-wider 
              mb-6 border-b border-white/20 pb-2 inline-block self-start
            ">
              Reach Out
            </h3>
            <ul className="flex flex-col space-y-5 text-sm">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-brand-accent mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="leading-relaxed">
                  +234-806-660-5477 <br/> 
                  +234-807-176-4059
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-brand-accent mr-3 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href="mailto:palladiumglobalresources@gmail.com" className="
                  hover:text-brand-accent transition-colors break-all leading-relaxed
                ">
                  palladiumglobalresources<br/>@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Office Locations Flex Column */}
          <div className="flex flex-col w-full lg:w-1/3">
            <h3 className="
              text-lg font-black text-white uppercase tracking-wider 
              mb-6 border-b border-white/20 pb-2 inline-block self-start
            ">
              Our Locations
            </h3>
            <ul className="flex flex-col space-y-4 text-sm">
              <li className="
                flex items-start bg-white/5 p-4 rounded-sm border 
                border-white/10 shadow-inner
              ">
                <div className="w-2 h-2 mt-1.5 bg-brand-accent rounded-full mr-3 shrink-0 shadow-[0_0_8px_rgba(250,204,21,0.8)]"></div>
                <div>
                  <span className="
                    font-black text-brand-accent block uppercase mb-1 
                    tracking-widest text-xs
                  ">
                    HEAD OFFICE:
                  </span>
                  <span className="text-gray-300 font-light leading-relaxed">
                    Plot 1267, Suite D2, Jima Plaza Garki Area 11, 
                    Abuja FCT, NIGERIA.
                  </span>
                </div>
              </li>
              <li className="flex items-start px-2 py-1">
                <div className="w-1.5 h-1.5 mt-1.5 bg-white/50 rounded-full mr-3.5 shrink-0"></div>
                <div>
                  <span className="
                    font-bold text-gray-400 block uppercase mb-1 
                    tracking-wider text-xs
                  ">
                    ASABA OFFICE:
                  </span>
                  <span className="text-gray-400 font-light leading-relaxed">
                    77, Amb. Ralph Uwechue Road, GRA, Asaba, 
                    DELTA STATE, NIGERIA.
                  </span>
                </div>
              </li>
              <li className="flex items-start px-2 py-1">
                <div className="w-1.5 h-1.5 mt-1.5 bg-white/50 rounded-full mr-3.5 shrink-0"></div>
                <div>
                  <span className="
                    font-bold text-gray-400 block uppercase mb-1 
                    tracking-wider text-xs
                  ">
                    MPAPE OFFICE:
                  </span>
                  <span className="text-gray-400 font-light leading-relaxed">
                    No 8, BergerQuarry Road Mpape, ABUJA FCT, 
                    NIGERIA.
                  </span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar Flex Layout */}
        <div className="
          pt-8 border-t border-white/10 flex flex-col md:flex-row 
          justify-between items-center text-xs text-gray-500 
          tracking-wider
        ">
          <p>&copy; {new Date().getFullYear()} Palladium Global Resources Limited. All rights reserved.</p>
          <p className="mt-4 md:mt-0 font-bold uppercase text-gray-400 flex items-center">
            Powered by <span className="text-brand-accent ml-1">Innovation</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;