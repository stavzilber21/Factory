const User = require('../models/userModel');

// Get All
const getAllUsers = () => {
    return User.find();
  };


  module.exports = {getAllUsers};