import { Router } from "express";
import { authRouter } from "./apiRoutes/auth.routes";
import { offerRouter } from "./apiRoutes/offer.routes";
import { userRouter } from "./apiRoutes/user.routes";
const mainRouter = Router();

mainRouter.use('/api/auth',authRouter)
mainRouter.use('/api/offer',offerRouter)
mainRouter.use('api/user',userRouter)
export default mainRouter;