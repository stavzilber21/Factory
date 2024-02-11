const Employee = require('../models/employeeModel');

// Get All
const getAllEmployees = () => {
    return Employee.find();
  };


  module.exports = {getAllEmployees};