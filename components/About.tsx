
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Using the real action shot of James for the About section */}
            <img 
              src="https://raw.githubusercontent.com/skyboltlabs/jameshandyman/refs/heads/main/pages/james-picture.jpg?q=80&w=2069&auto=format&fit=crop" 
              alt="James Mutema restoring woodwork" 
              className="w-full h-full object-cover aspect-[4/5] object-center"
            />
            {/* Added a subtle overlay to match the high-end site aesthetic */}
            <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
          </div>
          {/* Decorative stats card */}
          <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl hidden md:block max-w-xs border border-slate-100">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-blue-600 p-3 rounded-2xl">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h5 className="text-lg font-bold text-slate-900">Verified Pro</h5>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              "My commitment to quality workmanship and customer satisfaction sets me apart. I treat every home as if it were my own."
            </p>
            <p className="mt-4 font-bold text-slate-900">— James Mutema</p>
          </div>
        </div>

        <div className="lg:w-1/2">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">The Expert Behind The Work</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-outfit text-slate-900 mb-8">Meet James Mutema</h3>
          
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-10">
            <p>
              With years of experience in the handyman industry, James Mutema has built a reputation for delivering exceptional home improvement services across Cape Town.
            </p>
            <p>
              From small repairs to major renovations, James approaches every project with the same level of professionalism and attention to detail. His motto is simple: <span className="text-slate-900 font-bold italic">"Your Home, Fixed Right the First Time."</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start p-4 bg-gray-50 rounded-2xl border border-slate-200">
              <div className="text-blue-600 mr-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h6 className="font-bold text-slate-900">Quality Guaranteed</h6>
                <p className="text-sm">Every job is completed to the highest standards with attention to detail.</p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-gray-50 rounded-2xl border border-slate-200">
              <div className="text-blue-600 mr-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h6 className="font-bold text-slate-900">Reliable & Punctual</h6>
                <p className="text-sm">We arrive on time and complete projects within agreed timeframes.</p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-gray-50 rounded-2xl border border-slate-200">
              <div className="text-blue-600 mr-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h6 className="font-bold text-slate-900">Experienced Pro</h6>
                <p className="text-sm">Years of experience in home improvement and repair services.</p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-gray-50 rounded-2xl border border-slate-200">
              <div className="text-blue-600 mr-4">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h6 className="font-bold text-slate-900">Insured & Trusted</h6>
                <p className="text-sm">Fully insured services with a track record of satisfied customers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
