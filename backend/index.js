import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './Router/authRoutes.js'
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import fileRoutes from './Router/fileRoutes.js';
import contactRouter from './Router/contactRouter.js'

dotenv.config();
console.log("JWT_SECRET is:", process.env.JWT_SECRET);

const app = express();
const port = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI;

//


app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// middleware
app.use(cors());
app.use(express.json());


// mount routes
app.use('/api/auth',authRoutes);
app.use('/api/file', fileRoutes);
app.use('/api/contact',contactRouter);

// connect to MongoDB and start server
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log(' Connected to MongoDB successfully!');
  app.listen(port, () => {
    console.log(` Server is running at http://localhost:${port}`);
  });
})
.catch((error) => {
  console.error(' Failed to connect to MongoDB:', error.message);
});
