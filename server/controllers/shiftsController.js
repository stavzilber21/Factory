const express = require('express')
const shiftsService = require('../service/shiftsService')

const router = express.Router()


router.get("/:id", async (req,res) => {
    try {
        const { id } = req.params;
        const result = await shiftsService.getShiftsByEmployeesId(id);
        res.send(result);
      } catch (error) {
        res.send(error);
      }
})

router.patch("/", async (req,res) =>{
  try {
    const { employeeID, shiftID } = req.body;
    const result = await shiftsService.addShiftToEmployee(employeeID,shiftID);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
})

module.exports = router