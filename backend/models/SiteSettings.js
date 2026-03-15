const mongoose = require('mongoose');

const SiteSettingsSchema = new mongoose.Schema({
    phone: { type: String, default: '+91 9811757846' },
    email: { type: String, default: 'ttofficesolutions786@gmail.com' },
    address: { type: String, default: '1-10-72/5/1/A, Cheekoti Gardens,\nBegumpet, Hyderabad - 500 016,\nTelangana, India.' },
    logoUrl: { type: String, default: '/src/assets/logo.png' },
    companyName: { type: String, default: 'T&T OFFICE SOLUTIONS' },
    instagramUrl: String,
    facebookUrl: String,
    twitterUrl: String,
    linkedinUrl: String,
    youtubeUrl: String,
    carouselImages: { type: [String], default: [] },

    // CMS Fields
    homePageTitle: { type: String, default: 'Our Best Sellers' },
    brandSelectionTitle: { type: String, default: 'Select a Brand' },
    footerText: { type: String, default: '© 2024 T&T Office Solutions. All rights reserved.' },

    // Footer Links
    footerLinks: {
        type: [{ label: String, url: String }],
        default: [
            { label: 'Document Shredders', url: '/select-brand/document-shredders' },
            { label: 'Laminators', url: '/select-brand/laminators' },
            { label: 'Binders', url: '/select-brand/laminators' },
            { label: 'Pet Bottle Shredders', url: '/select-brand/app-shredders' }
        ]
    },

    // About Us Page
    aboutPageHeading: { type: String, default: 'About Us' },
    aboutPageHeadingColor: { type: String, default: '#111111' },
    aboutPageSubHeading: { type: String, default: 'T&T OFFICE SOLUTIONS' },
    aboutPageSubHeadingColor: { type: String, default: '#1a56db' },
    aboutUsText: { type: String, default: 'Start your journey with T&T OFFICE SOLUTIONS, a leader in office automation.\nWe are committed to providing widespread solutions for document presentation and protection.' },
    aboutPageExtra1: { type: String, default: 'Our products are designed with precision and durability in mind, serving thousands of satisfied customers across India. We are committed to the highest standards of quality in our manufacturing and service.' },
    aboutPageExtra2: { type: String, default: 'Our Prestigious Customers: Government organizations, Banks, Corporate Offices, and Educational Institutions trust T&T OFFICE SOLUTIONS for their shredding and laminating needs.' },

    // Contact Page
    contactPageHeading: { type: String, default: 'Contact Us' },
    contactPageHeadingColor: { type: String, default: '#111111' },
    contactInfoHeading: { type: String, default: 'Get in Touch' },
    contactInfoHeadingColor: { type: String, default: '#1a56db' },
    contactInfoText: { type: String, default: 'Get in touch with us for any queries.' },
    contactFormHeading: { type: String, default: 'Quick Enquiry' },
    contactFormHeadingColor: { type: String, default: '#1a56db' },

    // Support Page
    supportPageHeading: { type: String, default: 'Support & Help Center' },
    supportPageHeadingColor: { type: String, default: '#111111' },
    supportPageSubtitle: { type: String, default: 'We are here to assist you with all your office automation needs.' },
    supportCallHeading: { type: String, default: 'Call Support' },
    supportCallHeadingColor: { type: String, default: '#111111' },
    supportCallText: { type: String, default: 'Speak directly with our service experts for immediate assistance.' },
    supportCallPhone1: { type: String, default: '+91 9811757846' },
    supportCallPhone2: { type: String, default: '+91-40-2776 4337' },
    supportEmailHeading: { type: String, default: 'Email Us' },
    supportEmailHeadingColor: { type: String, default: '#111111' },
    supportEmailText: { type: String, default: 'Send us your queries or service requests, and we\'ll get back to you.' },
    supportVisitHeading: { type: String, default: 'Visit Our Office' },
    supportVisitHeadingColor: { type: String, default: '#111111' },
    supportVisitText: { type: String, default: 'Drop by our office for a consultation or product demo.' },

}, { timestamps: true });

// We only need one document, so we can treat it as a singleton in the controller
module.exports = mongoose.model('SiteSettings', SiteSettingsSchema);
