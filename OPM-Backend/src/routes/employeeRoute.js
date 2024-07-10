const express = require("express");
const router = express.Router();
const employeeController = require('../controllers/employeeController');

//employee routes
router.get('/all',employeeController.getAllEmployees);
router.get('/getAllEmployeesByAuthority/:authority', employeeController.getAllEmployeesByAuthority);
router.get('/getAllEmployeesByValid/:valid/:userRolle', employeeController.getAllEmployeesByValid);
router.get('/getEmployeeByEmail', employeeController.getEmployeeByEmail);
router.put('/updateEmployee', employeeController.updateEmployee);
router.delete('/deleteEmployee', employeeController.deleteEmployee);

module.exports = router;