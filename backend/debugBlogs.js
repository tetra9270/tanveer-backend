const mongoose = require('mongoose');
const Blog = require('./models/Blog');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log('Connected. Fetching blogs...');
        const blogs = await Blog.find({});
        console.log('Found', blogs.length, 'blogs.');
        blogs.forEach(b => {
            console.log(`_id: ${b._id}, id: ${b.id}, Title: ${b.title}`);
        });
        mongoose.disconnect();
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
