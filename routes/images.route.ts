import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();
const imageDirectory = path.join(__dirname, '../images');

router.get('/', (_req, res) => {
  fs.readdir(imageDirectory, (err, files) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading images directory' });
    }
    const host = _req.get('host');
    const imageUrls = files.map((file) => `http://${host}/files/${file}`);

    res.status(200).json({ imageUrls });
  });
});

export default router;
