import { Router } from 'express'
import albumController from "../controllers/albumController.js";

export const albumRouter = Router();


albumRouter.get('/', albumController.index)
albumRouter.post('/', albumController.create)
albumRouter.patch('/:album_id', albumController.update)
albumRouter.delete('/:album_id', albumController.destroy)


