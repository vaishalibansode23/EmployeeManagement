import { Request,Response } from "express";

export interface IEmpService{
    createEmp(firstName:string,lastName:string,mobileNumber:string,email:string,age:number,gender:string,city:string): Promise<any>;
}