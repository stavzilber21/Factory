const Department =  require('../models/departmentModel');

const getDepartments =() => {
    const departments = Department.find();
    return departments
};

const getIdByNameDepartment =async (name) =>{
    const departments =await Department.find();
    const department = departments.find(dep => dep.name === name);
    // Check if department is found
    if (!department) {
      console.error(`Department with name ${name} not found`);
      return null; // or throw an error
    }
    return department._id;
}


  module.exports = {getDepartments,getIdByNameDepartment};