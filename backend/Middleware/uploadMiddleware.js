// middleware/uploadMiddleware.js

import multer from 'multer'
import path from 'path'

// 1. Define storage strategy (in memory for parsing directly)
const storage = multer.memoryStorage();

// 2. File filter: accept only Excel files
const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  if (ext === '.xlsx' || ext === '.xls') {
    cb(null, true);
  } else {
    cb(new Error('Only Excel files are allowed (.xls, .xlsx)'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5 MB limit
});

export default upload;
