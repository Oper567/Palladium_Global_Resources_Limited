import React from 'react';

const servicesData = [
  {
    title: 'Civil Engineering',
    tagline: 'Roads, Drainages and Bridges & Housing Development',
    description: `At Palladium Global Resources Limited, our Engineering 
      division is at the heart of our mission to industrialize and 
      transform Nigeria. We specialize in delivering durable, 
      high-quality infrastructure that meets today's development 
      demands and tomorrow's growth ambitions.`,
    offerings: [
      'Road Construction (Urban & Rural)',
      'Drainage & Erosion Control Systems',
      'Earthworks & Site Preparation',
      'Structural, Building & Foundation Works',
      'Housing Development & Estate Construction',
      'Design and Engineering Consultancy'
    ],
    image: 'https://images.unsplash.com/photo-1541888086225-f6740f9e8af5?w=800&q=80'
  },
  {
    title: 'Downstream Energy Services',
    tagline: 'Fuel Storage & Supply Solutions',
    description: `Our Downstream Energy Services division ensures 
      uninterrupted access to diesel and other petroleum products 
      for corporate clients, SMEs, and individuals. We provide a 
      seamless, dependable, and cost-effective fuel distribution 
      network across Nigeria.`,
    offerings: [
      'Diesel Supply (AGO): Bulk and retail supply',
      'Fuel Storage Solutions & On-Site Delivery',
      'Emergency Supply & Nationwide Coverage',
      'Metered Deliveries',
      'Strict HSE Safety & Compliance'
    ],
    image: 'https://images.unsplash.com/photo-1587293852726-694762c95454?w=800&q=80'
  },
  {
    title: 'Energy and Power Service',
    tagline: 'Clean, Sustainable, and Affordable Power',
    description: `Dedicated to solving one of Nigeria's biggest 
      challenges: reliable electricity. We design, install, and 
      manage clean, sustainable, and affordable power systems that 
      reduce dependence on erratic grid supply and high-cost fuel 
      generators.`,
    offerings: [
      'Energy Audits & Consulting',
      'Solar & Photovoltaic Systems Installations',
      'Hybrid Power Systems',
      'Battery Storage Solutions',
      'Operations & Maintenance (O&M)'
    ],
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80'
  },
  {
    title: 'ICT Management',
    tagline: 'Digital Solutions & Infrastructure',
    description: `Our ICT Management division delivers cutting-edge 
      technology solutions that empower organizations to work smarter, 
      grow faster, and achieve more. Our solutions are built on 
      reliability, scalability, and security.`,
    offerings: [
      'Software Development & Digital Solutions',
      'TestCentre Platform for Recruitment/Exams',
      'Web, Mobile App & Enterprise Applications',
      'E-Learning Platforms & Virtual Classrooms',
      'ICT Infrastructure & Managed Services'
    ],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80'
  },
  {
    title: 'Supply Chain Management',
    tagline: 'End-to-End Logistics Solutions', 
    description: `Our Supply Chain Management division provides 
      end-to-end logistics solutions that ensure the smooth flow 
      of goods, materials, and services across Nigeria and beyond. 
      Whether moving raw materials for industries, delivering 
      finished goods to retailers, or handling courier shipments 
      for individuals, we are your trusted logistics partner. 
     `,
    offerings: [
      'Warehousing & Inventory Management',
      'Fleet-Based Distribution',
      'Bike Delivery Service (Last-Mile)',
      'Local & International Courier Services',
      'Retail & Distribution Support'
    ],
    image: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?w=800&q=80'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="
            text-sm font-bold text-brand-accent tracking-[0.3em] 
            uppercase mb-4
          ">
            Our Expertise
          </h2>
          <h3 className="
            text-4xl md:text-6xl font-black text-brand-primary 
            uppercase tracking-tight
          ">
            Our Offerings
          </h3>
          <div className="
            mt-8 w-24 h-1.5 bg-brand-accent mx-auto rounded-full 
            shadow-[0_4px_10px_0_rgba(245,158,11,0.2)]
          "></div>
        </div>

        {/* Services Flexbox List */}
        <div className="flex flex-col gap-32">
          {servicesData.map((service, index) => {
            const isImageLeft = index % 2 === 0;
            return (
              <div 
                key={index} 
                className={`
                  flex flex-col lg:flex-row items-center 
                  gap-12 lg:gap-24 
                  ${isImageLeft ? '' : 'lg:flex-row-reverse'}
                `}
              >
                
                {/* Image Side: Flex-1 */}
                <div className="flex-1 w-full relative group">
                  {/* Decorative Border Frame */}
                  <div className={`
                    absolute inset-0 border-2 border-brand-accent 
                    rounded-sm translate-x-4 translate-y-4 -z-10 
                    transition-transform duration-500 
                    group-hover:translate-x-6 group-hover:translate-y-6 
                    ${isImageLeft ? '' : '-translate-x-4'}
                  `}></div>
                  
                  <div className="
                    relative h-[450px] w-full overflow-hidden 
                    shadow-2xl bg-brand-primary
                  ">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="
                        w-full h-full object-cover transition-transform 
                        duration-[2000ms] group-hover:scale-110 opacity-90
                      " 
                    />
                    <div className="
                      absolute inset-0 bg-brand-primary/10 
                      group-hover:bg-transparent transition-colors 
                      duration-500
                    "></div>
                  </div>
                </div>

                {/* Text Side: Flex-1 */}
                <div className="flex-1 w-full flex flex-col justify-center">
                  <h3 className="
                    text-3xl md:text-4xl font-black text-brand-primary 
                    uppercase tracking-tighter mb-2
                  ">
                    {service.title}
                  </h3>
                  <h4 className="
                    text-lg font-bold text-brand-accent mb-8 
                    uppercase tracking-widest border-b-2 
                    border-brand-light pb-2 inline-block self-start
                  ">
                    {service.tagline}
                  </h4>
                  <p className="
                    text-gray-600 mb-10 text-lg leading-relaxed 
                    font-light text-justify
                  ">
                    {service.description}
                  </p>
                  
                  {/* Offerings Grid */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
                    {service.offerings.map((item, idx) => (
                      <li key={idx} className="flex items-start group">
                        <div className="
                          h-6 w-6 bg-brand-accent/10 rounded flex 
                          items-center justify-center mr-3 mt-0.5 
                          group-hover:bg-brand-accent transition-colors
                        ">
                          <svg 
                            className="
                              h-4 w-4 text-brand-accent 
                              group-hover:text-white transition-colors
                            " 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth="3" 
                              d="M5 13l4 4L19 7" 
                            />
                          </svg>
                        </div>
                        <span className="
                          text-brand-primary font-bold text-sm 
                          tracking-wide group-hover:text-brand-accent 
                          transition-colors
                        ">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;