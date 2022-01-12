const express = require('express');
const trainerController = require('../Controllers/trainer');

const router= express.Router();

router.get("/all",trainerController.GetAllTrainers);
router.post("/login",trainerController.Login);
router.get("/SearchCourseByID/:id",trainerController.SearchTrainerByID);
router.post("/create",trainerController.Create);
router.get("/delete/:id",trainerController.Delete);


module.exports = router