import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <span className="footer-logo-text">गणेश साईन बोर्ड</span>
                    <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', lineHeight: 1.8, maxWidth: '280px' }}>
                        Architectural signage manufacture and design. Defining brand presence with precision and high-end materials since 2018.
                    </p>
                </div>

                <div className="footer-group">
                    <h4 style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '2.5rem', color: 'rgba(255,255,255,0.5)' }}>Navigation</h4>
                    <ul className="footer-links">
                        <li><a href="#home" className="footer-link">Home</a></li>
                        <li><a href="#about" className="footer-link">About Us</a></li>
                        <li><a href="#gallery" className="footer-link">Art Gallery</a></li>
                    </ul>
                </div>

                <div className="footer-group">
                    <h4 style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '2.5rem', color: 'rgba(255,255,255,0.5)' }}>Support</h4>
                    <ul className="footer-links">
                        <li><a href="#testimonials" className="footer-link">Testimonials</a></li>
                        <li><a href="#contact" className="footer-link">Contact</a></li>
                        <li><a href="https://wa.me/919595991760" className="footer-link">WhatsApp</a></li>
                    </ul>
                </div>

                <div className="footer-group">
                    <h4 style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '2.5rem', color: 'rgba(255,255,255,0.5)' }}>Connect</h4>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="#" className="social-link" style={{ color: 'white' }}>Instagram</a>
                        <a href="#" className="social-link" style={{ color: 'white' }}>Facebook</a>
                    </div>
                </div>
            </div>

            <div className="container" style={{ marginTop: '6rem', paddingTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    © 2026 Ganesh Sign Board. All Rights Reserved.
                </p>
                <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Crafted in Islampur
                </p>
            </div>
        </footer>
    );
};

export default Footer;
