import express from 'express';
import multer from 'multer';
import path from 'path';

const router = express.Router();
const uploadDirectory = path.join(__dirname, '../images');

const storage = multer.diskStorage({
  destination: uploadDirectory,
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname);
    const fileName = `${Date.now()}_${Math.floor(Math.random() * 1000)}${ext}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

router.post('/', upload.single('image'), (_req, res) => {
  res.status(200).json({ message: 'Image uploaded successfully' });
});

export default router;
