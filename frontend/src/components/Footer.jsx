
import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import './Footer.css';

const Footer = () => {
    const { settings } = useData();
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <h3>Products</h3>
                    <ul>
                        <li><a href="#">Document Shredders</a></li>
                        <li><a href="#">Laminators</a></li>
                        <li><a href="#">Binders</a></li>
                        <li><a href="#">Pet Bottle Shredders</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p><strong>Registered Office:</strong></p>
                    <address>
                        T&T OFFICE SOLUTIONS,<br />
                        1-10-72/5/1/A, Cheekoti Gardens,<br />
                        Begumpet, Hyderabad - 500 016,<br />
                        Telangana, India.
                    </address>
                    <p>Email: <a href="mailto:info@tt-officesolutions.com">info@tt-officesolutions.com</a></p>
                    <p>Phone: +91 85878 38635</p>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>{settings?.footerText || `© ${currentYear} T & T Office Solutions.All rights reserved.`}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
