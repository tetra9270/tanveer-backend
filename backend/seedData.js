const mongoose = require('mongoose');
const Product = require('./models/Product');
const SiteSettings = require('./models/SiteSettings');
const Blog = require('./models/Blog');
require('dotenv').config();

// Mongoose Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected for Seeding'))
    .catch(err => console.log('MongoDB Connection Error:', err));

const seedProducts = async () => {

    // Blogs
    const blogs = [
        {
            id: '1',
            title: 'Why Shredding is Important for Data Security',
            content: 'In today’s digital age, physical document security is often overlooked. However, dumpster diving remains a common tactic for identity thieves...',
            author: 'Admin',
            date: '2023-10-25',
            image: 'https://placehold.co/600x400?text=Shredding+Security'
        },
        {
            id: '2',
            title: 'Choosing the Right Shredder for Your Office',
            content: 'Strip-cut, cross-cut, or micro-cut? The security level you need depends on the sensitivity of the documents you handle...',
            author: 'Admin',
            date: '2023-11-12',
            image: 'https://placehold.co/600x400?text=Office+Shredder'
        }
    ];

    // Products
    const shredders = [
        {
            id: "antiva-ps-225",
            category: "Document Shredders",
            subcategory: "Desk Side",
            title: "ANTIVA PS 225",
            subtitle: "DESK SIDE DOCUMENT SHREDDER",
            image: "/src/assets/shredders.png",
            features: [
                "Auto Start & Stop",
                "Cutters are made of high grade special alloy steel",
                "Rugged body all metals construction"
            ],
            specifications: { "Feed width": "225 mm", "Voltage": "220 V" }
        },
        { id: "antiva-ps-225-e", category: "Document Shredders", subcategory: "Desk Side", title: "ANTIVA PS 225 E", subtitle: "DESK SIDE DOCUMENT SHREDDER" },
        { id: "antiva-ps-240", category: "Document Shredders", subcategory: "Departmental", title: "ANTIVA PS 240", subtitle: "Departmental Office Shredder" },
        { id: "antiva-ps-300", category: "Document Shredders", subcategory: "Departmental", title: "ANTIVA PS 300", subtitle: "Departmental Shredder" },
        { id: "antiva-ps-400", category: "Document Shredders", subcategory: "Heavy Duty", title: "ANTIVA PS 400", subtitle: "Heavy Duty Shredder" },
        { id: "antiva-ps-500", category: "Document Shredders", subcategory: "Industrial", title: "ANTIVA PS 500", subtitle: "Industrial Shredder" },
        { id: "avanti-bs-300", category: "Multipurpose Shredders", subcategory: "Plastic Bottle", title: "AVANTI BS 300", subtitle: "Plastic Bottle Shredder" },
        { id: "avanti-pws-300", category: "Multipurpose Shredders", subcategory: "Plastic Bottle", title: "AVANTI PWS 300", subtitle: "Plastic Bottle Shredder" },
        { id: "avanti-dl-300", category: "Laminators", subcategory: "Pouch Laminator", title: "ANTIVA DL 300", subtitle: "Pouch Laminator" },
        { id: "avanti-dl-685", category: "Laminators", subcategory: "Roll Laminator", title: "ANTIVA DL 685", subtitle: "Roll Laminator" }
    ];

    try {
        await Product.deleteMany({});
        await Blog.deleteMany({}); // Clear existing blogs

        await Product.insertMany(shredders);
        await Blog.insertMany(blogs);

        console.log('Products and Blogs Seeded!');

        // Ensure Settings exist
        const settings = await SiteSettings.findOne();
        if (!settings) {
            await SiteSettings.create({});
            console.log('Settings Created!');
        }

        mongoose.disconnect();
    } catch (err) {
        console.error(err);
        mongoose.disconnect();
    }
};

seedProducts();
