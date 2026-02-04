const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
// MongoDB Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('MongoDB Connection Error:', err);
        // Retry connection logic could go here, or just exit/log
    }
};

// Connect to MongoDB
connectDB();

// Connection Events
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to DB Cluster');
});

mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

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
app.use('/api/blogs', blogRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/settings', settingRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/seed', require('./routes/seed'));

// Serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
