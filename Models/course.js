const mongoose=require("mongoose");

const courseSchema=new mongoose.Schema({
    CourseName:{type:String,  required:true  },
    
    Description:{type:String,  required:true  },
    URL:{type:String,  required:true, unique:true },
    Trainer:{type:String,  required:true, default:"Admin" },
    Subscribers:{type:[String] },
    Cost:{type:Number,default:500},
    Duration:{type:Number,default:100 }
    
})
module.exports = mongoose.model("Course",courseSchema,"Courses");