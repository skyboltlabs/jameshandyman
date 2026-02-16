
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import ServiceDetail from './pages/ServiceDetail';
import LegalPage from './pages/LegalPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export type Page = 'home' | 'services' | 'portfolio' | 'about' | 'contact' | 'service-detail' | 'privacy' | 'terms';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page: Page, serviceId: string | null = null) => {
    setCurrentPage(page);
    setActiveServiceId(serviceId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return <ServicesPage onNavigate={navigateTo} />;
      case 'portfolio':
        return <PortfolioPage onNavigate={navigateTo} />;
      case 'about':
        return <AboutPage onNavigate={navigateTo} />;
      case 'contact':
        return <ContactPage onNavigate={navigateTo} />;
      case 'service-detail':
        return <ServiceDetail serviceId={activeServiceId || 'renovations'} onNavigate={navigateTo} />;
      case 'privacy':
        return <LegalPage type="privacy" onNavigate={navigateTo} />;
      case 'terms':
        return <LegalPage type="terms" onNavigate={navigateTo} />;
      default:
        return (
          <>
            <section id="home">
              <Hero onNavigate={navigateTo} />
            </section>
            
            <section className="py-20 bg-gray-50">
              <Services onNavigate={navigateTo} />
            </section>

            <section className="py-20 bg-white">
              <Gallery />
            </section>

            <section className="py-20 bg-gray-50">
              <Testimonials />
            </section>

            <section className="py-20 bg-white">
              <About />
            </section>

            <section id="contact-home" className="py-20 bg-slate-900 text-white">
              <Contact />
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar isScrolled={isScrolled} currentPage={currentPage} onNavigate={navigateTo} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={navigateTo} />
      <WhatsAppButton />
    </div>
  );
};

export default App;
