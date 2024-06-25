import express from 'express';
import userRoutes from './routes/userRoute';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/healthcheck', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`EBuddy backend listening on port ${port}`);
});
