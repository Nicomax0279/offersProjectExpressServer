import { Router } from "express";
import { authRouter } from "./apiRoutes/auth.routes";
import { offerRouter } from "./apiRoutes/offer.routes";
import { userRouter } from "./apiRoutes/user.routes";
import { validateToken } from "../middleware/validations.middlewaremiddleware";
const mainRouter = Router();

mainRouter.use('/api/auth',authRouter)
mainRouter.use('/api/offer',validateToken,offerRouter)
mainRouter.use('/api/user',validateToken,userRouter)
export default mainRouter;