import  mongoose from "mongoose";

 const AddressSchema=new mongoose.Schema({
    _id:Number,
    area:String,
    city:String,
    pincode:String
})
export const AddressModel=mongoose.model("Address",AddressSchema);
