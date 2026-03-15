import React from 'react';
import { useData } from '../context/DataContext';

const About = () => {
    const { settings } = useData();

    const heading = settings?.aboutPageHeading || 'About Us';
    const headingColor = settings?.aboutPageHeadingColor || '#111111';
    const subHeading = settings?.aboutPageSubHeading || 'T&T OFFICE SOLUTIONS';
    const subHeadingColor = settings?.aboutPageSubHeadingColor || '#1a56db';
    const mainText = settings?.aboutUsText || 'Start your journey with T&T OFFICE SOLUTIONS, a leader in office automation.\nWe are committed to providing widespread solutions for document presentation and protection.';
    const extra1 = settings?.aboutPageExtra1 || 'Our products are designed with precision and durability in mind, serving thousands of satisfied customers across India. We are committed to the highest standards of quality in our manufacturing and service.';
    const extra2 = settings?.aboutPageExtra2 || 'Our Prestigious Customers: Government organizations, Banks, Corporate Offices, and Educational Institutions trust T&T OFFICE SOLUTIONS for their shredding and laminating needs.';

    return (
        <div className="container" style={{ padding: '40px 20px', minHeight: '60vh' }}>
            <h2 className="section-title" style={{ color: headingColor }}>{heading}</h2>
            <div style={{ background: '#fff', padding: '30px', borderRadius: '4px', border: '1px solid #eee' }}>
                <h3 style={{ color: subHeadingColor, marginBottom: '15px' }}>{subHeading}</h3>
                <p style={{ marginBottom: '15px', whiteSpace: 'pre-wrap' }}>{mainText}</p>
                {extra1 && <p style={{ marginBottom: '15px' }}>{extra1}</p>}
                {extra2 && <p><strong>{extra2}</strong></p>}
            </div>
        </div>
    );
};

export default About;
