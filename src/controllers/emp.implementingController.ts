

import { Request, Response } from "express";
import { IEmpController } from "../interfaces/emp.controller.interface";
import { inject, injectable } from "inversify";
import { IEmpService } from "../interfaces/emp.service.interface";
import { EmpImplementingService } from '../services/emp.implementingService';
import TYPES from "../inversify/types";
import container from '../inversify/container';
@injectable()
export class EmpImplementingController /*implements IEmpController*/{

    private _empservice: EmpImplementingService;

    constructor( @inject(TYPES.EmpImplementingService) private  empservice:EmpImplementingService){
        this._empservice = this.empservice
    }


    async createEmp(req: Request, res: Response): Promise<any> {
        try{
            console.log(req.body);
            const {firstName,lastName,mobileNumber,email,age,gender,city}=req.body;
                console.log(firstName);
             
           const emp=await this._empservice.createEmp(firstName,lastName,mobileNumber,email,age,gender,city);
           console.log(emp);
           console.log(emp.status);
            console.log(emp.message);
           return res.status(emp.status).json({message:emp.message});
        }
        catch(error)
        {console.log(error)
            return res.status(500).json({message:"Internal Server Error"});
        }
        
    }

}