const mongoose=require("mongoose");


const userSchema=new mongoose.Schema({
    UserName:{type:String,  required:true, unique:true },
    Email:{type:String,  required:true, unique:true },
    Mobile:{type:String,  required:true, unique:true },
    PWD:{type:String,  required:true, unique:true }
    
})
mongoose.model("users",userSchema);
module.exports=mongoose.model("users");