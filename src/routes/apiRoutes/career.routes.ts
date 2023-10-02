import { Router } from "express";
import * as careerController from '../../controllers/career.controller'
const careerRouter = Router()



careerRouter.get('/',careerController.getAll)

export  {careerRouter}