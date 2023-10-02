import { SQLManager } from "../managers/SQLManager";

export  class CareerManager extends SQLManager {
    constructor(options:any,tableName:string){
        super(options,tableName)
    }
   
    
}