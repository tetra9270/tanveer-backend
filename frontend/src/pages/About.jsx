import React from 'react';
import { useData } from '../context/DataContext';

const About = () => {
    const { settings } = useData();

    return (
        <div className="container" style={{ padding: '40px 20px', minHeight: '60vh' }}>
            <h2 className="section-title">About Us</h2>
            <div style={{ background: '#fff', padding: '30px', borderRadius: '4px', border: '1px solid #eee' }}>
                <h3 style={{ color: 'var(--primary-blue)', marginBottom: '15px' }}>T&T OFFICE SOLUTIONS</h3>
                <p style={{ marginBottom: '15px', whiteSpace: 'pre-wrap' }}>
                    {settings?.aboutUsText ||
                        `Start your journey with T&T OFFICE SOLUTIONS, a leader in office automation.
                    We are committed to providing widespread solutions for document presentation and protection.`}
                </p>
                <p style={{ marginBottom: '15px' }}>
                    Our products are designed with precision and durability in mind, serving thousands of satisfied customers across India.
                    We are committed to the highest standards of quality in our manufacturing and service.
                </p>
                <p>
                    <strong>Our Prestigious Customers:</strong> Government organizations, Banks, Corporate Offices, and Educational Institutions trust T&T OFFICE SOLUTIONS for their shredding and laminating needs.
                </p>
            </div>
        </div>
    );
};

export default About;
