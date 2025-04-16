import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();


   export const connectToDb=()=>{
        try
        {
            const url=process.env.MONGO_URI as string 
             mongoose.connect(url);
             console.log("Database connect Successfully");     
        }
        catch(error)
        {
            console.log("Error in database connection");  
        }
       
    }
