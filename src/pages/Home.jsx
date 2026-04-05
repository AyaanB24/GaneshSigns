import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Home = () => {
    return (
        <div className="home-page fade-in">
            {/* Hero Section */}
            <section className="hero-section" id="home-top">
                {/* Background Architectural Image Overlay */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                    <img 
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
                        alt="High-end Building" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.2 }}
                    />
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, transparent, #0c0c0c)' }}></div>
                </div>

                {/* Background Marathi Watermark */}
                <div className="hero-bg-text">गणेश साईन बोर्ड</div>
                
                <div className="hero-main-content">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <span className="label-uppercase" style={{ color: 'var(--gold-main)', display: 'block', marginBottom: '2rem' }}>Since 2018 / Islampur</span>
                        <h1 className="hero-title">Exceptional signage for those who build with vision.</h1>
                        
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '4rem' }}>
                            <a href="#gallery" className="btn btn-primary" style={{ backgroundColor: '#ffffff', color: '#000000', border: 'none' }}>
                                View Art Gallery
                            </a>
                            <a href="#contact" className="btn btn-glass">
                                Get In Touch
                            </a>
                        </div>
                    </motion.div>
                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    style={{ position: 'absolute', bottom: '3rem', left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.4)', zIndex: 10 }}
                >
                    <ChevronDown className="animate-bounce" />
                </motion.div>
            </section>

            {/* Introductory Statement - Transition to Concrete Grey Section */}
            <section className="section-padding container" style={{ textAlign: 'center' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, lineHeight: 1.3, color: 'var(--text-main)' }}>
                        Blending architectural precision with premium materials to define your brand's physical presence. 
                        We don't just make signs; we craft landmarks.
                    </h2>
                </div>
            </section>
        </div>
    );
};

export default Home;
