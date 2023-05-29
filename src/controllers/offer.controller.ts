import { Request, Response } from "express";

import * as offerService from '../services/offer.service'
export const getOffers = (req:Request,res:Response)=>{
    try {
        const offers = offerService.getOffers();
        res.status(200).json(offers)
    } catch (error) {
           res.status(400).json(`${error}`)
    }




}