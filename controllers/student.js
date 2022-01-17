const mongoose=require('mongoose');
const studentSchema = require('../models/student');



module.exports.getAllStudents=async (req,res)=>{
  let results = await studentSchema.find({});
  return res.send(results);
};

module.exports.login=async (req,res)=>{
 
  console.log( 'hello');
  let searchObject = req.body;
  console.log(searchObject);
 
  let student = await studentSchema.findOne(searchObject);
console.log(student);
        if(student.length==0) return res.send(null);
        else {res.statusCode = 200;res.send(student);}
};





module.exports.searchStudentByID=async (req,res)=>{
    let id= req.params.id;
   
    let student = await studentSchema.findById(id);

    res.send(student);
}

module.exports.create=async(req,res)=>{
    let record = req.body;
    delete record.REPWD;
    let result =await studentSchema.create(record);
    res.send(result);

}

module.exports.delete=async(req,res)=>{
    let id = req.params.id;

    let result = await studentSchema.deleteOne({"_id": id });
    res.send(result);
}
