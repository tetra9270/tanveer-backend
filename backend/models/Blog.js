const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: String,
    date: String, // Storing as string YYYY-MM-DD for simplicity matching frontend
    image: String
}, { timestamps: true });

module.exports = mongoose.model('Blog', BlogSchema);
