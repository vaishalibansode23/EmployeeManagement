
import { Request,Response } from "express";
export interface IEmpController{
    createEmp(req: Request, res: Response): Promise<any>;
    getAllEmp(req: Request, res: Response):Promise<any>;
    getByEmail(req: Request, res: Response):Promise<any>
}