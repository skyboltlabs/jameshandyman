
import React from 'react';

const projects = [
  {
    title: "Modern Kitchen Remodel",
    category: "Renovation",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
    alt: "James Handyman modern kitchen renovation project in Camps Bay, Cape Town",
    location: "Camps Bay"
  },
  {
    title: "Custom Oak Decking",
    category: "Carpentry",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=800&auto=format&fit=crop", 
    alt: "Professional oak deck construction by carpenter James Mutema in Constantia",
    location: "Constantia"
  },
  {
    title: "Exterior Protective Coating",
    category: "Painting",
    image: "https://images.unsplash.com/photo-1562664377-709f2c337eb2?q=80&w=800&auto=format&fit=crop",
    alt: "Exterior house painting and weatherproofing in Sea Point, Cape Town",
    location: "Sea Point"
  },
  {
    title: "Luxury Bathroom Suite",
    category: "Renovation",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop",
    alt: "Luxury bathroom renovation and plumbing overhaul in Green Point",
    location: "Green Point"
  },
  {
    title: "Built-in Wardrobe System",
    category: "Carpentry",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop",
    alt: "Custom built-in wardrobe and cabinetry installation in Gardens, Cape Town",
    location: "Gardens"
  },
  {
    title: "Roof Waterproofing Project",
    category: "Waterproofing",
    image: "https://images.unsplash.com/photo-1594479323887-2fc5520eaf38?q=80&w=800&auto=format&fit=crop",
    alt: "Professional roof waterproofing and leak prevention in Hout Bay",
    location: "Hout Bay"
  }
];

const Gallery: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Our Work Portfolio</h2>
        <h3 className="text-4xl md:text-5xl font-bold font-outfit text-slate-900 mb-4">Recent Cape Town Projects</h3>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          Explore our quality craftsmanship and professional home repairs across the Cape Peninsula.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <article 
            key={idx} 
            className="group relative overflow-hidden rounded-3xl aspect-square shadow-lg"
          >
            <img 
              src={project.image} 
              alt={project.alt} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <span className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-1">{project.category}</span>
              <h4 className="text-white text-2xl font-bold font-outfit mb-1">{project.title}</h4>
              <div className="flex items-center text-slate-300 text-sm">
                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {project.location}, Cape Town
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button 
          onClick={() => {
             const el = document.getElementById('contact-home');
             if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center text-blue-600 font-bold text-lg hover:text-blue-700 transition-colors group"
        >
          Discuss Your Project
          <svg className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Gallery;
