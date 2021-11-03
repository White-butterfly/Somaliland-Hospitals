const express = require('express');
const doctorController= require('../controller/doctorController');
const router = express.Router();

router
 .route('/')
 .get(doctorController.getDoctor)
 .post(doctorController.createDoctor)


 router
 .route('/:id') 
 .get(doctorController.getDoctorById)
 .post(doctorController.updateDoctor)
 .delete(doctorController.deleteDoc) 

 module.exports= router; 