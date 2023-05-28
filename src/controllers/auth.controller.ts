import { Request, Response } from "express";
import * as authService from '../services/auth.service'
import { User } from "../interfaces/user";
export const loginUser = async(req:Request,res:Response)=>{
    try{

        let response = await authService.loginUser(req.body)
         res.send(response);
 
 
     } catch (error) {
         
        res.status(400).json(`${error}`)
     }
}

export const signUpUser = async(req:Request,res:Response)=>{
    try {
       
        const user:User = req.body
        
        const response = await authService.signUpUser(user)
        res.json(response)
    } catch (error) {
        res.status(400).json(`${error}`)
    }

}

export const varifies= async(req:Request,res:Response)=>{
    try {
        const token:string = req.body.token
        const response = await authService.verifiesToken(token)
        res.json(response)

    } catch (error) {
        res.status(400).json(`${error}`)
    }
}