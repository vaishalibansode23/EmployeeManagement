import { Request, Response } from "express";
import { IEmpRepository } from "../interfaces/emp.repository.interface";
import { injectable } from "inversify";
import { Emp } from "../models/emp.model";



@injectable()
export class EmpImplementingRepository implements IEmpRepository{

    //todo:Gel All Employee
     getAllEmp=async()=>{
        const emp=await Emp.find({});
        if(!emp)
        {
            return {status:404,message:"No employee found"}
        }
        return {status:200,message:"Success",data:emp}
    }

    //todo :Create Employee
    createEmp=async (firstName:string,lastName:string,mobileNumber:string,email:string,age:number,gender:string,city:string)=>
    {
        const existingemp=await Emp.findOne({email:email});
        console.log(existingemp);
        
        if(existingemp)
        {
            return {status:409,message:"Employee already register with given eamil"};;
        }
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
        return {status:201,message:"Successfully created"};
        
           
    }

    //todo:get by email id

    getByEmail=async (email:string)=>{
        const emp=await Emp.findOne({email:email});
        console.log((emp));
        
        if(emp)
        {
            return {status:200,message:"Success",data:emp};
            
        }
        return {status:404,message:"No user found with this given email"}
        

    }

}