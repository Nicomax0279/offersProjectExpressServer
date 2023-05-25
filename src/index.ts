import express from 'express';


//myModules
import { options } from './configs/envConfigs';
const app = express();


app.listen(options.PORT,()=>{
    console.log(`Server listening on PORT:${options.PORT}`);
})



