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

// Update a employee
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

// Delete a employee
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await employeeService.deleteEmployee(id);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

// Add a new employee
router.post('/', async (req, res) => {
  try {
    const obj = req.body;
    const result = await employeeService.addEmployee(obj);
    res.status(201).send(result);
  } catch (error) {
    res.send(error);
  }
});


module.exports = router