import * as dotenv from 'dotenv';
dotenv.config();
const env = process.env;

export const options = {
    PORT : env.PORT,
    MODE : env.MODE
}