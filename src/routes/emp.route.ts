import express from 'express'
import container from '../inversify/container';
//import { EmpImplementingController } from '../controllers/emp.implementingController';
import TYPES from '../inversify/types';
import { IEmpController } from '../interfaces/emp.controller.interface';
import { EmpImplementingController } from '../controllers/emp.implementingController';
const empRoute=express.Router();

const postController=container.get<EmpImplementingController>(TYPES.EmpImplementingController);
empRoute.post("/createuser",postController.createEmp);

export {empRoute}