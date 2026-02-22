import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { Menu, X, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import trustedBadge from '../assets/trusted_badge.svg';
import serviceBadge from '../assets/service_badge.svg';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
    const { settings } = useData();
    const [isOpen, setIsOpen] = useState(false);

    // Default fallbacks if settings haven't loaded yet
    const phone = settings?.phone || '+91 85878 38635';
    const email = settings?.email || 'info@tt-officesolutions.com';
    const logoUrl = settings?.logoUrl || logo;
    const companyName = settings?.companyName || 'T&T OFFICE SOLUTIONS';

    return (
        <header className="header">
            <div className="utility-bar">
                <div className="container utility-content">
                    <div className="contact-info">
                        <span className="bold-green-text">📞 {phone}</span>
                    </div>
                    <div className="email-info">
                        <span className="bold-green-text">✉️ {email}</span>
                    </div>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook size={16} /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter size={16} /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram size={16} /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin size={16} /></a>
                    </div>
                </div>
            </div>
            <div className="top-bar container">
                <Link to="/products" className="logo-section" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                    <img src={logoUrl} alt={companyName} className="company-logo" onError={(e) => e.target.src = logo} />
                    <div className="logo-text">
                        <h1>{companyName}</h1>
                    </div>
                </Link>
                <div className="trust-badges">
                    <img src={trustedBadge} alt="Trusted Since 2010" className="trust-badge-img" />
                    <img src={serviceBadge} alt="Service Expert" className="trust-badge-img" />
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
