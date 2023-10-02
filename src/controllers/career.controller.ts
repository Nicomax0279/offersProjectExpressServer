import { Request, Response } from "express";
import * as careerService from '../services/career.service'

export const getAll = async(req:Request,res:Response)=>{
    try{
        let response = await careerService.getAll()
         res.send(response);
 
 
     } catch (error) {
         
        res.status(400).json(`${error}`)
     }
}