import { offerManager } from "../persistence/DAO"



export const getOffers = ()=>{
    try {
        return offerManager.getAll();
    } catch (error) {
        throw error
    }
}
