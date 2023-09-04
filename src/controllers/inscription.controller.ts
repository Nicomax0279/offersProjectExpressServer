import { Request, Response } from "express";
import * as incriptionService from '../services/inscription.service'
import { jwtuser } from "../interfaces/user";
import {inscription} from "../interfaces/inscription"
export const postIncription = async(req:Request,res:Response)=>{
    try{
      //@ts-ignore
         let jwt:jwtuser = req.user
         let inscription:inscription = {offerID:req.body.offerID,userID:jwt.userId}
         let response = await incriptionService.postinscription(inscription,jwt.career);
       
         res.json(response);
  
     } catch (error) {
     
      res.status(400).json(`${error}`)
     }
     
}
export const getUsers =  async (req:Request,res:Response)=>{

   try {
       //@ts-ignore
      const companyID = req.user.userId;

      
      const response =  await incriptionService.getUsersByOfferID(companyID,Number(req.params.id))
      res.status(200).json(response)      

       

   } catch (error) {
     
       res.status(400).json(`${error}`)
   }

}

