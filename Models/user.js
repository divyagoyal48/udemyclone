const mongoose=require("mongoose");


const userSchema=new mongoose.Schema({
    UserName:{type:String },
    Email:{type:String },
    Mobile:{type:String },
    PWD:{type:String }
    
})

module.exports=mongoose.model("User",userSchema,"Users");