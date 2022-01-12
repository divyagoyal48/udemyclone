const express = require('express');
const subscriptionController = require('../controllers/subscription');

const router= express.Router();
console.log('called');;
router.get("/all",subscriptionController.getAllSubscriptions);
router.get("/getallmysubscriptions/:EmailID",subscriptionController.getAllMySubscriptions);


module.exports = router