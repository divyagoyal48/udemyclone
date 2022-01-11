const mongoose=require("mongoose");


const courseSchema=new mongoose.Schema({
    courseName:{type:String,  required:true  },
    
    description:{type:String,  required:true  },
    url:{type:[String],  required:true, unique:true },
    trainer:{type:String,  required:true, default:"Admin" },
    cost:{type:Number,default:500},
    duration:{type:Number,default:100 }
    
});
module.exports = mongoose.model("Course",courseSchema,"Courses");

