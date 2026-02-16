
import React from 'react';
import { Page } from '../App';
import Contact from '../components/Contact';

interface ContactPageProps {
  onNavigate: (page: Page) => void;
}

const ContactPage: React.FC<ContactPageProps> = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-900 text-white min-h-screen">
      <div className="py-20 text-center border-b border-white/5">
        <h1 className="text-4xl md:text-7xl font-black font-outfit mb-6">Let's Talk</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Contact James directly or fill out the form below for a free estimate.
        </p>
      </div>
      
      <div className="py-24">
        <Contact />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-6">
            <div className="bg-blue-600 p-4 rounded-2xl">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-2xl font-bold">Business Hours</h4>
              <p className="text-slate-400">Available Mon-Sat for site visits and consultations.</p>
            </div>
          </div>
          <div className="text-right">
             <p className="text-xl font-bold">Mon-Fri: 08:00 - 18:00</p>
             <p className="text-xl font-bold text-blue-400">Sat: 09:00 - 15:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
