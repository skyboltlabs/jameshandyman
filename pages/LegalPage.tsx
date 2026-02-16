
import React from 'react';
import { Page } from '../App';

interface LegalPageProps {
  type: 'privacy' | 'terms';
  onNavigate: (page: Page) => void;
}

const LegalPage: React.FC<LegalPageProps> = ({ type, onNavigate }) => {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center text-blue-600 font-bold mb-12 hover:translate-x-[-4px] transition-transform"
        >
          <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </button>

        <h1 className="text-4xl md:text-5xl font-black font-outfit text-slate-900 mb-8">
          {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
        </h1>
        
        <div className="prose prose-lg text-slate-600 leading-relaxed space-y-8">
          {type === 'privacy' ? (
            <>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
                <p>We only collect information about you if we have a reason to do so—for example, to provide our services, to communicate with you, or to make our services better. This includes contact details provided through our contact form such as your name, email address, and phone number.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Information</h2>
                <p>We use the information we collect to communicate with you about our services, provide quotes for handyman work, and schedule site visits. We do not sell your personal information to third parties.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Security</h2>
                <p>While no online service is 100% secure, we work very hard to protect information about you against unauthorized access, use, alteration, or destruction.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at jamesmutema21@mail.com.</p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Service Agreement</h2>
                <p>By engaging James Handyman, you agree to the terms set forth. All work is estimated based on a physical site inspection. Estimates are valid for 30 days unless otherwise stated.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Payment Terms</h2>
                <p>Payment is due upon completion of the service unless prior arrangements have been made. For larger renovation projects, a deposit for materials may be required before commencement.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Liability</h2>
                <p>James Handyman is fully insured. However, we are not responsible for pre-existing structural issues that may be uncovered during the course of a repair or renovation.</p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Warranty</h2>
                <p>We stand behind our workmanship. All labor is warrantied for a period of 6 months from the date of completion, provided the damage is not due to negligence or natural wear and tear.</p>
              </section>
            </>
          )}
        </div>

        <div className="mt-20 pt-10 border-t border-slate-100 text-sm text-slate-400">
          Last updated: October 2023
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
