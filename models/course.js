const mongoose=require("mongoose");


const courseSchema=new mongoose.Schema({
    courseName:{type:String,  required:true  },
    
    description:{type:String,  required:true  },
    url:{type:[String],  required:true, unique:true },
    trainer:[{type:mongoose.Schema.Types.ObjectId, ref: 'Trainer' }],
    cost:{type:Number,default:500},
    duration:{type:Number,default:100 },
    trainerName:{type:String }
    
});
module.exports = mongoose.model("Course",courseSchema,"Courses");