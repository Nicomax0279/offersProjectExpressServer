import { inscription } from "../interfaces/inscription";
import { inscriptionManager, offerManager } from "../persistence/DAO/index";


export const postinscription = async (inscription:inscription,userCareer:string)=>{

    try {
        console.log( await inscriptionManager.exist(inscription.offerID,inscription.userID))
       if (!await inscriptionManager.exist(inscription.offerID,inscription.userID)){ 
        
            const offerCareer = await offerManager.getCareerById(inscription.offerID)
            console.log(offerCareer)
            console.log(userCareer)
            if(offerCareer == userCareer ){
              
                await inscriptionManager.save(inscription)
                return {Response: "inscription created sucefully"}
            }else{ throw new Error("carrer validation error")}
        
            
       }else{throw new Error("inscription replicate error")}
       


    } catch (error) {

        throw  error
    }



}
export const  getUsersByOfferID = async (companyID:number,offerID:number)=>{

    try {
        const users = await inscriptionManager.getUsersByOfferId(offerID)
        console.log(users)
        return users

    } catch (error) {
       console.log(error)
        throw  error
    }}
