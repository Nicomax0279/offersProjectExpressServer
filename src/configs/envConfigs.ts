import * as dotenv from 'dotenv';
dotenv.config();
const env = process.env;
import path from 'path';

let filenames = path.join(__dirname, '../../db.sqlite');
export const options = {
    PORT : env.PORT || 8080,
    MODE : env.MODE || "FORK",
    sqlite: {client : "sqlite",
    connection:{
        filename: filenames
    }},
    Mysql:{client: "mysql",
    connection:{
        host : "127.0.0.1",
        user : env.SQLUser || 'root',
        password: env.SQLPassword || "",
        database: env.SQLDataBase || "Prod"
    }},
    KEY : env.KEY ||"eyJ1c2VybmFtZSI6IjZAaXRiZWx0cmFuLmNvbS5hc"
}