const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true }, // Manual ID
    category: { type: String, required: true }, // e.g. "Document Shredders"
    subcategory: { type: String }, // e.g. "Desk Side", "Departmental"
    brand: { type: String, default: 'Other' }, // Antiva, Avanti, etc.
    title: { type: String, required: true },
    subtitle: String,
    specs: Object, // Changed from String to Object to match frontend expectation
    image: String, // URL
    description: String,
    videoLink: String,
    brochureLink: String,
    keyFeatures: [String], // Changed from 'features' to match frontend 'keyFeatures'
    specifications: { type: Map, of: String }, // Flexible key-value pairs
    isAvailableOnGeM: { type: Boolean, default: false } // Inferred from subtitle
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
