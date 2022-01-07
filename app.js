const express = require('express');
const app = express();
const path = express.Router();

var cors = require('cors');
app.use(cors());
app.use(express.json());


// -------- Adding Routings / Controllers
const courseRoute= require('./Routes/course');
const subscriptionRoute= require('./Routes/subscription');
const trainerRoute= require('./Routes/trainer');
const studentRoute= require('./Routes/student');


app.use("/courses",courseRoute);
app.use("/subscription",subscriptionRoute);
app.use("/trainers",trainerRoute);
app.use("/students",studentRoute);



console.log('Server is Online');
app.listen(5000);