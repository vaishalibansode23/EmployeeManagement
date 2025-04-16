"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const emp_route_1 = require("./routes/emp.route");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = process.env.PORT || 6500;
const url = process.env.MONGO_URI;
mongoose_1.default
    .connect(process.env.MONGO_URI)
    .then(() => {
    console.log("database connect successfully");
    app.listen(port, () => {
        console.log(`app started on port : ${port}`);
    });
})
    .catch((err) => console.log("ERROR in database connection", err));
app.use("/api/emp", emp_route_1.empRoute);
