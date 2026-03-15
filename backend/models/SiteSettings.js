const mongoose = require('mongoose');

const SiteSettingsSchema = new mongoose.Schema({
    phone: { type: String, default: '+91 9811757846' },
    email: { type: String, default: 'ttofficesolutions786@gmail.com' },
    address: { type: String, default: '' },
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
    aboutUsText: { type: String, default: 'Welcome to T&T Office Solutions. We provide the best office equipment.' },
    contactInfoText: { type: String, default: 'Get in touch with us for any queries.' },
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
    }
}, { timestamps: true });

// We only need one document, so we can treat it as a singleton in the controller
module.exports = mongoose.model('SiteSettings', SiteSettingsSchema);
