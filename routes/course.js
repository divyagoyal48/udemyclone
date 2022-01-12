const express = require('express');
//const coursesController = require('../Controllers/courses');
const coursesController = require('../controllers/courses');

const router= express.Router();
router.get("/all",coursesController.getAllCourses);
router.get("/getallcoursesoftrainer/:TrainerID",coursesController.getAllCoursesOfTrainer);
router.get("/subscribe/:CourseID/:EmailID",coursesController.subscribe);
router.get("/unsubscribe/:CourseID/:EmailID",coursesController.unSubscribe);
router.get("/search/:Keyword",coursesController.searchCourseByName);
router.get("/searchcoursebyid/:id",coursesController.searchCourseByID);
router.post("/create",coursesController.create);
router.get("/delete/:id",coursesController.delete);

module.exports = router