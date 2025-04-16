"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const emp_implementingController_1 = require("../controllers/emp.implementingController");
const emp_implementingRepository_1 = require("../repositories/emp.implementingRepository");
const emp_implementingService_1 = require("../services/emp.implementingService");
const types_1 = __importDefault(require("./types"));
const container = new inversify_1.Container();
container.bind(types_1.default.EmpImplementingRepository).to(emp_implementingRepository_1.EmpImplementingRepository);
container.bind(types_1.default.EmpImplementingController).to(emp_implementingController_1.EmpImplementingController);
container.bind(types_1.default.EmpImplementingService).to(emp_implementingService_1.EmpImplementingService);
exports.default = container;
