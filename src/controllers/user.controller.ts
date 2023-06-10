import { Request, Response } from "express";
import * as userService from "../services/user.service";

export const getMyUser =  async(req:Request,res:Response)=>{
    
    try {
        //@ts-ignore
        const username = req.user.username;
        const user = await userService.getUserByUsername(username);
        res.status(200).json(user)
    
    } catch (error) {
        res.status(400).json(`${error}`)
    }
   
    

}
export  const putMyUser  =  async(req:Request,res:Response)=>{
    
    try {
        //@ts-ignore
        const userId = req.user.userId;
        const user = req.body;
        const response = await userService.putById(userId,user);
        res.status(200).json(response)
    
    } catch (error) {
        res.status(400).json(`${error}`)
    }
   
    

}
export const getUser = async (req:Request,res:Response)=>{
    try {
        const {username} = req.params
        let user;
        if(username){user = await userService.getUserByUsername(username)}
        else{user = await userService.getAll()}
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json(`${error}`)
    }
    
    

}