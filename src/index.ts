import express from 'express';
import os from 'os';
import cluster from 'cluster'
//myModules
import { options } from './configs/envConfigs';
import {logger} from './logs/logger'
const app = express();


app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 


const MODE = options.MODE
if(MODE === "CLUSTER" && cluster.isPrimary ){
    const cpus = os.cpus().length - 6
    for (let index = 0; index < cpus; index++) {
        cluster.fork()       
    }

    cluster.on('exit',(worker)=>{
        logger.error(`El proceso ${worker.id} FALLO`)
        cluster.fork()
    })
}else{
    app.listen(options.PORT, () => logger.info(`listening on port ${options.PORT}`))
}

app.listen(options.PORT,()=>{
    console.log(`Server listening on PORT:${options.PORT}`);
})



