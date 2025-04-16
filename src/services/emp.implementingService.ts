import { Request, Response } from "express";
import { IEmpService } from "../interfaces/emp.service.interface";
import { inject, injectable } from "inversify";
import TYPES from "../inversify/types";
import { IEmpRepository } from "../interfaces/emp.repository.interface";
import { EmpImplementingRepository } from "../repositories/emp.implementingRepository";

@injectable()
export class EmpImplementingService /*implements IEmpService*/{
    constructor(
        @inject(TYPES.EmpImplementingRepository) private emprepository:EmpImplementingRepository
     ){}
   async createEmp(firstName:string,lastName:string,mobileNumber:string,email:string,age:number,gender:string,city:string): Promise<any> {
console.log("in service")
                return await this.emprepository.createEmp(firstName,lastName,mobileNumber,email,age,gender,city);
        
    }

    async hiiii(firstName:string,lastName:string,mobileNumber:string,email:string,age:number,gender:string,city:string): Promise<any> {
        console.log("in service")

                
            }

}