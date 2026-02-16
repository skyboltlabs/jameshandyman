
import React from 'react';
import { Service } from '../types';
import { Page } from '../App';

interface ServicesProps {
  onNavigate: (page: Page, id?: string) => void;
}

const services: Service[] = [
  {
    id: 'renovations',
    title: 'Renovations',
    description: 'Transform your living spaces with expert remodeling and addition projects.',
    subServices: ['Kitchen renovations', 'Bathroom remodeling', 'Room additions', 'Full home makeovers'],
    image: 'https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=2070&auto=format&fit=crop',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
    )
  },
  {
    id: 'carpentry',
    title: 'Carpentry',
    description: 'Precision woodwork including custom cabinetry and built-in installations.',
    subServices: ['Custom cabinets', 'Shelving installation', 'Door & Window frames', 'Deck construction'],
    image: 'https://images.unsplash.com/photo-1626081062126-d3b192c1fcb0?q=80&w=2069&auto=format&fit=crop',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
    )
  },
  {
    id: 'painting',
    title: 'Painting',
    description: 'Top-tier interior and exterior painting to refresh your home\'s aesthetic.',
    subServices: ['Interior painting', 'Exterior painting', 'Wall preparation', 'Color consultation'],
    image: 'https://images.unsplash.com/photo-1652829069862-87874e119527?q=80&w=2070&auto=format&fit=crop',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
    )
  },
  {
    id: 'plumbing',
    title: 'Plumbing',
    description: 'Expert leak repairs, fixture installations, and system maintenance.',
    subServices: ['Leak repairs', 'Pipe installation', 'Fixture replacement', 'Drain cleaning'],
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2127&auto=format&fit=crop',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
    )
  },
  {
    id: 'waterproofing',
    title: 'Waterproofing',
    description: 'Long-lasting solutions to protect your property from the elements.',
    subServices: ['Roof waterproofing', 'Basement sealing', 'Wall treatments', 'Preventive maintenance'],
    image: 'https://images.unsplash.com/photo-1594479323887-2fc5520eaf38?q=80&w=2070&auto=format&fit=crop',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    )
  },
];

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Our Expertise</h2>
        <h3 className="text-4xl md:text-5xl font-bold font-outfit text-slate-900 mb-4">Professional Handyman Services</h3>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          We offer a comprehensive range of home improvement and repair services to keep your property in perfect condition.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div 
            key={service.id} 
            onClick={() => onNavigate('service-detail', service.id)}
            className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col"
          >
            <div className="h-56 relative overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white p-2.5 rounded-xl shadow-lg">
                {service.icon}
              </div>
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <h4 className="text-2xl font-bold font-outfit text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-8">
                {service.subServices.map((sub, idx) => (
                  <li key={idx} className="flex items-center text-slate-700 font-medium text-sm">
                    <svg className="h-4 w-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {sub}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex items-center text-blue-600 font-bold group-hover:translate-x-1 transition-transform">
                Learn More
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}

        {/* Custom Service Card */}
        <div className="bg-blue-600 rounded-2xl p-8 text-white flex flex-col justify-center items-center text-center shadow-xl shadow-blue-500/20">
          <div className="bg-white/20 p-4 rounded-full mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h4 className="text-2xl font-bold font-outfit mb-4">Need Something Else?</h4>
          <p className="text-blue-100 mb-8">If you have a specific project not listed here, get in touch! We handle almost all home repairs.</p>
          <a href="#contact" className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg">
            Ask for Custom Work
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
