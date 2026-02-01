const mongoose = require('mongoose');

const SiteSettingsSchema = new mongoose.Schema({
    phone: { type: String, default: '+91 85878 38635' },
    email: { type: String, default: 'info@tt-officesolutions.com' },
    address: { type: String, default: '' },
    logoUrl: { type: String, default: '/src/assets/logo.png' },
    companyName: { type: String, default: 'T&T OFFICE SOLUTIONS' },
    instagramUrl: String,
    facebookUrl: String,
    twitterUrl: String,
    carouselImages: { type: [String], default: [] },

    // CMS Fields
    homePageTitle: { type: String, default: 'Our Best Sellers' },
    brandSelectionTitle: { type: String, default: 'Select a Brand' },
    aboutUsText: { type: String, default: 'Welcome to T&T Office Solutions. We provide the best office equipment.' },
    contactInfoText: { type: String, default: 'Get in touch with us for any queries.' },
    footerText: { type: String, default: '© 2024 T&T Office Solutions. All rights reserved.' }
}, { timestamps: true });

// We only need one document, so we can treat it as a singleton in the controller
module.exports = mongoose.model('SiteSettings', SiteSettingsSchema);
