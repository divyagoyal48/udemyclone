const express = require('express');
//const coursesController = require('../Controllers/courses');
const coursesController = require('../controllers/courses');

const router= express.Router();
router.get("/",coursesController.getAllCourses);
router.get("/:trainerid",coursesController.getAllCoursesOfTrainer);
router.get("/:courseid/:emailid",coursesController.subscribe);
router.get("/:courseid/:emailid",coursesController.unSubscribe);
router.get("/:keyword",coursesController.searchCourseByName);
router.get("/:id",coursesController.searchCourseByID);
router.post("/",coursesController.create);
router.get("/:id",coursesController.delete);

module.exports = router