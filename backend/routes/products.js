const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get All Products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        // Return object keyed by ID to match frontend structure expectation if needed
        // But better to return array and let frontend handle keying if it wants
        // Current frontend expects object mapping 'id' -> 'model'
        const productsMap = {};
        products.forEach(p => {
            productsMap[p.id] = p;
        });
        res.json(productsMap);
        // Or return array: res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create Product
router.post('/', async (req, res) => {
    const product = new Product(req.body);
    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update Product
router.put('/:id', async (req, res) => {
    try {
        // Update by custom 'id' field, not _id
        const product = await Product.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete Product
router.delete('/:id', async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({ id: req.params.id });
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json({ message: 'Product deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
