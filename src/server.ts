import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

const app = express();
const port = process.env.EXPRESS_PORT || 3000;

app.get('/', (_req, res) => {
  res.send('Server is running 🏃🏼‍♂️');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
