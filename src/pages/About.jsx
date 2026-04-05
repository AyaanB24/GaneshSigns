import React from 'react';
import { ShieldCheck, Target, Heart, Award } from 'lucide-react';

// Real Shop Exterior Asset From User
import shopImg from '../assets/image copy 5.png';

const About = () => {
    return (
        <section id="about" className="about-page fade-in" style={{ padding: '12rem 0', background: '#303030' }}>
            <div className="container">
                <span className="label-uppercase" style={{ color: 'var(--gold-main)', marginBottom: '2rem' }}>About Us / Our Legacy</span>
                <h1 className="hero-title" style={{ marginBottom: '8rem', color: '#ffffff' }}>Experience <br /> Craftsmanship.</h1>
                
                <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '8rem', alignItems: 'center' }}>
                    <div className="about-visual" style={{ borderRadius: '4rem', overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)' }}>
                         <img 
                            src={shopImg} 
                            style={{ width: '100%', height: 'auto', display: 'block' }} 
                            alt="Ganesh Art Islampur Exterior"
                         />
                    </div>

                    <div className="about-content-text">
                        <h3 style={{ fontSize: '2.8rem', marginBottom: '3rem', fontWeight: 600, color: '#ffffff', lineHeight: 1.2 }}>
                            We craft visuals that speak for themselves.
                        </h3>
                        <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.5)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                            At Ganesh Art, we understand that your sign board is the first handshake your business gives to the world. 
                            Since 2018, we've been helping Islampur's elite brands stand out with architectural 3D and LED solutions.
                        </p>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginTop: '4rem' }}>
                            <div>
                                <h4 style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--gold-main)', margin: 0 }}>500+</h4>
                                <p className="label-uppercase" style={{ color: 'rgba(255,255,255,0.4)', marginTop: '0.5rem' }}>Clients Served</p>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--gold-main)', margin: 0 }}>08+</h4>
                                <p className="label-uppercase" style={{ color: 'rgba(255,255,255,0.4)', marginTop: '0.5rem' }}>Years Exp</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container" style={{ marginTop: '10rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                    <div className="card" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '5rem 4rem' }}>
                         <Target size={40} strokeWidth={1} style={{ marginBottom: '2.5rem', color: 'var(--gold-main)' }} />
                         <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: '#ffffff' }}>Our Mission</h3>
                         <p style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>Building high-end signage landmarks that define the visual landscape of Islampur.</p>
                    </div>
                    <div className="card" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '5rem 4rem' }}>
                         <ShieldCheck size={40} strokeWidth={1} style={{ marginBottom: '2.5rem', color: 'var(--gold-main)' }} />
                         <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: '#ffffff' }}>Durability</h3>
                         <p style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>Every sign is tested for 48 hours for LED stability and weather resistance.</p>
                    </div>
                    <div className="card" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '5rem 4rem' }}>
                         <Heart size={40} strokeWidth={1} style={{ marginBottom: '2.5rem', color: 'var(--gold-main)' }} />
                         <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: '#ffffff' }}>Handcrafted</h3>
                         <p style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>Real artisans bringing your digital designs to life with physical precision.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
