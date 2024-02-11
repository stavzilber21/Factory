const employeesRep = require('../repositories/employeeRep');

const getAllEmployees = () => {
    return employeesRep.getAllEmployees();
  };
  module.exports = {getAllEmployees};