const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT; // Fallback to 8080 if process.env.PORT is blank

// ==========================================
// 1. GLOBAL MIDDLEWARE (Order is Crucial)
// ==========================================
app.use(cors()); // FIRST: Allow cross-origin requests for everything below
app.use(express.json()); // Parse incoming JSON
app.use(express.urlencoded({ extended: true })); // Parse incoming form-data text fields

// ==========================================
// 2. STATIC STATIC ASSETS SERVING
// ==========================================
// Expose the uploads folder publicly AFTER CORS is applied
app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));
// ==========================================
// 3. ROUTE DEFINITIONS
// ==========================================
const userRoutes = require('./route/userroute');
const productRoutes = require('./route/productroute');
const cartRoutes = require('./route/cartroute');
const orderRoutes = require('./route/orderpayment');

app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
app.use('/orders', orderRoutes);

// ==========================================
// 4. DATABASE & SERVER START
// ==========================================
mongoose.connect('mongodb://localhost:27017/ecommerce')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server listening at: http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });