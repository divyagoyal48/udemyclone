const express = require('express');
//const coursesController = require('../Controllers/courses');
const coursesController = require('../controllers/courses');

const router= express.Router();
router.get("/",coursesController.getAllCourses);
router.get("/:TrainerID",coursesController.getAllCoursesOfTrainer);
router.get("/subscribe/:CourseID/:EmailID",coursesController.subscribe);
router.get("/:CourseID/:EmailID",coursesController.unSubscribe);
router.get("/search/:Keyword",coursesController.searchCourseByName);
router.get("/:id",coursesController.searchCourseByID);
router.post("/",coursesController.create);
router.get("/delete/:id",coursesController.delete);

module.exports = router