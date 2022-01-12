const express = require('express');
const subscriptionController = require('../controllers/subscription');

const router= express.Router();
console.log('called');;
router.get("/",subscriptionController.getAllSubscriptions);
router.get("/:EmailID",subscriptionController.getAllMySubscriptions);


module.exports = router