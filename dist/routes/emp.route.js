"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.empRoute = void 0;
const express_1 = __importDefault(require("express"));
const container_1 = __importDefault(require("../inversify/container"));
const types_1 = __importDefault(require("../inversify/types"));
//import { EmpImplementingController } from '../controllers/emp.implementingController';
const empRoute = express_1.default.Router();
exports.empRoute = empRoute;
const postController = container_1.default.get(types_1.default.EmpImplementingController);
empRoute.post("/createuser", postController.createEmp);
empRoute.get("/getall", postController.getAllEmp);
