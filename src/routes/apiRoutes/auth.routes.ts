import { Router } from "express";
import * as authController from "../../controllers/auth.controller";
const authRouter = Router();

authRouter.post("/login", authController.loginUser);
authRouter.post("/signup", authController.signUpUser);
authRouter.post("/verifies", authController.varifies);

authRouter.post("/loginCompany", authController.loginCompany);
authRouter.post("/activateUser", authController.activateUser);
authRouter.post("/changePassword", authController.changePassword);
authRouter.post("/generateCode", authController.generateCode);
export { authRouter };
