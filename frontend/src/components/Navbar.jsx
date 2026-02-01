import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const { settings } = useData();
    const [isOpen, setIsOpen] = useState(false);

    // Default fallbacks if settings haven't loaded yet
    const phone = settings?.phone || '+91 85878 38635';
    const email = settings?.email || 'info@tt-officesolutions.com';
    const logoUrl = settings?.logoUrl || '/src/assets/logo.png';
    const companyName = settings?.companyName || 'T&T OFFICE SOLUTIONS';

    return (
        <header className="header">
            <div className="utility-bar">
                <div className="container utility-content">
                    <div className="contact-info">
                        <span>📞 {phone}</span>
                    </div>
                    <div className="email-info">
                        <span>✉️ {email}</span>
                    </div>
                </div>
            </div>
            <div className="top-bar container">
                <div className="logo-section">
                    <img src={logoUrl} alt={companyName} className="company-logo" onError={(e) => e.target.src = '/src/assets/logo.png'} />
                    <div className="logo-text">
                        <h1>{companyName}</h1>
                    </div>
                </div>
                <div className="trust-badges">
                    <img src="/src/assets/trusted_badge.svg" alt="Trusted Since 2010" className="trust-badge-img" />
                    <img src="/src/assets/service_badge.svg" alt="Service Expert" className="trust-badge-img" />
                </div>

                {/* Mobile Menu Toggle */}
                <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <nav className={`main-nav ${isOpen ? 'open' : ''}`}>
                <div className="container nav-container">
                    <ul className="nav-links">
                        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                        <li><Link to="/products" onClick={() => setIsOpen(false)}>Products</Link></li>
                        <li><Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
                        <li><Link to="/support" onClick={() => setIsOpen(false)}>Support</Link></li>
                        <li><Link to="/aboutus" onClick={() => setIsOpen(false)}>About Us</Link></li>
                        <li><Link to="/contactus" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
