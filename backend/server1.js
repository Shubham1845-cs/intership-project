{/* 
require('dotenv').config();         // 1. Load .env variables
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const authRoutes = require('./routes/authRoutes');
const fileRoutes = require('./routes/fileRoutes');

const app = express();

// 2. Middleware
app.use(express.json());           // parse JSON bodies
app.use(cors());                   // allow CORS for all routes

// 3. Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(' MongoDB connection error:', err));

// 4. Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/file', fileRoutes);

// 5. Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
*/}