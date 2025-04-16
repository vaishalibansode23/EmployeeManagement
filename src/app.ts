import "reflect-metadata";
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import { empRoute } from './routes/emp.route';
dotenv.config();
const app=express();
app.use(express.json()); 
const port=process.env.PORT || 6500;
const url=process.env.MONGO_URI as string 
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("database connect successfully");
    app.listen(port, () => {
      console.log(`app started on port : ${port}`);
    });
  })
  .catch((err: Error) => console.log("ERROR in database connection", err));

  app.use("/api/emp",empRoute)


