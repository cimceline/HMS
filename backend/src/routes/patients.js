const express = require('express');
const router = express.Router();
const {getAllPatients,createPatient,updatePatient,deletePatient} = require('../config/patientController.js');

router.route('/').get(getAllPatients); //get method
router.route('/').post(createPatient); //post method
router.route('/:id').put(updatePatient); //put method
router.route('/:id').delete(deletePatient); //delete method

module.exports = router;

