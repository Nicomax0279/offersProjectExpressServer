
import { offer } from "../../interfaces/offer"
import { SQLManager } from "../managers/SQLManager"

export  class OfferManager extends SQLManager {
    constructor(options:any,tableName:string){
        super(options,tableName)
    }

  
     async getbyCareer(career:string | undefined = undefined):Promise<offer[]>{
        try {
            const query = this.database.from(this.tableName).select(`${this.tableName}.*`,'company.name','company.logo').innerJoin('company','company.id',`${this.tableName}.companyID`).orderBy(`${this.tableName}.updated_at`,'asc').where(`${this.tableName}.active`,1);
            let result
            if(career){
                result = await query.where('career',career)
            }else{
                result = await query
            }       
            
            const parseResult = result.map((elm: any)=>({...elm}));
        
            return parseResult
        } catch (error) {
            
            throw error
        }
    }
    async getOffersByCompany(companyID:Number):Promise<offer[]>{
        try {
            //,`count(${inscriptionTable}.offerID)`
            const inscriptionTable = 'inscription'
            const result = await this.database.from(this.tableName).select(`${this.tableName}.*`).count(`${inscriptionTable}.id as inscriptions`).leftJoin(inscriptionTable,`${inscriptionTable}.offerID`,`${this.tableName}.id`).where(`${this.tableName}.companyID`,companyID)
            .groupBy(`${this.tableName}.id`).where(`${this.tableName}.active`,1);               
            const parseResult = result.map((elm: any)=>({...elm}));
        
            return parseResult
        } catch (error) {
           
            throw error
        }
    }
    async getCareerById(id:number){
        try {
            const result = await this.database.from(this.tableName).select(`career`).where('id',id);             
            const parseResult = result.map((elm: any)=>({...elm}))[0];
        
            return parseResult.career
        } catch (error) {
            //@ts-ignore
            throw error
        }
    }

}   