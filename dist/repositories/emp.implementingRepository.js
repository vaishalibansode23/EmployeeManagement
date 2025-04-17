"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpImplementingRepository = void 0;
const inversify_1 = require("inversify");
const emp_model_1 = require("../models/emp.model");
let EmpImplementingRepository = class EmpImplementingRepository {
    constructor() {
        //todo :Create Employee
        this.createEmp = async (firstName, lastName, mobileNumber, email, age, gender, city) => {
            const existingemp = await emp_model_1.Emp.findOne({ email: email });
            console.log(existingemp);
            if (existingemp) {
                return { status: 409, message: "Employee already register with given eamil" };
                ;
            }
            const newEmp = new emp_model_1.Emp({
                firstName: firstName,
                lastName: lastName,
                mobileNumber: mobileNumber,
                email: email,
                age: age,
                gender: gender,
                city: city
            });
            const emp = await newEmp.save();
            return { status: 201, message: "Successfully created" };
        };
    }
    //todo:Gel All Employee
    async getAllEmp() {
        const emp = await emp_model_1.Emp.find({});
        if (!emp) {
            return { status: 404, message: "No employee found" };
        }
        return { status: 200, message: "Success", data: emp };
    }
};
exports.EmpImplementingRepository = EmpImplementingRepository;
exports.EmpImplementingRepository = EmpImplementingRepository = __decorate([
    (0, inversify_1.injectable)()
], EmpImplementingRepository);
