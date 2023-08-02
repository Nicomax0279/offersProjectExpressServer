import {Request, Response } from "express";

import * as offerService from '../services/offer.service'
import { offer } from "../interfaces/offer";
import { jwtuser } from "../interfaces/user";

export const getOffersFilter = async (req:Request, res:Response)=>{
    try {
   
    //@ts-ignore
    if(req.user.role == "company"){
      
        const offers = await getOffersCompany(req,res);
        res.status(200).json(offers)
        return
    }else{
       
        const offers = await getOffers(req,res)
        res.status(200).json(offers)
        return 
    }
    } catch (error) {
        res.status(400).json(`${error}`)
    }}


export const getOffersCompany = async (req:Request,res:Response)=>{
    try {
        //@ts-ignore
        const companyID = req.user.userId
        const {query} = req
        const offers =  await offerService.getOffersCompany(companyID);
        return offers
        
    } catch (error) {
       
           res.status(400).json(`${error}`)
    }
}
export const getOffers = async (req:Request,res:Response)=>{
    try {
        //@ts-ignore
        const jwt:jwtuser = req.user
        const {query} = req
        const offers =  await offerService.getOffers(jwt.career);
        return offers
       
    } catch (error) {
           res.status(400).json(`${error}`)
    }




}

export const postOffer = async (req:Request,res:Response)=>{
    try {
        const offer:offer = req.body 
        
        //@ts-ignore
        offer.companyID = req.user.userId;
        const response =  await offerService.postOffer(offer);
        
        res.status(200).json(response)
    } catch (error) {
        
        res.status(400).json(`${error}`)
    }

    


}
export const getOfferById  = async (req:Request,res:Response)=>{
    try {
        const offerID = Number(req.params.id)
    
        const response =  await offerService.getOfferById(offerID);
        
        res.status(200).json(response)
    } catch (error) {
      
        res.status(400).json(`${error}`)
    }

    


}

export const putOfferById = async (req:Request,res:Response)=>{
    try {
        //@ts-ignore
        const companyID = req.user.userId;
        const offerID = Number(req.params.id)

        
        const offer:offer = req.body 
        const response =  await offerService.putOfferById(offerID,offer,companyID);
        
        res.status(200).json(response)
    } catch (error) {
      
        res.status(400).json(`${error}`)
    }

}

export const deleteOfferById = async (req:Request,res:Response)=>{
    try {
        //@ts-ignore
        const companyID = req.user.userId;
        const offerID = Number(req.params.id)
      
        const response =  await offerService.deleteOfferById(offerID,companyID);
        
        res.status(200).json(response)
    } catch (error) {
      
        res.status(400).json(`${error}`)
    }

}