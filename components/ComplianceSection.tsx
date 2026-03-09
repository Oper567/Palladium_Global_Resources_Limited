import React from 'react';

const ComplianceSection = () => {
  const certificates = [
    { 
      name: 'FIRS', 
      desc: 'Federal Inland Revenue Service Clearance',
      image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&q=80'
    },
    { 
      name: 'PENCOM', 
      desc: 'National Pension Commission Clearance',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80'
    },
    { 
      name: 'ITF', 
      desc: 'Industrial Training Fund Compliance',
      image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600&q=80'
    },
    { 
      name: 'NSITF', 
      desc: 'Nigeria Social Insurance Trust Fund',
      image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=600&q=80'
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-brand-light border-t border-gray-200">
      <div className="
        max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center
      ">
        
        {/* Header Section - Adaptive margins and text sizing */}
        <div className="flex flex-col items-center mb-12 lg:mb-20 w-full">
          <h2 className="
            text-3xl lg:text-4xl font-black text-brand-primary 
            uppercase tracking-tight text-center
          ">
            Compliance Certificates
          </h2>
          <div className="
            mt-4 lg:mt-6 w-16 lg:w-20 h-1.5 bg-brand-accent rounded-full
          "></div>
          <p className="
            mt-4 lg:mt-6 text-gray-600 font-medium tracking-wide 
            text-center max-w-2xl text-sm lg:text-base
          ">
            Fully licensed and compliant with all federal regulatory bodies, 
            ensuring transparency, accountability, and operational excellence 
            across all our divisions.
          </p>
        </div>

        {/* Certificates Grid Layout - 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
          gap-6 lg:gap-8 w-full
        ">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="
                flex flex-col items-center justify-start text-center 
                p-6 lg:p-8 border border-gray-200 bg-white rounded-sm 
                shadow-md hover:shadow-2xl hover:border-brand-accent 
                transition-all duration-300 group relative overflow-hidden
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
                w-full h-40 lg:h-48 mb-6 overflow-hidden rounded-sm border-2 
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
                text-lg lg:text-xl font-black text-brand-primary mb-2 lg:mb-3 
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