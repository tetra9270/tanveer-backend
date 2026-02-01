const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Login Route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Simple plain text password check for this stage (should use bcrypt in prod)
        // Check if admin user exists, if not create default
        let user = await User.findOne({ username });
        if (!user && username === 'admin' && password === 'admin123') {
            user = new User({ username, password });
            await user.save();
        }

        if (user && user.password === password) {
            // Return simple success or token (mocking token for now)
            res.json({ success: true, token: 'mock-jwt-token', user: { username: user.username } });
        } else {
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

module.exports = router;
