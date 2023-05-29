import { Router } from "express";
import { authRouter } from "./apiRoutes/auth.routes";
import { offerRouter } from "./apiRoutes/offer.routes";

const mainRouter = Router();

mainRouter.use('/api/auth',authRouter)
mainRouter.use('/api/offer',offerRouter)

export default mainRouter;