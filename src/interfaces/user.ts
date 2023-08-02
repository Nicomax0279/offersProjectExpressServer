export interface LoginUser{
    username:string;
    password:string;
}
export interface User{
    id?:number;
    password?:string;
    username:string;
    names:string;
    surnames:string;
    birthdate:Date;
    career:string;
    description:string;
    img?:string;
    created_at:Date;
    updated_at:Date;
    active?:boolean;
}
export interface jwtuser{
    username:string;
    userId:number;
    role:'user'|'company';
    career:string;
}