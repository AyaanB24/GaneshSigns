import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'Art Gallery', href: '#gallery' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        // Prevent body scroll when menu is open
        document.body.style.overflow = !mobileMenuOpen ? 'hidden' : 'auto';
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <nav className={`navbar-main ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <a href="#home" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span className="marathi-logo" style={{ fontSize: '1.25rem' }}>गणेश साईन बोर्ड</span>
                </a>

                {/* Desktop Menu */}
                <div className="desktop-menu">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link-item">
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Icon */}
                <div className="mobile-actions">
                    <button className="menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle Menu">
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}></div>
                
                <div className={`mobile-menu-panel ${mobileMenuOpen ? 'open' : ''}`}>
                    <div className="mobile-menu-header" style={{ display: 'flex', justifyContent: 'space-between', padding: '2rem' }}>
                         <span className="marathi-logo" style={{ fontSize: '1.25rem' }}>गणेश साईन बोर्ड</span>
                         <button onClick={closeMobileMenu} style={{ background: 'none', border: 'none', color: '#111' }}>
                             <X size={28} />
                         </button>
                    </div>
                    <div className="mobile-menu-links">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="mobile-nav-link" onClick={closeMobileMenu}>
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
