
import { Request, Response } from "express";
import { inject, injectable } from "inversify";
//import { EmpImplementingService } from '../services/emp.implementingService';
import TYPES from "../inversify/types";
import { IEmpController } from "../interfaces/emp.controller.interface";
import { IEmpService } from "../interfaces/emp.service.interface";

@injectable()
export class EmpImplementingController implements IEmpController{

    constructor(@inject(TYPES.EmpImplementingService) private myservice:IEmpService)
    {}
    getByEmail=async(req: Request, res: Response)=>{
        try
        {
            const {email}=req.body
            const emp=await this.myservice.getByEmail(email);
            res.status(emp.status).json({message:emp.message,emp:emp.data})
        }catch(error)
        {
            res.status(500).json({message:"Internal Server Error"});
        }
        
        
    }

    // todo:get Employee
   getAllEmp=async (req: Request, res: Response)=>{
    try{
        const emp= await this.myservice.getAllEmp();
         res.status(emp.status).json({message:emp.message,data:emp.data});
    }
    catch(error)
    {
         res.status(500).json({message:"Internal Server Error"});
    }
       
       
    }

    //todo: Create Employee
     createEmp=async (req: Request, res: Response)=>{
        try{
            console.log(req.body);
            const {firstName,lastName,mobileNumber,email,age,gender,city}=req.body;
                console.log(firstName);
             
           const emp=await this.myservice.createEmp(firstName,lastName,mobileNumber,email,age,gender,city);
           console.log(emp);
           res.status(emp.status).json({message:emp.message});
        }
        catch(error)
        {
            res.status(500).json({message:"Internal Server Error"});
        }
        
    }

}