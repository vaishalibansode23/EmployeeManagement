
import { Container } from "inversify";

import { IEmpController } from "../interfaces/emp.controller.interface";
import { IEmpRepository } from "../interfaces/emp.repository.interface";
import { IEmpService } from "../interfaces/emp.service.interface";

import { EmpImplementingController } from "../controllers/emp.implementingController";
import { EmpImplementingRepository } from "../repositories/emp.implementingRepository";
import { EmpImplementingService } from "../services/emp.implementingService";
import TYPES from './types';

const container = new Container();

container.bind<EmpImplementingRepository>(TYPES.EmpImplementingRepository).to(EmpImplementingRepository);
container.bind<EmpImplementingController>(TYPES.EmpImplementingController).to(EmpImplementingController);
container.bind<EmpImplementingService>(TYPES.EmpImplementingService).to(EmpImplementingService);


export default container;
