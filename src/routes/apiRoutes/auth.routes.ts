import { Router } from "express";
import * as authController from '../../controllers/auth.controller'
import { validateToken } from "../../middleware/validations.middlewaremiddleware";
const authRouter = Router()

authRouter.post('/login',authController.loginUser)
authRouter.post('/signup',authController.signUpUser)
authRouter.post('/verifies',authController.varifies)






export  {authRouter}