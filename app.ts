import express from 'express';
import imagesRouter from './routes/images.route';
import uploadRouter from './routes/upload.route';
import path from 'path';
import logger from "morgan";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use('/files', express.static(path.join(__dirname, 'images')));

app.use('/images', imagesRouter);
app.use('/upload', uploadRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

