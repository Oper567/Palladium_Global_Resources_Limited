import React from 'react';

const ProjectGallery = () => {
  // Carefully selected high-resolution images matching 
  // the PDF's architectural portfolio
  const photos = [
    {
      url: 'Aca.png',
      title: 'Academic Campus Overview'
    },
    {
      url: 'Academy.png',
      title: 'Modern Multi-Story Complex'
    },
    {
      url: 'Circular.png',
      title: 'Circular Institutional Building'
    },
    {
      url: 'infras.png',
      title: 'Theater & Auditorium Structure'
    },
    {
      url: 'last.png',
      title: 'Infrastructural Development'
    },
    {
      url: 'kk.png',
      title: 'Strategic Site Construction'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-brand-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header - Mobile Optimized Spacing */}
        <div className="flex flex-col items-center text-center mb-12 lg:mb-20 w-full">
          <h2 className="
            text-3xl lg:text-4xl font-black text-brand-primary 
            uppercase tracking-[0.1em] mb-4 break-words
          ">
            Project Photos
          </h2>
          <div className="
            w-16 lg:w-20 h-1.5 bg-brand-accent mb-4 lg:mb-6 rounded-full
          "></div>
          {/* Added break-words to ensure perfect mobile wrap */}
          <p className="
            text-gray-600 max-w-2xl font-medium tracking-wide 
            text-sm lg:text-base break-words
          ">
            A visual showcase of our commitment to infrastructure 
            development and engineering excellence across Nigeria.
          </p>
        </div>

        {/* Project Grid Layout - Fluid Responsive Heights & Gaps */}
        <div className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          gap-4 md:gap-6 lg:gap-8
        ">
          {photos.map((project, index) => (
            <div 
              key={index} 
              className="
                group relative h-72 lg:h-[350px] overflow-hidden 
                bg-brand-primary shadow-md hover:shadow-xl 
                rounded-sm transition-shadow duration-300
              "
            >
              {/* Main Project Image */}
              <img 
                src={project.url} 
                alt={project.title} 
                className="
                  w-full h-full object-cover transition-transform 
                  duration-[1500ms] group-hover:scale-110 
                  group-hover:opacity-40
                "
              />
              
              {/* Dark Olive Green Hover Overlay */}
              <div className="
                absolute inset-0 flex flex-col items-center 
                justify-center p-6 lg:p-8 opacity-0 group-hover:opacity-100 
                transition-opacity duration-500 bg-brand-primary/80
              ">
                <div className="
                  w-10 lg:w-12 h-1 bg-brand-accent mb-3 lg:mb-4 
                  transform -translate-y-4 group-hover:translate-y-0 
                  transition-transform duration-500 delay-100
                "></div>
                
                {/* Added break-words to prevent long titles from spilling out */}
                <h3 className="
                  text-white text-base lg:text-lg font-bold uppercase 
                  tracking-widest text-center mb-2 lg:mb-3 transform 
                  -translate-y-4 group-hover:translate-y-0 
                  transition-transform duration-500 delay-200 break-words
                ">
                  {project.title}
                </h3>
                
                <span className="
                  text-brand-accent text-[10px] lg:text-xs font-black 
                  uppercase tracking-[0.2em] border-b border-brand-accent 
                  pb-1 transform -translate-y-4 group-hover:translate-y-0 
                  transition-transform duration-500 delay-300
                ">
                  View Details
                </span>
              </div>
              
              {/* Subtle Safety Yellow Corner Detail */}
              <div className="
                absolute bottom-4 right-4 w-3 h-3 border-r-2 
                border-b-2 border-brand-accent opacity-0 
                group-hover:opacity-100 transition-opacity duration-500
              "></div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ProjectGallery;