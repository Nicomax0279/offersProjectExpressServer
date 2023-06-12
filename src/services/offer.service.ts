import { offer } from "../interfaces/offer";
import { offerManager } from "../persistence/DAO"



export const getOffers = ()=>{
    try {
        return offerManager.getAll();
    } catch (error) {
        throw error
    }
}
export const postOffer = (offer:offer)=>{
    try {
        return offerManager.save(offer);
    } catch (error) {
        throw error
    }
}
