
import { SQLManager } from "../managers/SQLManager";
import {User} from '../../interfaces/user'
export  class InscriptionManager extends SQLManager {
    constructor(options:any,tableName:string){
        super(options,tableName)
    }
    async exist(offerID:number,userID:number):Promise<boolean>{
        try {
            const existRaw = await this.database.from(this.tableName).select('id').where('offerID',offerID).where('userID',userID);
            const exist = existRaw.map((elm: any)=>({...elm}))[0];
            if(exist)return true
            else return false;
        } catch (error) {
            
            throw error;
        }
        

    }

    async getUsersByOfferId(offerID:number){
        try {
            
            const userTable = 'user';
            const rawResponse  = await this.database.from(this.tableName).select(`${userTable}.*`).innerJoin(userTable,`${userTable}.id`,`${this.tableName}.userID`)
            .where(`${this.tableName}.offerID`,offerID)
            let response = rawResponse.map((elm: User)=>({...elm}));
            response = response.map((user) => {
                const { password , ...responseWithoutPassword } = user;
                return responseWithoutPassword;
              });
              
            return response
        } catch (error) {
            throw error;
        }


    }
   
}