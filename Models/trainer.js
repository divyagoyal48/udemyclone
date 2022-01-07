const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    TrainerName:{type:String,  required:true, unique:true },
    Email:{type:String,  required:true, unique:true },
    Mobile:{type:String,  required:true, unique:true },
    PWD:{type:String,  required:true, unique:true }
    
})
const Model=new mongoose.model("Trainers",userSchema)
module.exports=Model;