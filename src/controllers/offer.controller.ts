import { Request, Response } from "express";

import * as offerService from '../services/offer.service'
import { offer } from "../interfaces/offer";
export const getOffers = async (req:Request,res:Response)=>{
    try {
        const offers =  await offerService.getOffers();
        
        res.status(200).json(offers)
    } catch (error) {
           res.status(400).json(`${error}`)
    }




}

export const postOffer = async (req:Request,res:Response)=>{
    try {
        const offer:offer = req.body 
        offer.company = 'theBest';
        const response =  await offerService.postOffer(offer);
        
        res.status(200).json(response)
    } catch (error) {
           res.status(400).json(`${error}`)
    }




}
