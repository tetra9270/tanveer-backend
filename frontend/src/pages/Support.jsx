import React from 'react';
import './Support.css';

const Support = () => {
    return (
        <div className="support-page page-container">
            <div className="container">
                <div className="support-header text-center">
                    <h1 className="section-title">Support & Help Center</h1>
                    <p className="support-subtitle">We are here to assist you with all your office automation needs.</p>
                </div>

                <div className="help-section">
                    <div className="help-card call-support">
                        <div className="icon-wrapper">
                            <span className="help-icon">📞</span>
                        </div>
                        <h3>Call Support</h3>
                        <p>Speak directly with our service experts for immediate assistance.</p>
                        <div className="contact-details">
                            <a href="tel:+919848012345" className="contact-link">+91-98480 12345</a>
                            <a href="tel:+914027764337" className="contact-link">+91-40-2776 4337</a>
                        </div>
                    </div>

                    <div className="help-card email-support">
                        <div className="icon-wrapper">
                            <span className="help-icon">✉️</span>
                        </div>
                        <h3>Email Us</h3>
                        <p>Send us your queries or service requests, and we'll get back to you.</p>
                        <div className="contact-details">
                            <a href="mailto:info@tt-officesolutions.com" className="contact-link">info@tt-officesolutions.com</a>
                        </div>
                    </div>

                    <div className="help-card visit-us">
                        <div className="icon-wrapper">
                            <span className="help-icon">📍</span>
                        </div>
                        <h3>Visit Our Office</h3>
                        <p>Drop by our office for a consultation or product demo.</p>
                        <div className="contact-details">
                            <p>T & T Office Solutions, Hyderabad</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
