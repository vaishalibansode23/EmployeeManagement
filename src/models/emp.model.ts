import mongoose from "mongoose"
// export interface IEmp{
//     firstName:string,
//     lastName:string,
//     mobileNumber:string,
//     email:string,
//     age:number,
//     gender:string,
//     city:string
// }

const empSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:false
    },
    gender:{
        type:String,
        required:false
    },
    city:{
        type:String,
        required:true
    }
});

export const Emp=mongoose.model("Emp",empSchema);
