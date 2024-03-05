const employeeService = require("../service/employeeService")
const express = require("express")
const router = express.Router()


router.get("/", async (req,res) => {
    try {
       const token = req.headers['x-access-token']
        const result = await employeeService.getAllEmployees(token);
        res.send(result);
      } catch (error) {
        res.send(error);
      }
})

// router.get("/employee/:id", async (req,res) => {
//   try {
//      const { id } = req.params;
//      const token = req.headers['x-access-token']
//       const result = await employeeService.getEmployeeById(id,token);
//       res.send(result);
//     } catch (error) {
//       res.send(error);
//     }
// })
router.get("/employee/:id", async (req, res) => {
  try {
      const { id } = req.params;
      const token = req.headers['x-access-token']
      const result = await employeeService.getEmployeeById(id, token);
      res.send(result);
  } catch (error) {
      // Handle specific error statuses
      if (error.status === 404) {
          res.status(404).send("Employee not found");
      } else {
          console.error("Error fetching employee:", error);
          res.status(500).send("Internal Server Error");
      }
  }
});

router.get("/filterDep/:departmentID", async (req,res) => {
  try {
    const { departmentID } = req.params;
      const result = await employeeService.filterEmployeesByDepartment(departmentID);
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

// Update a department of employee
router.put('/:employeeID/changeDepartment', async (req, res) => {
  try {
    const employeeID = req.params.employeeID;
    const { departmentID } = req.body;
    const result = await employeeService.changeDepartmentOfEmployee(employeeID,departmentID);
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