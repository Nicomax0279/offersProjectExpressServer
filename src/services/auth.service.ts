import { companyManager, userManager } from "../persistence/DAO/index"
import jwt from "jsonwebtoken"
import { options } from "../configs/envConfigs.js"
import bcrypt from 'bcrypt'
import { LoginUser, User, jwtuser } from "../interfaces/user.js"
import { IloginCompany,company, jwtCompany } from "../interfaces/company"
export const loginUser = async(user:LoginUser)=>{
    try {
        const founduser = await userManager.getbyUsername(user.username)
        if(founduser){
            if(await bcrypt.compare(user.password,founduser.password)){
                console.log(founduser)
                const token = generateTokenUser({username : user.username , userId : founduser.id , role:"user" , career:founduser.career})
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
            //@ts-ignore
            user.password = await bcrypt.hash(user.password, 5)
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

const generateTokenUser = (user:jwtuser)=>{
    const KEY = options.KEY
    return jwt.sign(user,KEY,{expiresIn:'5h'})


}
const generateTokenCompany = (company:jwtCompany)=>{
    const KEY = options.KEY
    return jwt.sign(company,KEY,{expiresIn:'5h'})


}





export const loginCompany = async(company:IloginCompany)=>{
    try {
       
        const foundcompany = await companyManager.getbyUsername(company.username)
        
        if(foundcompany){
            if(await bcrypt.compare(company.password,foundcompany.password)){
                
                const token = generateTokenCompany({username : company.username , userId : foundcompany.id , role:"company" })
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
export const signUpCompany = async(company:company)=>{
    try {
        const foundUser = await companyManager.getbyUsername(company.username)
        
        if(foundUser){
            throw new Error("this email is already registered");     
        }else{
            company.password = company.password || ""
            company.password = await bcrypt.hash(company.password,5)
            await companyManager.save(company)
            return({Response:"signup successfully"})
        }
    } catch (error) {
        throw error
    }


}