
import React, { useState } from 'react';

const About: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  
  // The most reliable GitHub Raw format: https://raw.githubusercontent.com/[USER]/[REPO]/[BRANCH]/[PATH]
  const jamesImageUrl = "https://raw.githubusercontent.com/skyboltlabs/jameshandyman/main/james-picture.jpg";
  const fallbackImageUrl = "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 relative">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group bg-slate-200">
            {/* James's Professional Portrait with Fallback */}
            <img 
              src={imageError ? fallbackImageUrl : jamesImageUrl} 
              alt="James Mutema, professional handyman in Cape Town, smiling and ready to help" 
              onError={() => setImageError(true)}
              className={`w-full h-full object-cover aspect-[4/5] object-center transition-all duration-700 ${imageError ? 'grayscale-0' : 'group-hover:scale-105'}`}
            />
            
            {/* Experience Badge Overlay */}
            <div className="absolute top-6 left-6 bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-xl backdrop-blur-md border border-white/20">
              <span className="block text-2xl font-black leading-none">15+</span>
              <span className="text-[10px] uppercase font-bold tracking-widest">Years Experience</span>
            </div>

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none"></div>
          </div>

          {/* Floating Verification Card */}
          <div className="absolute -bottom-10 -right-4 md:-right-10 bg-white p-8 rounded-3xl shadow-2xl max-w-xs border border-slate-100 z-10 transform transition-transform hover:-translate-y-2">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-green-500 p-3 rounded-2xl">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h5 className="text-lg font-bold text-slate-900">Verified Pro</h5>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed italic">
              "Honesty and precision are the foundations of my work. I'm here to ensure your home projects are stress-free."
            </p>
            <p className="mt-4 font-bold text-slate-900">— James Mutema</p>
          </div>
        </div>

        <div className="lg:w-1/2">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">The Expert Behind The Work</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-outfit text-slate-900 mb-8 leading-tight">Your Trusted Home Partner in Cape Town</h3>
          
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-10">
            <p>
              James Mutema isn't just a handyman; he's a dedicated craftsman with a passion for restoring and improving Cape Town's beautiful homes. With over a decade of hands-on experience, James has become the first call for homeowners from Sea Point to the Southern Suburbs.
            </p>
            <p>
              He believes that no job is too small for absolute perfection. Whether he's wearing his safety gear on a renovation site or fixing a minor plumbing leak, his commitment to <span className="text-blue-600 font-bold">reliability, punctuality, and quality</span> remains unchanged.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Fully Insured", desc: "Your property is protected while we work.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { title: "Always On Time", desc: "We value your schedule and arrive promptly.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Master Craftsman", desc: "Expertise across plumbing, electrical, and wood.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
              { title: "Clean Worksite", desc: "We leave your home tidier than we found it.", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-blue-600 mr-4 mt-1">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <div>
                  <h6 className="font-bold text-slate-900">{item.title}</h6>
                  <p className="text-sm text-slate-500 leading-tight mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
