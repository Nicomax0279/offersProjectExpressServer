import { SQLManager } from "../managers/SQLManager";

export  class CompanyManager extends SQLManager {
    constructor(options:any,tableName:string){
        super(options,tableName)
    }
   
    async getbyUsername(username:string){

        let user = await super.getby("username",username)
        return user[0]
     }  
}