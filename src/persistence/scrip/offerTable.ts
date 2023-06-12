import knex from "knex";
import { options } from "../../configs/envConfigs";
import { offer } from "../../interfaces/offer";



const database = knex(options.sqlite)

const op = async()=>{
    const tableExists = await database.schema.hasTable("offer")
    ////create tables
    if(tableExists){
       await database.schema.dropTable("offer")
    }
   await database.schema.createTable("offer",table=>{
        table.increments('id')
        table.string("title",30)
        table.boolean("active").defaultTo(true)
        table.string("description",300)
        table.string("career",30)
        table.string("company",30).references('name').inTable("company")
        table.string("text",600)
        table.string("modality",20).checkIn(['presencial','hibrido','remoto'])
        table.timestamps(true,true)
    })
    // await database.from("offer").insert(defaultOffer)



    database.destroy()

}
op()
