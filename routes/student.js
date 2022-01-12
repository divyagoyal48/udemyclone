const express = require('express');
const studentController = require('../controllers/student');

const router= express.Router();

router.get("/all",studentController.getAllStudents);
router.post("/login",studentController.login);
router.get("/searchstudentbyid/:id",studentController.searchStudentByID);
router.post("/create",studentController.create);
router.get("/delete/:id",studentController.delete);


module.exports = router