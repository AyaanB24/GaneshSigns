import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage'; // Reusing as Art Gallery or similar
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import TestimonialsPage from './pages/TestimonialsPage';
import { ArrowUp, MessageCircle } from 'lucide-react';
import './App.css';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="gallery">
          <PortfolioPage />
        </section>
        <section id="testimonials">
          <TestimonialsPage />
        </section>
        <section id="contact">
          <ContactPage />
        </section>
      </main>
      <Footer />

      {/* Modern Minimalist Floating Buttons */}
      <a 
        href="https://wa.me/919595991760" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-btn glass-effect"
        title="Chat on WhatsApp"
        style={{ border: '1px solid rgba(0,0,0,0.05)', backgroundColor: 'white', color: 'black' }}
      >
        <MessageCircle size={28} strokeWidth={1.5} />
      </a>

      <button 
        className={`back-to-top glass-effect ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        title="Back to Top"
        style={{ color: 'black', backgroundColor: 'white', zIndex: 999 }}
      >
        <ArrowUp size={20} strokeWidth={1.5} />
      </button>
    </div>
  );
}

export default App;
