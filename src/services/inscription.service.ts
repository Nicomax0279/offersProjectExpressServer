import { inscription } from "../interfaces/inscription";
import { inscriptionManager, offerManager } from "../persistence/DAO/index";


export const postinscription = async (inscription:inscription,userCareer:string)=>{

    try {

       if (!await inscriptionManager.exist(inscription.offerID,inscription.userID)){ 
        
            const offerCareer = await offerManager.getCareerById(inscription.offerID)
            if(offerCareer == userCareer ){
                console.log(inscription)
                await inscriptionManager.save(inscription)
                return {Response: "inscription created successfully"}
            }else{ throw new Error("career validation error")}
        
            
       }else{throw new Error("inscription replicate error")}
       


    } catch (error) {

        throw  error
    }



}
export const  getUsersByOfferID = async (companyID:number,offerID:number)=>{

    try {
        const users = await inscriptionManager.getUsersByOfferId(offerID)
        return users

    } catch (error) {

        throw  error
    }}
