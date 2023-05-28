import { Router } from "express";
import { authRouter } from "./apiRoutes/auth.routes";

const mainRouter = Router();

mainRouter.use('/api/auth',authRouter)


export default mainRouter;