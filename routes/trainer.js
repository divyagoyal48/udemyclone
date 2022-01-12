const express = require('express');
const trainerController = require('../controllers/trainer');

const router= express.Router();

router.get("/",trainerController.getAllTrainers);
router.post("/login",trainerController.login);
router.get("/:id",trainerController.searchTrainerByID);
router.post("/",trainerController.create);
router.get("/delete/:id",trainerController.delete);


module.exports = router