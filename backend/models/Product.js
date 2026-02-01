const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true }, // Manual ID
    category: { type: String, required: true }, // e.g. "Document Shredders"
    subcategory: { type: String }, // e.g. "Desk Side", "Departmental"
    brand: { type: String, default: 'Other' }, // Antiva, Avanti, etc.
    title: { type: String, required: true },
    subtitle: String,
    specs: String, // Keep for backward compatibility or simple display
    image: String, // URL
    description: String,
    videoLink: String,
    brochureLink: String,
    features: [String], // Array of strings
    specifications: { type: Map, of: String }, // Flexible key-value pairs
    isAvailableOnGeM: { type: Boolean, default: false } // Inferred from subtitle
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
