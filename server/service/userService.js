const usersWS = require('../repositories/usersWS');
const usersRep = require('../repositories/userRep');

const jwt = require("jsonwebtoken")

CheckTokenVerify = (token) => {
  return new Promise((resolve, reject) => {
      jwt.verify(token, "secret", (err, data) => {
          if (err) {
              console.log('Error verifying token:', err.message);
              resolve(false);
          } else {
              // console.log('Successfully verified the token!');
              resolve(true);
          }
      });
  });
};

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

  const getAllUsers = (token) => {
    if (CheckTokenVerify(token)) {
        return usersRep.getAllUsers();
    }
    return {
      'access': false,
      "response": 'Error, inValid token!'
    }
  } 

module.exports = { getUserByUsername,getAllUsers };