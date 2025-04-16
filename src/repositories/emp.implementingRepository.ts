import { Request, Response } from "express";
import { IEmpRepository } from "../interfaces/emp.repository.interface";
import { injectable } from "inversify";
import { Emp } from "../models/emp.model";


@injectable()
export class 
EmpImplementingRepository /*implements IEmpRepository*/{
    async createEmp(firstName:string,lastName:string,mobileNumber:string,email:string,age:number,gender:string,city:string): Promise<any> 
    {
        const existingemp=Emp.findOne({email:email});
        console.log(existingemp);
        
        if(!existingemp)
        {
            const newEmp=new Emp({
                firstName:firstName,
                lastName:lastName,
                mobileNumber:mobileNumber,
                email:email,
                age:age,
                gender:gender,
                city:city
            })
          const emp = await newEmp.save()  
            return emp ;
        }
           
    }

}