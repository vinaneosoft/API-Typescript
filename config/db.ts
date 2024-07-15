const mongoose=require("mongoose");

export function dbconnect(){
 mongoose.connect('mongodb://127.0.0.1:27017/graphqldb')
    .then(()=>console.log("Connected to mongodb database....."))
    .catch((e:any)=>console.log(e));
require("../model/AddressModel");
require("../model/UserModel");
}
