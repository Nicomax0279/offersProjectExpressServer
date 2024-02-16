import { compareSync } from "bcrypt";
import { offer } from "../interfaces/offer";
import { companyManager, offerManager } from "../persistence/DAO"
import { filters } from "../interfaces/body";



export const getOffers = async (filters:filters,userId:number)=>{
    try {
        
       return await offerManager.getAllWithFilters(filters,userId)
       // return  await offerManager.getbyCareer(userCareer);
       
    } catch (error) {
        throw error
    }
}

export const postOffer = async(offer:offer)=>{
    try {
  
        await offerManager.save(offer);
        return {Response: "offer created successfully"}
    } catch (error) {
        throw error
    }
}

export const getOffersCompany = async (companyID:number)=> {
    try {
  
        const offers =  await offerManager.getOffersByCompany(companyID);
        return offers
    } catch (error) {
       
        throw error
    }
}

export const getOfferById = async (offerID:number)=>{

    try {
  
        const offer =  await offerManager.getById(offerID);
        return offer
    } catch (error) {
        throw error
    }





}

export const putOfferById = async (offerID:number,offer:offer,companyID:number)=>{

    try {
        
        if(await isItsOffer(offerID,companyID)){
            offerManager.putById(offerID,offer);
            return {Response: 'offer updated successfully'}
        }else{ throw new Error('offer property validation error ')}
        
        
    } catch (error) {
        throw error
    }

}
export const deleteOfferById = async (offerID:number,companyID:number)=>{

    try {
        
        if(await isItsOffer(offerID,companyID)){
            offerManager.putById(offerID,{active:0});
            return {Response: 'offer deleted successfully'}
        }else{ throw new Error('offer property validation error ')}
        
        
    } catch (error) {
        throw error
    }

}

export const isItsOffer = async (offerID:number,companyID:number)=>{
    try {
     
        const offer:offer = await offerManager.getById(offerID)
        return (offer.companyID == companyID) 
    } catch (error) {
        throw error
    }
}