import React from 'react';
import { useData } from '../context/DataContext';

const Contact = () => {
    const { settings } = useData();

    const heading = settings?.contactPageHeading || 'Contact Us';
    const headingColor = settings?.contactPageHeadingColor || '#111111';
    const infoHeading = settings?.contactInfoHeading || 'Get in Touch';
    const infoHeadingColor = settings?.contactInfoHeadingColor || '#1a56db';
    const introText = settings?.contactInfoText || '';
    const companyName = settings?.companyName || 'T&T OFFICE SOLUTIONS';
    const address = settings?.address || '1-10-72/5/1/A, Cheekoti Gardens,\nBegumpet, Hyderabad - 500 016,\nTelangana, India.';
    const email = settings?.email || 'info@tt-officesolutions.com';
    const phone = settings?.phone || '+91 9811757846';
    const formHeading = settings?.contactFormHeading || 'Quick Enquiry';
    const formHeadingColor = settings?.contactFormHeadingColor || '#1a56db';

    return (
        <div className="container" style={{ padding: '40px 20px' }}>
            <h2 className="section-title" style={{ color: headingColor }}>{heading}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>

                {/* Contact Info */}
                <div style={{ background: '#fff', padding: '30px', borderRadius: '4px', border: '1px solid #eee' }}>
                    <h3 style={{ color: infoHeadingColor, marginBottom: '20px' }}>{infoHeading}</h3>
                    {introText && (
                        <p style={{ marginBottom: '20px', whiteSpace: 'pre-wrap' }}>{introText}</p>
                    )}
                    <p style={{ marginBottom: '10px' }}><strong>Registered Office:</strong></p>
                    <address style={{ fontStyle: 'normal', marginBottom: '20px', lineHeight: '1.6' }}>
                        {companyName},<br />
                        {address.split('\n').map((line, i) => (
                            <span key={i}>{line}<br /></span>
                        ))}
                    </address>
                    <p style={{ marginBottom: '10px' }}><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
                    <p><strong>Phone:</strong> {phone}</p>
                </div>

                {/* Contact Form */}
                <div style={{ background: '#fff', padding: '30px', borderRadius: '4px', border: '1px solid #eee' }}>
                    <h3 style={{ color: formHeadingColor, marginBottom: '20px' }}>{formHeading}</h3>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <input type="text" placeholder="Your Name" style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
                        <input type="email" placeholder="Email Address" style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
                        <input type="tel" placeholder="Phone Number" style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
                        <textarea rows="4" placeholder="Message / Requirement" style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}></textarea>
                        <button type="submit" className="btn" style={{ width: '100%' }}>Send Message</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;
