import * as dotenv from 'dotenv';
dotenv.config();
const env = process.env;
import path from 'path';

let filenames = path.join(__dirname, "/../persistence/sqlite/db.sqlite");
export const options = {
    PORT : env.PORT || 8080,
    MODE : env.MODE || "FORK",
    sqlite: {client : "sqlite",
    connection:{
        filename: filenames
    }},
    KEY : env.KEY ||"eyJ1c2VybmFtZSI6IjZAaXRiZWx0cmFuLmNvbS5hc"
}