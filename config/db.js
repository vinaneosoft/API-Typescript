const mongoose=require("mongoose");

 mongoose.connect('mongodb://127.0.0.1:27017/graphqldb')
    .then(()=>console.log("Connected to mongodb database....."))
    .catch((e)=>console.log(e));

module.exports=mongoose;