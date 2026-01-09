import mongoose from "mongoose";
const {Schema}= mongoose;

const scanSchema= new mongoose.Schema({
    userId:{
        type:mongoose.types.ObjectId,
        required:true,
        unique:true,
    },
    name:{
        type:String,
    },
    url:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:['pending','completed','failed'],
        default:'pending'
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },

    
})
export const Scan= mongoose.model('Scan',scanSchema);