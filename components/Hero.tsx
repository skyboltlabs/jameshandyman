
import React, { useState, useEffect } from 'react';
import { Page } from '../App';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const slides = [
  {
    image: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?q=80&w=2070&auto=format&fit=crop",
    tag: "Serving Cape Town & Surrounds",
    title: ["Your Home, Fixed Right", "the First Time."],
    description: "From minor repairs to major renovations, James Handyman delivers quality workmanship and reliable service you can trust.",
  },
  {
    image: "https://images.unsplash.com/photo-1632120377007-c2adc3017b1e?q=80&w=2070&auto=format&fit=crop",
    tag: "Expert Renovations",
    title: ["Transform Your", "Living Space."],
    description: "Complete home remodeling services including kitchens, bathrooms, and full home makeovers tailored to your vision.",
  },
  {
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop",
    tag: "Precision Carpentry",
    title: ["Quality Woodwork", "& Built-ins."],
    description: "Professional carpentry for custom cabinets, shelving, and deck construction with attention to every detail.",
  }
];

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with Zoom Effect */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.tag}
              className={`w-full h-full object-cover transition-transform duration-[12000ms] ease-out ${
                index === currentSlide ? 'scale-110' : 'scale-100'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-900/90"></div>
          </div>

          {/* Content Container */}
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
            <div className={`max-w-4xl transition-all duration-1000 delay-300 transform ${
              index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}>
              <div className="inline-flex items-center space-x-2 bg-blue-600/30 text-blue-300 px-5 py-2 rounded-full mb-8 border border-blue-500/30 backdrop-blur-md shadow-lg">
                <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
                <span className="text-sm font-bold uppercase tracking-[0.2em]">{slide.tag}</span>
              </div>
              
              <h1 className="text-5xl md:text-8xl font-black font-outfit text-white leading-[1.05] mb-8 drop-shadow-2xl">
                {slide.title.map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < slide.title.length - 1 && <br className="hidden md:block" />}
                  </React.Fragment>
                ))}
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-200 mb-12 leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
                {slide.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href="#contact" 
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl shadow-blue-600/40 active:scale-95 flex items-center justify-center group"
                >
                  Get a Free Quote
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a 
                  href="#services" 
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 px-10 py-5 rounded-2xl font-bold text-xl transition-all active:scale-95"
                >
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-white/5 hover:bg-white/10 p-4 rounded-full text-white/50 hover:text-white transition-all backdrop-blur-md border border-white/10"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={nextSlide}
        className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-white/5 hover:bg-white/10 p-4 rounded-full text-white/50 hover:text-white transition-all backdrop-blur-md border border-white/10"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-500 rounded-full ${
              index === currentSlide 
              ? 'w-12 h-3 bg-blue-600' 
              : 'w-3 h-3 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Trust Badges Floating Section */}
      <div className="hidden lg:flex absolute bottom-0 left-0 w-full bg-slate-900/80 backdrop-blur-xl border-t border-white/10 py-6 px-8 z-30 justify-center">
        <div className="max-w-7xl w-full flex justify-between items-center text-slate-400 font-medium">
          <div className="flex items-center space-x-3">
             <span className="text-white font-bold text-2xl">500+</span>
             <span className="text-sm uppercase tracking-widest">Projects Completed</span>
          </div>
          <div className="h-8 w-px bg-white/10"></div>
          <div className="flex items-center space-x-3">
             <span className="text-white font-bold text-2xl">100%</span>
             <span className="text-sm uppercase tracking-widest">Satisfaction Rate</span>
          </div>
          <div className="h-8 w-px bg-white/10"></div>
          <div className="flex items-center space-x-3">
             <span className="text-white font-bold text-2xl">5.0</span>
             <span className="text-sm uppercase tracking-widest">Google Rating</span>
          </div>
          <div className="h-8 w-px bg-white/10"></div>
          <div className="flex items-center space-x-3 text-blue-400">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
             </svg>
             <span className="text-sm font-bold uppercase tracking-widest">Fully Insured & Certified</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
