
import React from 'react';
import { Page } from '../App';
import Gallery from '../components/Gallery';

interface PortfolioPageProps {
  onNavigate: (page: Page) => void;
}

const PortfolioPage: React.FC<PortfolioPageProps> = () => {
  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="bg-blue-600 py-24 mb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-7xl font-black font-outfit text-white mb-6">Our Work</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Explore our recently completed projects across Cape Town. We take pride in every detail.
          </p>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="h-full w-full" fill="none" viewBox="0 0 400 400">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <Gallery />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 py-20 bg-gray-50 rounded-[3rem] text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Start your own project today</h2>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">Join hundreds of satisfied homeowners who trust James for their home improvements.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:0780626566" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold">Call 078 062 6566</a>
          <a href="mailto:jamesmutema21@mail.com" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold">Email James</a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
