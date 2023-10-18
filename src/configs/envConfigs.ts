import * as dotenv from 'dotenv';
dotenv.config();
const env = process.env;
import path from 'path';

let filenames = path.join(__dirname, '../../db.sqlite');
export const options = {
    PORT : env.PORT || 8080,
    MODE : env.MODE || "FORK",
    MAXT : env.MAXT || 999, 
    DATABASE: env.DATABASE || 'SQLITE',
    sqlite: {client : "sqlite",
    connection:{
        filename: filenames
    }},
    Mysql:{client: "mysql2",
    connection:{
        host : env.HOST || "127.0.0.1",
        user : env.SQLUser || 'root',
        password: env.SQLPassword || "",
        database: env.SQLDataBase || "Prod"
    }},
    KEY : env.KEY ||"eyJ1c2VybmFtZSI6IjZAaXRiZWx0cmFuLmNvbS5hc",
    Mailer: {
        EMAIL_HOST:env.EMAIL_HOST || '',
        EMAIL_USER:env.EMAIL_USER || '',
        EMAIL_PASS:env.EMAIL_PASS || '',
        EMAIL_TEST:env.EMAIL_TEST || '',
        EMAIL_MODE:env.EMAIL_TEST || 'test',
        EMAIL_SERVICE:env.EMAIL_SERVICE || ''
    }
}