import { Router } from ('express')
import albumController from "../controllers/albumController";

export const albumRouter = Router();


albumRouter.get('/', albumController.index)

