import mongoose from "mongoose";

const scanSchema= new mongoose.Schema({
    id:{
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
        enum:['pending','completed','failed']
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },

    
})
export const Scan= mongoose.model('Scan',scanSchema);