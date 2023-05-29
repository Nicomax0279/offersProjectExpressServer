import { Router } from "express";
import * as offerController from '../../controllers/offer.controller'
const offerRouter = Router()

    offerRouter.get('/',offerController.getOffers)







export {offerRouter}