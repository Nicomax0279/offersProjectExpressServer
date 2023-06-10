import { userManager } from "../persistence/DAO/index"
import jwt from "jsonwebtoken"
import { options } from "../configs/envConfigs.js"
import bcrypt from 'bcrypt'
import { LoginUser, User } from "../interfaces/user.js"
export const loginUser = async(user:LoginUser)=>{
    try {
        const founduser = await userManager.getbyUsername(user.username)
        
        if(founduser){
            if(await bcrypt.compare(user.password,founduser.password)){
                
                const token = generateToken({username : user.username , userId : founduser.id})
                return {token: token}
            } else{
                throw new Error("credentials error")
            }
            }else{
                throw new Error("email not registered")  
            }   
    } catch (error) {
        throw error
    }

}
export const signUpUser = async(user:User)=>{
    try {
        const foundUser = await userManager.getbyUsername(user.username)
        
        if(foundUser){
            throw new Error("this email is already registered");     
        }else{
            user.password = await bcrypt.hash(user.password,5)
            await userManager.save(user)
            return({Response:"signup successfully"})
        }
    } catch (error) {
        throw error
    }


}
export const verifiesToken = async (token:string) => {
 
    if(!token){
        return false
    }
    if(token.startsWith("Bearer ")){
        token = token.slice(7,token.length)
    }
    if(token){
        jwt.verify(token,options.KEY,(error:any,user:any)=>{
            if(error){             
                return false
            }else{
                return true
            }
        })
    }
}

const generateToken = (user:object)=>{
    const KEY = options.KEY
    return jwt.sign(user,KEY,{expiresIn:'5h'})


}