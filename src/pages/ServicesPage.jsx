import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Layout, Box, PenTool, Image as LucideImage, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
    const services = [
        { 
            id: 1, 
            name: "LED Sign Boards", 
            icon: <Zap size={32} strokeWidth={1} />, 
            desc: "Energy-efficient lighting architectural solutions that define your presence 24/7.",
            details: ["IP68 Waterproof", "50,000+ Hour Life", "Custom Animation"]
        },
        { 
            id: 2, 
            name: "Acrylic Sign Boards", 
            icon: <Layout size={32} strokeWidth={1} />, 
            desc: "High-gloss surface finish. Durable for both indoor luxury and outdoor endurance.",
            details: ["Laser Cut Precision", "Diamond Polishing", "Weather Proof"]
        },
        { 
            id: 3, 
            name: "3D Signage", 
            icon: <Box size={32} strokeWidth={1} />, 
            desc: "Add depth and perspective to your brand with steel, copper, or acrylic volumetric letters.",
            details: ["Backlit Effect", "Polished Steel", "Custom Depths"]
        }
    ];

    return (
        <div className="services-page fade-in" style={{ paddingTop: '10rem' }}>
            <section className="container">
                <span className="label-uppercase">Solutions / Our Services</span>
                <h1 className="hero-title" style={{ marginBottom: '8rem' }}>Crafting Reality <br /> from Your Vision.</h1>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
                    {services.map((service) => (
                        <motion.div 
                            key={service.id} 
                            className="card glass-effect"
                            style={{ padding: '5rem', borderRadius: '4rem' }}
                            whileHover={{ scale: 1.02 }}
                        >
                             <div style={{ background: 'var(--accent-light)', width: '80px', height: '80px', borderRadius: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '3rem' }}>
                                {service.icon}
                             </div>
                             <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 600 }}>{service.name}</h3>
                             <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '3rem' }}>{service.desc}</p>
                             
                             <ul style={{ listStyle: 'none', padding: 0, marginBottom: '4rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                {service.details.map((detail) => (
                                    <li key={detail} style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', background: 'rgba(0,0,0,0.03)', padding: '0.5rem 1rem', borderRadius: 'full', borderRadius: '1rem' }}>
                                        {detail}
                                    </li>
                                ))}
                             </ul>

                             <Link to="/get-quote" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                Request Free Quote <ExternalLink size={16} />
                             </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="section-padding container">
                 <div className="glass-effect" style={{ padding: '8rem', borderRadius: '5rem', display: 'flex', alignItems: 'center', gap: '6rem' }}>
                      <div style={{ flex: 1 }}>
                           <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Full Custom Branding</h2>
                           <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>From initial concept to final installation, we manage everything.</p>
                      </div>
                      <Link to="/get-quote" className="btn btn-primary" style={{ padding: '1.5rem 3rem' }}>Book Custom Design Workshop</Link>
                 </div>
            </section>
        </div>
    );
};

export default ServicesPage;
