import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { Menu, X, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import trustedBadge from '../assets/trusted_badge.svg';
import serviceBadge from '../assets/service_badge.svg';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
    const { settings } = useData();
    const [isOpen, setIsOpen] = useState(false);

    // Default fallbacks if settings haven't loaded yet
    const phone = settings?.phone || '+91 9811757846';
    const email = settings?.email || 'ttofficesolutions786@gmail.com';
    const logoUrl = settings?.logoUrl || logo;
    const companyName = settings?.companyName || 'T&T OFFICE SOLUTIONS';
    const facebookUrl = settings?.facebookUrl || 'https://facebook.com';
    const twitterUrl = settings?.twitterUrl || 'https://twitter.com';
    const instagramUrl = settings?.instagramUrl || 'https://instagram.com';
    const linkedinUrl = settings?.linkedinUrl || 'https://linkedin.com';
    const youtubeUrl = settings?.youtubeUrl || 'https://youtube.com';

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
                        {facebookUrl && <a href={facebookUrl} target="_blank" rel="noopener noreferrer"><Facebook size={16} /></a>}
                        {twitterUrl && <a href={twitterUrl} target="_blank" rel="noopener noreferrer"><Twitter size={16} /></a>}
                        {instagramUrl && <a href={instagramUrl} target="_blank" rel="noopener noreferrer"><Instagram size={16} /></a>}
                        {linkedinUrl && <a href={linkedinUrl} target="_blank" rel="noopener noreferrer"><Linkedin size={16} /></a>}
                        {youtubeUrl && <a href={youtubeUrl} target="_blank" rel="noopener noreferrer"><Youtube size={16} /></a>}
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
                        <li className="dropdown">
                            <Link to="/products" className="dropbtn" onClick={() => setIsOpen(false)}>Products ▾</Link>
                            <div className="dropdown-content">
                                <Link to="/select-brand/document-shredders" onClick={() => setIsOpen(false)}>Document Shredders</Link>
                                <Link to="/select-brand/app-shredders" onClick={() => setIsOpen(false)}>Multipurpose Application Shredders</Link>
                                <Link to="/select-brand/laminators" onClick={() => setIsOpen(false)}>Document Laminators & Binders</Link>
                            </div>
                        </li>
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
