const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('MongoDB Connection Error:', err));

// Routes (Placeholder for now)
app.get('/', (req, res) => {
    res.send('Avanti API is running');
});

// Import Routes
const productRoutes = require('./routes/products');
const blogRoutes = require('./routes/blogs');
const authRoutes = require('./routes/auth');
const settingRoutes = require('./routes/settings');
const uploadRoutes = require('./routes/uploadRoutes');

app.use('/api/products', productRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/settings', settingRoutes);
app.use('/api/upload', uploadRoutes);

// Serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
