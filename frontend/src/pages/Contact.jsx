import React from 'react';
import { useData } from '../context/DataContext';

const Contact = () => {
    const { settings } = useData();

    return (
        <div className="container" style={{ padding: '40px 20px' }}>
            <h2 className="section-title">Contact Us</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>

                {/* Contact Info */}
                <div style={{ background: '#fff', padding: '30px', borderRadius: '4px', border: '1px solid #eee' }}>
                    <h3 style={{ color: 'var(--primary-blue)', marginBottom: '20px' }}>Get in Touch</h3>
                    {settings?.contactInfoText && (
                        <p style={{ marginBottom: '20px', whiteSpace: 'pre-wrap' }}>{settings.contactInfoText}</p>
                    )}
                    <p style={{ marginBottom: '10px' }}><strong>Registered Office:</strong></p>
                    <address style={{ fontStyle: 'normal', marginBottom: '20px', lineHeight: '1.6' }}>
                        T&T OFFICE SOLUTIONS,<br />
                        1-10-72/5/1/A, Cheekoti Gardens,<br />
                        Begumpet, Hyderabad - 500 016,<br />
                        Telangana, India.
                    </address>
                    <p style={{ marginBottom: '10px' }}><strong>Email:</strong> info@tt-officesolutions.com</p>
                    <p><strong>Phone:</strong> +91-40-2776 4337</p>
                </div>

                {/* Contact Form */}
                <div style={{ background: '#fff', padding: '30px', borderRadius: '4px', border: '1px solid #eee' }}>
                    <h3 style={{ color: 'var(--primary-blue)', marginBottom: '20px' }}>Quick Enquiry</h3>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                        />
                        <textarea
                            rows="4"
                            placeholder="Message / Requirement"
                            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                        ></textarea>
                        <button type="submit" className="btn" style={{ width: '100%' }}>Send Message</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;
