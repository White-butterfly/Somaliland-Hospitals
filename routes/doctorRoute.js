const express = require('express');
const doctorController= require('../controller/doctorController');
const router = express.Router();

router
 .route('/')
 .get(doctorController.getDoctors)
 .post(doctorController.createDoctor)


 router
 .route('/:id')  

.put(doctorController.updateDoctor) 
.delete(doctorController.deleteDoc) 
.get(doctorController.getDoctor)

 module.exports= router; 