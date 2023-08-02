import { companyManager } from "../persistence/DAO";

export const getCompany = async(companyID:number)=>{
    try {
        const company = await companyManager.getById(companyID);
        return company

    } catch (error) {
        throw error
    }
    
}