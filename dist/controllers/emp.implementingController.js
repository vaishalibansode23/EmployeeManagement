"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpImplementingController = void 0;
const inversify_1 = require("inversify");
const emp_implementingService_1 = require("../services/emp.implementingService");
const types_1 = __importDefault(require("../inversify/types"));
let EmpImplementingController = class EmpImplementingController /*implements IEmpController*/ {
    constructor(empservice) {
        this.empservice = empservice;
    }
    async createEmp(req, res) {
        try {
            console.log(req.body);
            const { firstName, lastName, mobileNumber, email, age, gender, city } = req.body;
            console.log(firstName);
            const emp = await this.empservice.createEmp(firstName, lastName, mobileNumber, email, age, gender, city);
            console.log(emp);
            console.log(emp.status);
            console.log(emp.message);
            return res.status(emp.status).json({ message: emp.message });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
};
exports.EmpImplementingController = EmpImplementingController;
exports.EmpImplementingController = EmpImplementingController = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.default.EmpImplementingService)),
    __metadata("design:paramtypes", [emp_implementingService_1.EmpImplementingService])
], EmpImplementingController);
