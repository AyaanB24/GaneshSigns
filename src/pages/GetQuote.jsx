import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Calculator, Landmark, ArrowRight } from 'lucide-react';

const GetQuote = () => {
    return (
        <div className="get-quote-page fade-in" style={{ paddingTop: '10rem' }}>
             <section className="container">
                <span className="label-uppercase">Project Details / Estimator</span>
                <h1 className="hero-title" style={{ marginBottom: '8rem' }}>Start Your <br /> Landmark.</h1>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(400px, 1fr) 2fr', gap: '8rem', alignItems: 'start' }}>
                    <div className="quote-info-box glass-effect" style={{ padding: '4rem', borderRadius: '4rem' }}>
                         <h3 style={{ fontSize: '1.5rem', marginBottom: '3rem', fontWeight: 600 }}>What to expect.</h3>
                         <ul style={{ listStyle: 'none', padding: 0 }}>
                              <li style={{ marginBottom: '3rem' }}>
                                   <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                        <div style={{ background: 'var(--accent-light)', width: '60px', height: '60px', borderRadius: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                             <FileText size={24} strokeWidth={1} />
                                        </div>
                                        <p style={{ fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase' }}>Free Consultation</p>
                                   </div>
                              </li>
                              <li style={{ marginBottom: '3rem' }}>
                                   <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                        <div style={{ background: 'var(--accent-light)', width: '60px', height: '60px', borderRadius: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                             <Landmark size={24} strokeWidth={1} />
                                        </div>
                                        <p style={{ fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase' }}>Flexible Pricing</p>
                                   </div>
                              </li>
                         </ul>
                    </div>

                    <div className="quote-form-box">
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    <label className="label-uppercase" style={{ marginBottom: 0 }}>Full Name</label>
                                    <input type="text" placeholder="Ganesh Patil" style={{ background: 'none', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.1)', padding: '1rem 0', fontSize: '1.25rem', outline: 'none' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    <label className="label-uppercase" style={{ marginBottom: 0 }}>Phone Number</label>
                                    <input type="tel" placeholder="+91 9595991760" style={{ background: 'none', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.1)', padding: '1rem 0', fontSize: '1.25rem', outline: 'none' }} />
                                </div>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    <label className="label-uppercase" style={{ marginBottom: 0 }}>Sign Board Type</label>
                                    <select style={{ background: 'none', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.1)', padding: '1rem 0', fontSize: '1.25rem', outline: 'none', appearance: 'none' }}>
                                        <option value="">Select Category</option>
                                        <option value="led">LED Structural</option>
                                        <option value="acrylic">Boutique Acrylic</option>
                                        <option value="3d">Architectural 3D</option>
                                    </select>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    <label className="label-uppercase" style={{ marginBottom: 0 }}>Approx Budget</label>
                                    <input type="number" placeholder="5,000 / -" style={{ background: 'none', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.1)', padding: '1rem 0', fontSize: '1.25rem', outline: 'none' }} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <label className="label-uppercase" style={{ marginBottom: 0 }}>Vision / Project Scope</label>
                                <textarea rows="4" placeholder="How do you want to be seen?" style={{ background: 'none', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.1)', padding: '1rem 0', fontSize: '1.25rem', outline: 'none', resize: 'none' }}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ padding: '1.5rem', justifyContent: 'center', fontSize: '1rem' }}>
                                Calculate Project Cost <ArrowRight size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GetQuote;
