import knex from "knex";
import { options } from "../../configs/envConfigs";
import { User } from "../../interfaces/user";

//const defaultProducts:User[] =[{id:1,username:'test2@itbeltran.com.ar', password:"test2",birthdate:new Date(),career:"analista de sistemas" ,name:"carlos",surname:"perez"}]
const database = knex(options.sqlite)

const op = async()=>{
    const tableExists = await database.schema.hasTable("user")
    ////create table
    if(tableExists){
       await database.schema.dropTable("user")
    }
   await database.schema.createTable("user",table=>{
        table.increments('id')
        table.string("username",50).unique()
        table.string("password",30)
        table.string("name",50)
        table.string("surname",50)
        table.string("career",20)
        table.string("description",400)
        table.boolean("active").defaultTo(true)
        table.date("birthdate")
        table.timestamps(true,true)  
    })
    //await database.from("user").insert(defaultProducts)



    database.destroy()

}
op()
