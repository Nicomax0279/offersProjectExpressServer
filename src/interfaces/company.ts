export interface IloginCompany{
    username:string;
    password:string;
}
export interface jwtCompany{
    username:string;
    userId:number;
    role:'user'|'company';
}
export interface company { 
    id?:number;
    username:string;
    password:string;
    name:string;
    description:string;
    logo:string;
    created_at:Date;
    updated_at:Date;
    active?:boolean
    



 } 