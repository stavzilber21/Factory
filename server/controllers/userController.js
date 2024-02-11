const userService = require("../service/userService")
const express = require("express")
const router = express.Router()

// http://localhost:8000/auth/login
router.post("/login", async (req,res) => {
    const {username, email} = req.body
    const result = await userService.getUserByUsername(username,email);
    res.send(result);
    // Extract token from the result
    // const { token } = result;
    // return res.json({token})
})

module.exports = router