import {careerManager} from '../persistence/DAO/index'
export const  getAll = async ()=>{

    try {
        const  careers = await careerManager.getAll()
        return careers

    } catch (error) {

        throw  error
    }}
