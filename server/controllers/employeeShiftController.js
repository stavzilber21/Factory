const express = require('express')
const shiftsService = require('../service/shiftsService')

const router = express.Router()

// Add a new employee to employeeShifts

router.post('/', async (req, res) => {
    try {
      const obj = req.body;
      const result = await shiftsService.addEmployeeAndShifts(obj);
      res.status(201).send(result);
    } catch (error) {
      res.send(error);
    }
  });


module.exports = router