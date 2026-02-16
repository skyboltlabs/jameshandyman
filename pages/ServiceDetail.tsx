
import React from 'react';
import { Page } from '../App';

interface ServiceDetailProps {
  serviceId: string;
  onNavigate: (page: Page, id?: string) => void;
}

const serviceContent: Record<string, any> = {
  renovations: {
    title: "Complete Home Renovations",
    description: "Transform your living space with our premium renovation services in Cape Town. We handle everything from structural changes to fine finishing.",
    image: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Full kitchen makeovers with modern finishes",
      "Luxury bathroom remodeling and spa conversions",
      "Structural room additions and extensions",
      "Open-plan living space transformations",
      "Basement and attic conversions"
    ],
    details: "James Handyman specializes in high-end renovations that add significant value to your property. Our process involves a detailed site assessment, collaborative planning, and execution with the highest quality materials available."
  },
  carpentry: {
    title: "Professional Carpentry & Custom Woodwork",
    description: "Bespoke carpentry solutions for a more organized and elegant home.",
    image: "https://images.unsplash.com/photo-1626081062126-d3b192c1fcb0?q=80&w=2069&auto=format&fit=crop",
    features: [
      "Custom kitchen and bedroom cabinetry",
      "Floating shelves and built-in library systems",
      "High-end timber decking and pergolas",
      "Custom door and window frame repairs",
      "Detailed molding and trim work"
    ],
    details: "Woodwork is an art, and we treat it as such. Whether you're looking for functional storage or aesthetic upgrades, our carpentry services are tailored to fit your specific space perfectly."
  },
  painting: {
    title: "Expert Painting & Wall Treatments",
    description: "Premium interior and exterior painting services that protect and beautify your home.",
    image: "https://images.unsplash.com/photo-1652829069862-87874e119527?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Premium interior paint application",
      "Weather-resistant exterior coatings",
      "Advanced wall preparation and crack repair",
      "Professional color consultation services",
      "Specialized textured wall finishes"
    ],
    details: "A great paint job is 90% preparation. We ensure your walls are perfectly smooth and primed before applying high-grade paints that stand up to the Cape Town sun and coastal air."
  },
  plumbing: {
    title: "Reliable Residential Plumbing",
    description: "Fast, efficient, and professional plumbing repairs and installations.",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2127&auto=format&fit=crop",
    features: [
      "Leak detection and urgent pipe repairs",
      "New fixture and appliance installations",
      "Advanced drain cleaning and unblocking",
      "Geyser maintenance and replacement",
      "Full bathroom plumbing overhauls"
    ],
    details: "Plumbing issues can cause massive damage if not handled correctly. James provides reliable solutions that focus on long-term prevention rather than just quick fixes."
  },
  waterproofing: {
    title: "Advanced Waterproofing Solutions",
    description: "Protect your most valuable asset from Cape Town's intense winter rains.",
    image: "https://images.unsplash.com/photo-1594479323887-2fc5520eaf38?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Flat roof and concrete slab waterproofing",
      "Rising damp and basement sealing",
      "Exterior wall membrane treatments",
      "Gutter maintenance and drainage solutions",
      "Annual preventive inspections"
    ],
    details: "Water damage is the leading cause of property devaluation. Our multi-layer waterproofing systems are designed to withstand the harshest coastal conditions, ensuring your home stays dry and mold-free."
  }
};

const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceId, onNavigate }) => {
  const content = serviceContent[serviceId] || serviceContent.renovations;

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero Header */}
      <div className="relative h-[400px] overflow-hidden mb-16">
        <img src={content.image} alt={content.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] flex items-center justify-center">
          <div className="max-w-4xl px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-black font-outfit text-white mb-4">{content.title}</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">{content.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/3">
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to All Services
            </button>

            <h2 className="text-3xl font-bold font-outfit text-slate-900 mb-6">Service Overview</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              {content.details}
            </p>

            <h3 className="text-2xl font-bold font-outfit text-slate-900 mb-6">What We Offer</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {content.features.map((feature: string, idx: number) => (
                <div key={idx} className="flex items-start p-4 bg-gray-50 rounded-xl border border-slate-100">
                  <div className="bg-blue-600/10 p-2 rounded-lg mr-4 text-blue-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium text-slate-800">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="sticky top-28 bg-slate-900 rounded-3xl p-8 text-white shadow-2xl">
              <h4 className="text-2xl font-bold font-outfit mb-4">Request a Site Visit</h4>
              <p className="text-slate-400 mb-8">Ready to get started? Contact James for a professional assessment and no-obligation quote.</p>
              
              <div className="space-y-6 mb-10">
                <a href="tel:0780626566" className="flex items-center group">
                  <div className="bg-white/10 p-3 rounded-xl mr-4 group-hover:bg-blue-600 transition-colors">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold">Call Now</p>
                    <p className="font-bold">078 062 6566</p>
                  </div>
                </a>
                
                <a href="mailto:jamesmutema21@mail.com" className="flex items-center group">
                  <div className="bg-white/10 p-3 rounded-xl mr-4 group-hover:bg-blue-600 transition-colors">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold">Email</p>
                    <p className="font-bold">jamesmutema21@mail.com</p>
                  </div>
                </a>
              </div>

              <button 
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-xl shadow-blue-600/20 active:scale-95"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
