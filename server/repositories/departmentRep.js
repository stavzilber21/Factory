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

const getdepartmentByName =async(name)=>{
  const departments =await Department.find();
    const department = departments.find(dep => dep.name === name);
    // Check if department is found
    if (!department) {
      console.error(`Department with name ${name} not found`);
      return null; // or throw an error
    }
    return department;
}

const changeManagerNull = async(manager)=>{
  try {
    // Find all departments
    const departments = await Department.find();
    // Filter departments where the manager is like the given manager
    const departmentsToUpdate = departments.filter(dep => dep.manager === manager);
    // Update the manager to null for each department found
    for (const department of departmentsToUpdate) {
      department.manager = null;
      await department.save();
    }
    // console.log("Managers updated successfully.");
  } catch (error) {
    console.error("Error occurred while updating managers:", error);
  }
}

const getNamesDepartments =async ()=>{
  const departments =await Department.find();
  const names = departments.map(dep => dep.name);
  return names;
}

// Update
const updateDepartment =(id, obj) => {
  return Department.findByIdAndUpdate(id, obj);
};

// Delete
const deleteDepartment = (id) => {
  return Department.findByIdAndDelete(id);
};


  module.exports = {getDepartments,getIdByNameDepartment,getNamesDepartments,getdepartmentByName,updateDepartment,changeManagerNull,deleteDepartment};