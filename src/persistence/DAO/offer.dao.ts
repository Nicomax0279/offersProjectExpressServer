import { SQLManager } from "../managers/SQLManager"

export  class OfferManager extends SQLManager {
    constructor(options:any,tableName:string){
        super(options,tableName)
    }

    async getbyCareer(career:string){

        let user = await super.getby("career",career)
        return user[0]
     }  
}