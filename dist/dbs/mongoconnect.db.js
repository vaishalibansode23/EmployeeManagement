"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connectToDb = () => {
    try {
        const url = process.env.MONGO_URI;
        mongoose_1.default.connect(url);
        console.log("Database connect Successfully");
    }
    catch (error) {
        console.log("Error in database connection");
    }
};
exports.connectToDb = connectToDb;
