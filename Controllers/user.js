const mongoose = require('mongoose');
const User =require('../Models/user');
mongoose.connect("mongodb://localhost:27017/UdemyApp");

module.exports.GetAllUsers= async (req,res)=> {
    
var Users = await User.find();
res.send(Users);

};


module.exports.Create= async (req,res)=> {
    
  var Users = await User.create(req.body);
  console.log("Created");
  res.send(Users);
  
  };