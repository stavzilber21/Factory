const userService = require("../service/userService")
const express = require("express")
const router = express.Router()

// http://localhost:8000/auth/login
router.post("/login", async (req,res) => {
    const {username, email} = req.body
    const result = await userService.getUserByUsername(username,email);
    res.send(result);
})

router.get("/", async (req,res) => {
    try {
       const token = req.headers['x-access-token']
        const result = await userService.getAllUsers(token);
        res.send(result);
      } catch (error) {
        res.send(error);
      }
})

module.exports = router