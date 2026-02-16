
import React from 'react';
import { Page } from '../App';
import Services from '../components/Services';

interface ServicesPageProps {
  onNavigate: (page: Page, id?: string) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Header section */}
      <div className="bg-slate-900 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black font-outfit text-white mb-6">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            From emergency repairs to luxury home renovations, James Handyman provides expert solutions for every corner of your home.
          </p>
        </div>
      </div>

      <Services onNavigate={onNavigate} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-6">Looking for a specialized repair?</h2>
              <p className="text-xl text-blue-100 mb-8">
                James Mutema brings over a decade of experience across multiple trades. If you have a unique problem, we likely have the solution.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Tiling & Grouting', 'Ceiling Repairs', 'Fixture Installation', 'Deck Maintenance', 'Gutter Cleaning', 'Blind Installation'].map(item => (
                  <div key={item} className="flex items-center space-x-3">
                    <svg className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/3">
              <button 
                onClick={() => onNavigate('contact')}
                className="w-full bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-colors shadow-2xl"
              >
                Get Custom Quote
              </button>
            </div>
          </div>
          {/* Decorative background circle */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
