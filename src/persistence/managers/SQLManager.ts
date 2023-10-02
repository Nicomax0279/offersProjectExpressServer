import knex, { Knex } from "knex"

class SQLManager{
    protected tableName:string = ""; 
    protected database:Knex;
    constructor(options:object,tableName:string){
        this.tableName = tableName
        this.database = knex(options);
        this.test()
    }
    async test(){
        try {
         await this.database.from(this.tableName).select("id").limit(1)
        } catch (error) {
            throw error
        }
    } 
    async save(object:object){
        try {
            await this.database.from(this.tableName).insert(object)

        } catch (error) {
            throw error
        }
    }
    async getAll(){
        try {
            const result = await this.database.from(this.tableName).select("*")                
            const parseResult = result.map((elm: any)=>({...elm}));
            return parseResult

        } catch (error) {
            throw error
        }
    }
    async getById(id:number){
        try {
            const result =  await this.database.from(this.tableName).select("*").where("id",id)
            const parseResult = result.map((elm: any)=>({...elm}))[0];
            return parseResult
        } catch (error) {
            throw error
        }
    }
    async deleteById(id:number){
        try {
            await this.database.from(this.tableName).del().where("id",id)
        } catch (error) {
            throw error
        }
        
    }
    async deleteAll(){
        try {
            await this.database.from(this.tableName).del()
        } catch (error) {
            throw error
        }
        
    }
    async putById(id:number,object:object){
        try {  
            await this.database.from(this.tableName).update(object).where("id",id)
        } catch (error) {
            throw error
        }
      
    }
    async getby(by:string,value:string){
        try {
            const result =  await this.database.from(this.tableName).select("*").where(`${by}`,value)
            const parseResult = result.map((elm: any)=>({...elm}));
            return parseResult
        } catch (error) {
            throw error
        }

    }

}

export { SQLManager}
