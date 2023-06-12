import express from 'express';
import os from 'os';
import cluster from 'cluster'
import cors from 'cors';
//myModules

import { options } from './configs/envConfigs';
import {logger} from './logger'
import mainRouter from './routes/index.routes';
const app = express();


app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 
app.use(cors())

//routes
app.use('/',mainRouter)

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




