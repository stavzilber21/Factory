const employeeService = require("../service/employeeService")
const express = require("express")
const router = express.Router()


router.get("/employees", async (req,res) => {
    try {
        const employees = await employeeService.getAllEmployees();
        res.send(employees);
      } catch (error) {
        res.send(error);
      }
})

module.exports = router