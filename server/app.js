import express from 'express'
import cors from 'cors'
import { albumRouter } from './routes/albumRouter.js';

const app = express();

app.use(express.json())
app.use(cors())
app.use('/api/albums', albumRouter)

export default app;