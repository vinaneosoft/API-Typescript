import  mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    _id:Number,
    name:String,
    email:String,
    phone:String,
    address:{
        type:Number,
        ref:'Address'
    }
})

export const UserModel=mongoose.model('User',UserSchema);

