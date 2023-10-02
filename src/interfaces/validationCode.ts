export interface ValidationCode {
    id?:number
    code: string;
    userId: number;
    expirationDate: Date;
  }