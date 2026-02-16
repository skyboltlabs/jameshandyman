
import React from 'react';
import { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page, serviceId?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div 
              className="flex items-center space-x-2 mb-6 cursor-pointer group"
              onClick={() => onNavigate('home')}
            >
              <div className="bg-blue-600 p-2 rounded-lg transition-transform group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <span className="text-xl font-bold font-outfit text-white">
                James <span className="text-blue-500">Handyman</span>
              </span>
            </div>
            <p className="text-slate-400 mb-6">
              Cape Town's most trusted handyman service. Quality workmanship, reliable service, and professional results every time.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="bg-slate-800 p-3 rounded-full text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-slate-800 p-3 rounded-full text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 1.802a3.333 3.333 0 110 6.666 3.333 3.333 0 010-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate('home')} className="text-slate-400 hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('services')} className="text-slate-400 hover:text-white transition-colors">Services</button></li>
              <li><button onClick={() => onNavigate('portfolio')} className="text-slate-400 hover:text-white transition-colors">Portfolio</button></li>
              <li><button onClick={() => onNavigate('about')} className="text-slate-400 hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('contact')} className="text-slate-400 hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Main Services</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate('service-detail', 'renovations')} className="text-slate-400 hover:text-white transition-colors text-left">Kitchen & Bathroom</button></li>
              <li><button onClick={() => onNavigate('service-detail', 'carpentry')} className="text-slate-400 hover:text-white transition-colors text-left">Carpentry & Decks</button></li>
              <li><button onClick={() => onNavigate('service-detail', 'painting')} className="text-slate-400 hover:text-white transition-colors text-left">Expert Painting</button></li>
              <li><button onClick={() => onNavigate('service-detail', 'plumbing')} className="text-slate-400 hover:text-white transition-colors text-left">Plumbing Repairs</button></li>
              <li><button onClick={() => onNavigate('service-detail', 'waterproofing')} className="text-slate-400 hover:text-white transition-colors text-left">Waterproofing</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Business Hours</h4>
            <ul className="space-y-2 text-slate-400">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span className="text-white">08:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-white">09:00 - 15:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-white text-blue-400 font-bold">Emergencies</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} James Handyman Cape Town. Professional Workmanship.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
