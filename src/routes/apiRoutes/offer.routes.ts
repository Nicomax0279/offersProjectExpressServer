import { Router } from "express";
import * as offerController from '../../controllers/offer.controller'
const offerRouter = Router()

    offerRouter.get('/',offerController.getOffers)
    offerRouter.post('/',offerController.postOffer)






export {offerRouter}