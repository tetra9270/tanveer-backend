
import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import './Footer.css';

const Footer = () => {
    const { settings } = useData();
    const currentYear = new Date().getFullYear();

    const companyName = settings?.companyName || 'T&T OFFICE SOLUTIONS';
    const address = settings?.address || 'B-7 OKHLA VIHAR JAMIA NAGAR\nNEW DELHI, DELHI 110025';
    const email = settings?.email || 'info@tt-officesolutions.com';
    const phone = settings?.phone || '+91 9811757846';
    const footerText = settings?.footerText || `© ${currentYear} T&T Office Solutions. All rights reserved.`;

    // Footer product links (editable via admin)
    const footerLinks = settings?.footerLinks || [
        { label: 'Document Shredders', url: '/select-brand/document-shredders' },
        { label: 'Laminators', url: '/select-brand/laminators' },
        { label: 'Binders', url: '/select-brand/laminators' },
        { label: 'Pet Bottle Shredders', url: '/select-brand/app-shredders' },
    ];

    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <h3>Products</h3>
                    <ul>
                        {footerLinks.map((link, i) => (
                            <li key={i}>
                                <Link to={link.url}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p><strong>Registered Office:</strong></p>
                    <address>
                        {companyName},<br />
                        {address.split('\n').map((line, i) => (
                            <span key={i}>{line}<br /></span>
                        ))}
                    </address>
                    <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
                    <p>Phone: {phone}</p>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>{footerText}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
