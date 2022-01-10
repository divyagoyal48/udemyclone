const express = require('express');
const subscriptionController = require('../Controllers/subscription');

const router= express.Router();
console.log('called');;
router.get("/all",subscriptionController.GetAllSubscriptions);
router.get("/GetAllMySubscriptions/:EmailID",subscriptionController.GetAllMySubscriptions);


module.exports = router