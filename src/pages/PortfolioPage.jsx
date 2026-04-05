import React from 'react';
import { motion } from 'framer-motion';

// Real Project Assets
import project1 from '../assets/image.png';
import project2 from '../assets/image copy.png';
import project3 from '../assets/image copy 2.png';
import project4 from '../assets/image copy 3.png';
import project5 from '../assets/image copy 4.png';

const PortfolioPage = () => {
    const portfolioItems = [
        { id: 1, title: 'Project 01', image: project1 },
        { id: 2, title: 'Project 02', image: project2 },
        { id: 3, title: 'Project 03', image: project3 },
        { id: 4, title: 'Project 04', image: project4 },
        { id: 5, title: 'Project 05', image: project5 },
    ];

    return (
        <section id="gallery" className="portfolio-page fade-in" style={{ padding: '8rem 0', background: 'var(--bg-soft)' }}>
             <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <span className="label-uppercase" style={{ color: 'var(--gold-main)', margin: '0 auto 1.5rem' }}>Our Craftsmanship</span>
                    <h1 className="hero-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#111111' }}>The Signage Gallery.</h1>
                </div>
                
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
                    gap: '2.5rem',
                    justifyContent: 'center'
                }}>
                    {portfolioItems.map((item, index) => (
                        <motion.div 
                            key={item.id}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.05 }}
                            className="portfolio-item-card"
                        >
                            <div className="portfolio-img-container">
                                <img 
                                    src={item.image} 
                                    className="portfolio-image"
                                    alt={item.title} 
                                />
                            </div>
                            <div className="item-details" style={{ padding: '1.5rem 0', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '0.8rem', fontWeight: 800, color: '#111111', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                                    {item.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioPage;
