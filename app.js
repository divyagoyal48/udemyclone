const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/UdemyApp");

var cors = require('cors');
app.use(cors());
app.use(express.json());


// -------- Adding Routings / Controllers
const courseRoute= require('./routes/course');
const subscriptionRoute= require('./routes/subscription');
const trainerRoute= require('./routes/trainer');
const studentRoute= require('./routes/student');


app.use("/courses",courseRoute);
app.use("/subscription",subscriptionRoute);
app.use("/trainers",trainerRoute);
app.use("/students",studentRoute);



console.log('Server is Online');
app.listen(5000);