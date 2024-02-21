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

router.get("/:department", async (req,res) => {
  try {
    const { department } = req.params;
      const result = await employeeService.getIdByNameDepartment(department);
      res.send(result);
    } catch (error) {
      res.send(error);
    }
})

router.put('/:id', async (req, res) => {
  try {
    
    const { id } = req.params;
    const obj = req.body;
    const result = await employeeService.updateEmployee(id,obj);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router