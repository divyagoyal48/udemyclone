const mongoose=require('mongoose');
const trainerSchema = require('../Models/trainer');
mongoose.connect("mongodb://localhost:27017/UdemyApp");




module.exports.GetAllTrainers=async (req,res)=>{
  var Results = await trainerSchema.find({});
  return Results;
 };

 module.exports.Login=async(req,res)=>{
  var SearchObject = req.body;
  var Trainer = await trainerSchema.findOne(SearchObject);

        if(Trainer.length==0) return res.send(null);
        else {res.statusCode = 200;res.send(Trainer);}

};





module.exports.SearchTrainerByID=async(req,res)=>{
  var id= req.params.id;
   
  var Student = await trainerSchema.findById(id);

  res.send(Student);
}

module.exports.Create=async(req,res)=>{
  var record = req.body;
  delete record.REPWD;
  var Result =await trainerSchema.create(record);
  res.send(Result);

}

module.exports.Delete=async(req,res)=>{
  var id = req.params.id;

  var Result = await trainerSchema.deleteOne({"_id": id });
  res.send(Result);
}
