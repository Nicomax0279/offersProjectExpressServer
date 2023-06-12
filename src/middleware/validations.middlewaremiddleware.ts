import { NextFunction, Request, Response } from "express"
import { options } from "../configs/envConfigs"
import jwt from 'jsonwebtoken'


export const validateToken = (req:Request, res:Response, next:NextFunction)=>{

    //@ts-ignore
    let token = req.header['x-access-token'] || req.headers['authorization']
    if(!token){
        res.status(400).json({error:"expected token"})
        return
    }

    if(token.startsWith("Bearer ")){
        token = token.slice(7,token.length)
    }
    if(token){
        jwt.verify(token,options.KEY,(error:any,user:any)=>{
            if(error){
                res.status(400).json({error:"validation token error"})
                return
            }else{
              
                //@ts-ignore            
                req.user = user
                next()
            }
        })
    }
}

// export const isAdmin = (req, res, next)=>{
//     //console.log(req.user)
//     if(req.user.admin == true){
//         next()
//     }else{
//         res.status(400).json({error:'admin status is necessary'})
//         return
//     }


// }
