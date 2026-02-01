const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// Get All Blogs
router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create Blog
router.post('/', async (req, res) => {
    const blog = new Blog(req.body);
    try {
        const newBlog = await blog.save();
        res.status(201).json(newBlog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update Blog
router.put('/:id', async (req, res) => {
    try {
        const blog = await Blog.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        if (!blog) return res.status(404).json({ message: 'Blog not found' });
        res.json(blog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete Blog
router.delete('/:id', async (req, res) => {
    try {
        const blog = await Blog.findOneAndDelete({ id: req.params.id });
        if (!blog) return res.status(404).json({ message: 'Blog not found' });
        res.json({ message: 'Blog deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
