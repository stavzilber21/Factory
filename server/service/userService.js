const usersWS = require('../repositories/usersWS');
const jwt = require("jsonwebtoken")

const getUserByUsername = async (username,email) => {
    //find the  User in the WS
    const { data: users } = await usersWS.getUserByUsername(username);
    const user = users[0];

    if (!user) return {success: false, message: "User not found"}

    if (user.email !== email) return {success: false, message: "Wrong email"}

    //create token
    const token = jwt.sign({username}, "secret" )
    return {success: true, message: "Login successful", token}

  };

module.exports = { getUserByUsername };