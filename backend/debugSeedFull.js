const mongoose = require('mongoose');
require('dotenv').config();

// Define Schemas exactly as in models
const ProductSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    subcategory: { type: String },
    brand: { type: String, default: 'Other' },
    title: { type: String, required: true },
    subtitle: String,
    specs: Object,
    image: String,
    description: String,
    videoLink: String,
    brochureLink: String,
    keyFeatures: [String],
    specifications: { type: Map, of: String },
    isAvailableOnGeM: { type: Boolean, default: false }
}, { timestamps: true });

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

const BlogSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: String,
    date: String,
    image: String
}, { timestamps: true });

const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

// Connection
const MONGO_URI = 'mongodb+srv://tetra9270_db_user:02GjyJeDMwQzRNjU@cluster0.3himvhv.mongodb.net/tanveer_db?retryWrites=true&w=majority&appName=Cluster0';

// Data Helpers
const createModel = (id, title, subtitle, specs, description = "", keyFeatures = []) => ({
    id, title, subtitle, description, image: "/assets/shredders.png", category: "Document Shredders", subcategory: "Office", specs, keyFeatures, brochureLink: "#", videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ"
});

const createAppModel = (id, title, subtitle, specs, description = "", keyFeatures = []) => ({
    id, title, subtitle, description, image: "/assets/application-shredders.png", category: "Special Application", subcategory: "Industrial", specs, keyFeatures, brochureLink: "#", videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ"
});

const createLaminatorModel = (id, title, subtitle, specs, description = "", keyFeatures = []) => ({
    id, title, subtitle, description, image: "/assets/binders-and-laminators.png", category: "Laminators", subcategory: "Office", specs, keyFeatures, brochureLink: "#", videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ"
});

async function runSeed() {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(MONGO_URI);
        console.log('Connected!');

        // Data (Snippet of full list)
        const productsObj = {
            "antiva-ps-225": {
                id: "antiva-ps-225",
                title: "ANTIVA PS 225",
                subtitle: "DESK SIDE DOCUMENT SHREDDER",
                description: "Test Description",
                image: "/assets/shredders.png",
                category: "Document Shredders",
                subcategory: "Desk Side",
                keyFeatures: ["Feature 1", "Feature 2"],
                specs: { "Key": "Value" }
            },
            // Test one model using helper
            "antiva-test-helper": createModel("test-helper", "Test Helper", "Test Sub", { "Test": "Spec" }, "Desc", ["Feature A"])
        };

        const shredders = Object.values(productsObj);

        console.log(`Attempting to insert ${shredders.length} products...`);

        // Use insertMany with ordered: false to continue on error if we want, but default is true (stop on error)
        try {
            await Product.deleteMany({});
            console.log("Cleared existing products.");

            await Product.insertMany(shredders);
            console.log("Inserted products successfully!");

        } catch (insertErr) {
            console.error("Insertion Failed!");
            console.error(insertErr); // This will show validation errors
            if (insertErr.writeErrors) {
                insertErr.writeErrors.forEach(e => console.error(e.err));
            }
        }

    } catch (err) {
        console.error('General Error:', err);
    } finally {
        await mongoose.disconnect();
    }
}

runSeed();
