import knex from "knex";
import { options } from "../../configs/envConfigs";



const database = knex(options.sqlite)

const op = async()=>{
    const tableExists = await database.schema.hasTable("company")
    ////create table
    if(tableExists){
       await database.schema.dropTable("company")
    }
   await database.schema.createTable("company",table=>{
        table.increments('id')
        table.string("username",50).unique()
        table.string("password",30)
        table.boolean("active").defaultTo(true)
        table.string("name",50).unique()
        table.string("description",250)
        table.timestamps(true,true)
    })

     //await database.from("user").insert(defaultProducts)


    database.destroy()

}
op()
