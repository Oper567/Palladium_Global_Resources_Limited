import React from 'react';

const ProjectGallery = () => {
  // Carefully selected high-resolution images matching 
  // the PDF's architectural portfolio
  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1555633514-abcee6ad93e1?w=800&q=80',
      title: 'Academic Campus Overview'
    },
    {
      url: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=80',
      title: 'Modern Multi-Story Complex'
    },
    {
      url: 'https://images.unsplash.com/photo-1518005020251-58296b8a879d?w=800&q=80',
      title: 'Circular Institutional Building'
    },
    {
      url: 'https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?w=800&q=80',
      title: 'Theater & Auditorium Structure'
    },
    {
      url: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=800&q=80',
      title: 'Infrastructural Development'
    },
    {
      url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
      title: 'Strategic Site Construction'
    }
  ];

  return (
    <section className="py-24 bg-brand-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header - Bold and authoritative Olive Green */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="
            text-4xl md:text-5xl font-black text-brand-primary 
            uppercase tracking-[0.1em] mb-4
          ">
            Project Photos
          </h2>
          <div className="w-20 h-1.5 bg-brand-accent mb-6"></div>
          <p className="
            text-gray-600 max-w-2xl font-medium tracking-wide
          ">
            A visual showcase of our commitment to infrastructure 
            development and engineering excellence across Nigeria.
          </p>
        </div>

        {/* Project Grid Layout */}
        <div className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6
        ">
          {photos.map((project, index) => (
            <div 
              key={index} 
              className="
                group relative h-[350px] overflow-hidden 
                bg-brand-primary shadow-lg rounded-sm
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
                justify-center p-8 opacity-0 group-hover:opacity-100 
                transition-opacity duration-500 bg-brand-primary/80
              ">
                <div className="
                  w-12 h-1 bg-brand-accent mb-4 transform -translate-y-4 
                  group-hover:translate-y-0 transition-transform 
                  duration-500 delay-100
                "></div>
                <h3 className="
                  text-white text-lg font-bold uppercase tracking-widest 
                  text-center mb-3 transform -translate-y-4 
                  group-hover:translate-y-0 transition-transform 
                  duration-500 delay-200
                ">
                  {project.title}
                </h3>
                <span className="
                  text-brand-accent text-xs font-black uppercase 
                  tracking-[0.2em] border-b border-brand-accent pb-1 
                  transform -translate-y-4 group-hover:translate-y-0 
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