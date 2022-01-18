const mongoose=require("mongoose");


const trainerSchema=new mongoose.Schema({
    trainerName:{type:String,  required:true, unique:true },
    email:{type:String,  required:true, unique:true },
    mobile:{type:String,  required:true, unique:true },
    pwd:{type:String,  required:true, unique:true },
       
});

module.exports=new mongoose.model("Trainer",trainerSchema,"Trainers");