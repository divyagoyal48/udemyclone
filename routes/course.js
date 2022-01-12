const express = require('express');
//const coursesController = require('../Controllers/courses');
const coursesController = require('../Controllers/courses');

const router= express.Router();
router.get("/all",coursesController.GetAllCourses);
router.get("/GetAllCoursesOfTrainer/:TrainerID",coursesController.GetAllCoursesOfTrainer);
router.get("/subscribe/:CourseID/:EmailID",coursesController.Subscribe);
router.get("/unsubscribe/:CourseID/:EmailID",coursesController.UnSubscribe);
router.get("/Search/:Keyword",coursesController.SearchCourseByName);
router.get("/SearchCourseByID/:id",coursesController.SearchCourseByID);
router.post("/create",coursesController.Create);
router.get("/delete/:id",coursesController.Delete);

module.exports = router