import { Request, Response } from "express";
import * as companyService from '../services/company.service'
import { jwtCompany } from "../interfaces/company";

export const getCompany =  async(req:Request,res:Response) => {
    try {
        //@ts-ignore
        const jwt:jwtCompany = req.user
      
        const company = await companyService.getCompany(jwt.userId) 
        res.status(200).json(company)
    } catch (error) {
        res.status(400).json(`${error}`)
    }   



}