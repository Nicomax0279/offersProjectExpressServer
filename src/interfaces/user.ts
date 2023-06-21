export interface LoginUser{
    username:string;
    password:string;
}
export interface User{
    id?:number;
    password:string;
    username:string;
    name:string;
    surname:string;
    birthdate:Date;
    career:string;
    active:boolean;
    updated_at:Date;
    description:string;
    img:string;
}
export interface jwtuser{
    username:string
}