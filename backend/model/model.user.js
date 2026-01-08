import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    id:{
        type:mongoose.types.ObjectId,
        required:true,
        unique:true,
    },
    fname:{
        type:String,
        required:true,
    },
    lname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:password,
        required: true
    }

})
export const User= mongoose.model('User',userSchema);