
import { Container } from "inversify";
import { EmpImplementingController } from "../controllers/emp.implementingController";
import { EmpImplementingRepository } from "../repositories/emp.implementingRepository";
import { EmpImplementingService } from "../services/emp.implementingService";
import TYPES from './types';

const container = new Container();

container.bind<EmpImplementingRepository>(TYPES.EmpImplementingRepository).to(EmpImplementingRepository).inSingletonScope();
container.bind<EmpImplementingController>(TYPES.EmpImplementingController).to(EmpImplementingController).inSingletonScope();
container.bind<EmpImplementingService>(TYPES.EmpImplementingService).to(EmpImplementingService).inSingletonScope();


export default container;
