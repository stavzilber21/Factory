const departmentService = require("../service/departmentService")
const express = require("express")
const router = express.Router()

router.get("/", async (req,res) => {
    try {
        const result = await departmentService.getDepartments();
        res.send(result);
      } catch (error) {
        res.send(error);
      }
})

module.exports = router