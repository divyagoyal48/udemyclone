const express = require('express');
const studentController = require('../Controllers/student');

const router= express.Router();

router.get("/all",studentController.GetAllStudents);
router.post("/login",studentController.Login);
router.get("/SearchStudentByID/:id",studentController.SearchStudentByID);
router.post("/create",studentController.Create);
router.get("/delete/:id",studentController.Delete);


module.exports = router