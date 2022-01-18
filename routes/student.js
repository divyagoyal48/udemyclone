const express = require('express');
const studentController = require('../controllers/student');

const router= express.Router();

router.get("/",studentController.getAllStudents);
router.post("/login",studentController.login);
router.get("/:id",studentController.searchStudentByID);
router.post("/",studentController.create);
router.delete("/:id",studentController.delete);


module.exports = router