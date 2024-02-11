const Department =  require('../models/departmentModel');

const getDepartments =() => {
    const departments = Department.find();
    return departments
};

  module.exports = {getDepartments};