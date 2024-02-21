const Employee = require('../models/employeeModel');

// Get All
const getAllEmployees = () => {
    return Employee.find();
  };

// Update
const updateEmployee =(id, obj) => {
    return Employee.findByIdAndUpdate(id, obj);
};

// Delete
const deleteEmployee = (id) => {
  return Employee.findByIdAndDelete(id);
};

module.exports = {getAllEmployees,updateEmployee,deleteEmployee};