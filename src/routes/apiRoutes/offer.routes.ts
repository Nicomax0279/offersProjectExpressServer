import { Router } from "express";
import * as offerController from '../../controllers/offer.controller'
import { isCompany } from "../../middleware/validations.middlewaremiddleware";
const offerRouter = Router()

    offerRouter.get('/',offerController.getOffersFilter);
    offerRouter.post('/',isCompany,offerController.postOffer);
    offerRouter.get('/:id',isCompany,offerController.getOfferById);
    offerRouter.put('/:id',isCompany,offerController.putOfferById);
    offerRouter.delete('/:id',isCompany,offerController.deleteOfferById);



export {offerRouter}