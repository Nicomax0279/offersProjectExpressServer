export interface offer{
    id?:number;
    active?:boolean;
    title:string;
    company:string;
    description:string;
    career:string;
    updateDate:string;
    text?:string;
    modality?:'presencial'|'hibrida'|"virtual"|"remoto";
}
