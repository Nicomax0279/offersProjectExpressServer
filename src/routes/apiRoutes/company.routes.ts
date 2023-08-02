import { Router } from "express";
import { isCompany } from "../../middleware/validations.middlewaremiddleware";
import * as companyController from '../../controllers/company.controller'
const companyRouter = Router()

companyRouter.get('/myCompany',isCompany,companyController.getCompany)





export {companyRouter}