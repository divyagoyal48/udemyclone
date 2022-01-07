const express = require('express');
const userController = require('../Controllers/user');

const router= express.Router();

router.get("/all",userController.GetAllUsers);



module.exports = router