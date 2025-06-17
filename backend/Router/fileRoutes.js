import express from 'express';
import {protect} from '../Middleware/authMiddleware.js';
import { uploadandparse } from '../controllers/fileController.js';
import upload from '../Middleware/uploadMiddleware.js'

const router = express.Router();
router.post(
  '/upload',
  protect,                 // ensure user is logged in
  upload.single('file'),   // handle one file with field name 'file'
  uploadandparse
);

export default router;
