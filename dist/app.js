"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const emp_route_1 = require("./routes/emp.route");
const mongoconnect_db_1 = require("./dbs/mongoconnect.db");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = process.env.PORT || 6500;
const url = process.env.MONGO_URI;
app.use("/api/emp", emp_route_1.empRoute);
(0, mongoconnect_db_1.connectToDb)();
// mongoose
//   .connect(process.env.MONGO_URI as string)
//   .then(() => {
//     console.log("database connect successfully");
//     app.listen(port, () => {
//       console.log(`app started on port : ${port}`);
//     });
//   })
//   .catch((err: Error) => console.log("ERROR in database connection", err));
app.listen(port, () => {
    console.log(`app started on port : ${port}`);
});
