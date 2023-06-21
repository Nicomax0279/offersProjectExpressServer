
import { User } from "../interfaces/user";
import { userManager } from "../persistence/DAO/index";



export const getUserByUsername = async (username:string) =>{
    try {
        const user = await userManager.getbyUsername(username);
        return user
    } catch (error) {
        throw error
    }

}
export const putById = async (id:number, user:User)=>{
    try {
        
        await userManager.putById(id,user);
        return {success : "user update successfully"}
    } catch (error) {
        throw error
    }


}
export const getAll =async () => {
    try {
        const users = await userManager.getAll();
        return users
    } catch (error) {
        throw error
    }
}