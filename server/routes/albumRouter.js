import { Router } from 'express'
import albumController from "../controllers/albumController.js";

export const albumRouter = Router();


albumRouter.get('/', albumController.index)

