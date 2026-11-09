import express from 'express'
import { albumRouter } from './routes/albumRouter.js';

const app = express();

app.use(express.json())
app.use('/api/albums', albumRouter)

export default app;