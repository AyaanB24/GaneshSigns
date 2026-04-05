import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
    return (
        <section id="contact" className="contact-page fade-in" style={{ padding: '10rem 0' }}>
            <div className="container">
                <span className="label-uppercase" style={{ color: 'var(--gold-main)' }}>Reach Us / 24X7 Support</span>
                <h1 className="hero-title" style={{ marginBottom: '8rem', color: 'var(--text-main)' }}>Begin Your <br /> Project Today.</h1>
                
                <div className="contact-grid-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '8rem', alignItems: 'start' }}>
                    <div className="contact-details-box glass-effect" style={{ padding: '6rem 4rem', borderRadius: '4rem', background: 'var(--bg-soft)' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', fontWeight: 600 }}>Get in Touch</h2>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                             <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                  <Phone size={24} strokeWidth={1.5} color="var(--gold-main)" />
                                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>+91 9595991760</h3>
                             </div>
                             <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                  <Mail size={24} strokeWidth={1.5} color="var(--gold-main)" />
                                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>info@ganeshsignage.com</h3>
                             </div>
                             <div style={{ display: 'flex', gap: '1.5rem' }}>
                                  <MapPin size={24} strokeWidth={1.5} color="var(--gold-main)" style={{ marginTop: '0.25rem' }} />
                                  <div>
                                       <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Maharashtra, India</h3>
                                       <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>Kala Maruti Road, Lal Chowk, Islampur</p>
                                  </div>
                             </div>
                        </div>

                        <div style={{ marginTop: '5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                             <a href="#" className="btn btn-glass" style={{ width: '100%', justifyContent: 'center', borderColor: '#eee', color: 'black' }}>Instagram</a>
                             <a href="#" className="btn btn-glass" style={{ width: '100%', justifyContent: 'center', borderColor: '#eee', color: 'black' }}>Facebook</a>
                        </div>
                    </div>

                    <div className="contact-form-box">
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '3rem', fontWeight: 600 }}>Request Consultation</h3>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <input type="text" placeholder="Your Name" style={{ background: 'var(--bg-soft)', border: 'none', borderBottom: '1px solid #ddd', padding: '1.25rem 0', fontSize: '1rem', outline: 'none' }} />
                                <input type="tel" placeholder="Your Mobile" style={{ background: 'var(--bg-soft)', border: 'none', borderBottom: '1px solid #ddd', padding: '1.25rem 0', fontSize: '1rem', outline: 'none' }} />
                            </div>
                            <textarea rows="6" placeholder="Describe your vision..." style={{ background: 'var(--bg-soft)', border: 'none', borderBottom: '1px solid #ddd', padding: '1.25rem 0', fontSize: '1rem', outline: 'none', resize: 'none' }}></textarea>
                            <button type="submit" className="btn btn-primary" style={{ padding: '1.5rem', justifyContent: 'center', borderRadius: '1rem', background: 'var(--gold-main)', color: 'white' }}>
                                Submit Message <Send size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="container" style={{ marginTop: '8rem' }}>
                 <div className="glass-effect" style={{ height: '500px', borderRadius: '5rem', overflow: 'hidden' }}>
                      <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.1!2d74.2691!3d17.0493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc16f8666ec9897%3A0xe4472!2sGanesh%20Sign%20Board%2C%20Islampur!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                          width="100%" 
                          height="100%" 
                          style={{ border: 0 }} 
                          allowFullScreen="" 
                          loading="lazy"
                      ></iframe>
                 </div>
            </div>
        </section>
    );
};

export default ContactPage;
