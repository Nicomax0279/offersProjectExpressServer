import { Router } from "express";
import { authRouter } from "./apiRoutes/auth.routes";
import { offerRouter } from "./apiRoutes/offer.routes";
import { userRouter } from "./apiRoutes/user.routes";
import { validateToken } from "../middleware/validations.middlewaremiddleware";
import { inscriptionRouter } from "./apiRoutes/inscription.routes";
import { companyRouter } from "./apiRoutes/company.routes";
const mainRouter = Router();

mainRouter.use('/api/auth',authRouter)
mainRouter.use('/api/offer',validateToken,offerRouter)
mainRouter.use('/api/user',validateToken,userRouter)
mainRouter.use('/api/inscription',validateToken,inscriptionRouter)
mainRouter.use('/api/company',validateToken,companyRouter)
export default mainRouter;