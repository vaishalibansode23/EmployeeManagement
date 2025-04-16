
import { Request,Response } from "express";
export interface IEmpController{
    createEmp(req: Request, res: Response): Promise<any>;
}