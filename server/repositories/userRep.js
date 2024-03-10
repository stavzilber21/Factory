const User = require('../models/userModel');

// Get All
const getAllUsers = () => {
    return User.find();
  };

const getUserByFullName=async(fullname)=>{
  return await User.findOne({"fullname": fullname});
}


  module.exports = {getAllUsers,getUserByFullName};