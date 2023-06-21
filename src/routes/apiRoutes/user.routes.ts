import { Router } from 'express'
import * as userController from "../../controllers/user.controller";


const userRouter = Router()

userRouter.get("/",userController.getUser);
userRouter.get("/myUser",userController.getMyUser)
userRouter.put("/myUser",userController.putMyUser)


    


export {userRouter}