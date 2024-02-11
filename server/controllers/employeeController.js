const employeeService = require("../service/employeeService")
const express = require("express")
const router = express.Router()


router.get("/", async (req,res) => {
    try {
        const result = await employeeService.getAllEmployees();
        res.send(result);
      } catch (error) {
        res.send(error);
      }
})

module.exports = router