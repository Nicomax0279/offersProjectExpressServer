import { Router } from "express";
import * as inscriptionController from '../../controllers/inscription.controller'
import { isCompany } from "../../middleware/validations.middlewaremiddleware";
const inscriptionRouter = Router()


inscriptionRouter.post('/',inscriptionController.postIncription)
inscriptionRouter.get('/:id/users',isCompany,inscriptionController.getUsers)

export  {inscriptionRouter}