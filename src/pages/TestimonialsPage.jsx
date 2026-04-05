import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialsPage = () => {
    const reviews = [
        { id: 1, name: "Dr. Sandeep / Clinic 01", text: "The architectural depth of the 3D signage transform the entrance.", rating: 5 },
        { id: 2, name: "Hotel Raj / Islampur", text: "Exceptional LED modules. The brightness and clarity are unmatched in the city.", rating: 5 },
        { id: 3, name: "Prasant Patil / Commercial", text: "Minimalist, clean, and professional. The installation was very swift.", rating: 5 },
        { id: 4, name: "Shop Owner / Lal Chowk", text: "Ganesh Signage provided the modern look we were searching for years.", rating: 5 },
    ];

    return (
        <section id="testimonials" className="testimonials-page fade-in" style={{ padding: '10rem 0', background: 'var(--bg-soft)' }}>
             <div className="container">
                <span className="label-uppercase" style={{ color: 'var(--gold-main)' }}>Trust / Global Community</span>
                <h1 className="hero-title" style={{ marginBottom: '8rem', color: 'var(--text-main)' }}>Words From <br /> our Partners.</h1>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    {reviews.map((review, i) => (
                        <motion.div 
                            key={review.id} 
                            className="card glass-effect"
                            style={{ padding: '6rem 4rem', borderRadius: '4rem', position: 'relative', background: '#ffffff' }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Quote size={80} strokeWidth={0.5} opacity={0.05} color="var(--gold-main)" style={{ position: 'absolute', top: '2rem', right: '2rem' }} />
                            <div className="review-profile" style={{ marginBottom: '2.5rem' }}>
                                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem' }}>
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--gold-main)" color="var(--gold-main)" strokeWidth={0} />)}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>{review.name}</h3>
                            </div>
                            <p className="review-text" style={{ fontSize: '1.25rem', lineHeight: 1.6, color: 'var(--text-main)', fontWeight: 400 }}>"{review.text}"</p>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            <div className="container" style={{ marginTop: '10rem' }}>
                 <div className="glass-effect" style={{ padding: '10rem', borderRadius: '5rem', textAlign: 'center', background: '#ffffff' }}>
                      <h4 style={{ fontSize: '7rem', fontWeight: 800, color: 'var(--gold-main)', marginBottom: '1rem' }}>5.0</h4>
                      <p className="label-uppercase" style={{ marginBottom: '3rem' }}>Average Rating</p>
                      <h2 style={{ fontSize: '2.5rem' }}>The most trusted partner in Maharashtra.</h2>
                 </div>
            </div>
        </section>
    );
};

export default TestimonialsPage;
