import React from 'react';

const ComplianceSection = () => {
  const certificates = [
    { 
      name: 'FIRS', 
      desc: 'Federal Inland Revenue Service Clearance',
      // Placeholder: Swap with your actual FIRS certificate image path
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&q=80'
    },
    { 
      name: 'PENCOM', 
      desc: 'National Pension Commission Clearance',
      // Placeholder: Swap with your actual PENCOM certificate image path
      image: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?w=500&q=80'
    },
    { 
      name: 'ITF', 
      desc: 'Industrial Training Fund Compliance',
      // Placeholder: Swap with your actual ITF certificate image path
      image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&q=80'
    },
    { 
      name: 'NSITF', 
      desc: 'Nigeria Social Insurance Trust Fund',
      // Placeholder: Swap with your actual NSITF certificate image path
      image: 'https://images.unsplash.com/photo-1553835973-dec43bfddbeb?w=500&q=80'
    },
  ];

  return (
    <section className="py-24 bg-brand-light border-t border-gray-200">
      <div className="
        max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center
      ">
        
        {/* Header Flexbox */}
        <div className="flex flex-col items-center mb-20 w-full">
          <h2 className="
            text-3xl md:text-4xl font-black text-brand-primary 
            uppercase tracking-tight text-center
          ">
            Compliance Certificates
          </h2>
          <div className="mt-6 w-20 h-1.5 bg-brand-accent rounded-full"></div>
          <p className="
            mt-6 text-gray-600 font-medium tracking-wide 
            text-center max-w-2xl
          ">
            Fully licensed and compliant with all federal regulatory bodies, 
            ensuring transparency, accountability, and operational excellence 
            across all our divisions.
          </p>
        </div>

        {/* Certificates Flexbox Layout */}
        <div className="
          flex flex-col sm:flex-row flex-wrap justify-center 
          gap-8 w-full
        ">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="
                flex flex-col items-center justify-start text-center 
                p-8 border border-gray-200 bg-white rounded-sm 
                shadow-md hover:shadow-2xl hover:border-brand-accent 
                transition-all duration-300 group flex-1 
                min-w-[260px] max-w-[300px] relative overflow-hidden
              "
            >
              {/* Safety Yellow Accent Bar on Hover */}
              <div className="
                absolute top-0 left-0 w-full h-1.5 bg-brand-accent 
                transform -translate-y-full group-hover:translate-y-0 
                transition-transform duration-300
              "></div>

              {/* Real Registration Image Container */}
              <div className="
                w-full h-48 mb-6 overflow-hidden rounded-sm border-2 
                border-gray-100 shadow-inner group-hover:border-brand-accent/50 
                transition-colors duration-300 bg-gray-50
              ">
                <img 
                  src={cert.image} 
                  alt={`${cert.name} Certificate`}
                  className="
                    w-full h-full object-cover transition-transform 
                    duration-500 group-hover:scale-110 opacity-90 
                    mix-blend-multiply
                  "
                />
              </div>
              
              <h3 className="
                text-xl font-black text-brand-primary mb-3 
                tracking-widest uppercase group-hover:text-brand-accent 
                transition-colors duration-300
              ">
                {cert.name}
              </h3>
              <p className="
                text-xs text-gray-500 font-bold uppercase 
                tracking-wider leading-relaxed flex-grow
              ">
                {cert.desc}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ComplianceSection;