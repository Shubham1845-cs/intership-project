import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI;

const authRoutes = require('./routes/authRoutes');
const fileRoutes = require('./routes/fileRoutes');

// middleware
app.use(express.json());
app.use(cors());

// mount routes
app.use('/api/auth', authRoutes);
app.use('/api/file', fileRoutes);

// connect to MongoDB and start server
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Connected to MongoDB successfully!');
  app.listen(port, () => {
    console.log(`🚀 Server is running at http://localhost:${port}`);
  });
})
.catch((error) => {
  console.error('❌ Failed to connect to MongoDB:', error.message);
});
