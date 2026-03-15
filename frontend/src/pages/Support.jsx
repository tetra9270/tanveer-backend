import React from 'react';
import { useData } from '../context/DataContext';
import './Support.css';

const Support = () => {
    const { settings } = useData();

    const heading = settings?.supportPageHeading || 'Support & Help Center';
    const headingColor = settings?.supportPageHeadingColor || '#111111';
    const subtitle = settings?.supportPageSubtitle || 'We are here to assist you with all your office automation needs.';

    const callHeading = settings?.supportCallHeading || 'Call Support';
    const callHeadingColor = settings?.supportCallHeadingColor || '#111111';
    const callText = settings?.supportCallText || 'Speak directly with our service experts for immediate assistance.';
    const callPhone1 = settings?.supportCallPhone1 || settings?.phone || '+91 9811757846';
    const callPhone2 = settings?.supportCallPhone2 || '+91-40-2776 4337';

    const emailHeading = settings?.supportEmailHeading || 'Email Us';
    const emailHeadingColor = settings?.supportEmailHeadingColor || '#111111';
    const emailText = settings?.supportEmailText || "Send us your queries or service requests, and we'll get back to you.";
    const supportEmail = settings?.email || 'info@tt-officesolutions.com';

    const visitHeading = settings?.supportVisitHeading || 'Visit Our Office';
    const visitHeadingColor = settings?.supportVisitHeadingColor || '#111111';
    const visitText = settings?.supportVisitText || 'Drop by our office for a consultation or product demo.';
    const companyName = settings?.companyName || 'T&T OFFICE SOLUTIONS';
    const address = settings?.address || 'Hyderabad';

    return (
        <div className="support-page page-container">
            <div className="container">
                <div className="support-header text-center">
                    <h1 className="section-title" style={{ color: headingColor }}>{heading}</h1>
                    <p className="support-subtitle">{subtitle}</p>
                </div>

                <div className="help-section">
                    <div className="help-card call-support">
                        <div className="icon-wrapper">
                            <span className="help-icon">📞</span>
                        </div>
                        <h3 style={{ color: callHeadingColor }}>{callHeading}</h3>
                        <p>{callText}</p>
                        <div className="contact-details">
                            {callPhone1 && <a href={`tel:${callPhone1.replace(/\s/g, '')}`} className="contact-link">{callPhone1}</a>}
                            {callPhone2 && <a href={`tel:${callPhone2.replace(/\s/g, '')}`} className="contact-link">{callPhone2}</a>}
                        </div>
                    </div>

                    <div className="help-card email-support">
                        <div className="icon-wrapper">
                            <span className="help-icon">✉️</span>
                        </div>
                        <h3 style={{ color: emailHeadingColor }}>{emailHeading}</h3>
                        <p>{emailText}</p>
                        <div className="contact-details">
                            <a href={`mailto:${supportEmail}`} className="contact-link">{supportEmail}</a>
                        </div>
                    </div>

                    <div className="help-card visit-us">
                        <div className="icon-wrapper">
                            <span className="help-icon">📍</span>
                        </div>
                        <h3 style={{ color: visitHeadingColor }}>{visitHeading}</h3>
                        <p>{visitText}</p>
                        <div className="contact-details">
                            <p>{companyName}, {address.split('\n')[0]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
