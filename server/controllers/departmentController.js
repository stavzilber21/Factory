const departmentService = require("../service/departmentService")
const express = require("express")
const router = express.Router()

router.get("/", async (req,res) => {
    try {
        const token = req.headers['x-access-token']
        const result = await departmentService.getDepartments(token);
        res.send(result);
      } catch (error) {
        res.send(error);
      }
})

//get the department deailts by name
router.get("/:name", async (req,res) => {
  try {
    const { name } = req.params;
      const token = req.headers['x-access-token']
      const result = await departmentService.getdepartmentByName(token,name);
      res.send(result);
    } catch (error) {
      res.send(error);
    }
})

// Update a department
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await departmentService.updateDepartment(id,obj);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

// Delete a department
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await departmentService.deleteDepartment(id);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

// Add a new department
router.post('/', async (req, res) => {
  try {
    const obj = req.body;
    const result = await departmentService.addDepartment(obj);
    res.status(201).send(result);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router