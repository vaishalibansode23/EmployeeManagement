import express from 'express'
 import container from '../inversify/container';
import TYPES from '../inversify/types';
import { IEmpController } from '../interfaces/emp.controller.interface';
//import { EmpImplementingController } from '../controllers/emp.implementingController';
const empRoute=express.Router();

 const postController=container.get<IEmpController>(TYPES.EmpImplementingController);
empRoute.post("/createuser",postController.createEmp);
empRoute.get("/getall",postController.getAllEmp);
empRoute.get("/getbyemail",postController.getByEmail);

export {empRoute}