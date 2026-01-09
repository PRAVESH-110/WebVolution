import mongoose from "mongoose";
const {Schema} = mongoose;

const userSchema= new mongoose.Schema({
    
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required: true
    },
    fname:{
        type:String,
        required:true,
    },
    lname:{
        type:String,
        required:true,
    }
})
export const User= mongoose.model('User',userSchema);