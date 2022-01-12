const express = require('express');
const trainerController = require('../controllers/trainer');

const router= express.Router();

router.get("/all",trainerController.getAllTrainers);
router.post("/login",trainerController.login);
router.get("/searchcoursebyid/:id",trainerController.searchTrainerByID);
router.post("/create",trainerController.create);
router.get("/delete/:id",trainerController.delete);


module.exports = router