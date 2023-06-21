import { offer } from "../interfaces/offer";
import { offerManager } from "../persistence/DAO"



export const getOffers = ()=>{
    try {
        return offerManager.getAll();
    } catch (error) {
        throw error
    }
}

export const postOffer = async(offer:offer)=>{
    try {
  
        await offerManager.save(offer);
        return {Response: "offer created sucefully"}
    } catch (error) {
       
        throw error
    }
}
