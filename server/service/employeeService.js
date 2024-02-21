const employeesRep = require('../repositories/employeeRep');
const departmentRep = require('../repositories/departmentRep');
const shiftRep = require('../repositories/shiftRep');
const employeeShiftRep = require('../repositories/employeeShiftRep');


const getAllEmployees = async () => {
  const employees = await employeesRep.getAllEmployees();
  const shiftsPromises = employees.map(async emp => {
      const shifts = await employeeShiftRep.getShiftsById(emp._id);
      const shiftDetailsPromises = shifts.map(shift => shiftRep.getDetailsById(shift));
      const shiftDetails = await Promise.all(shiftDetailsPromises);
      return { employeeId: emp._id, shifts: shiftDetails };
  });
  const departments = await departmentRep.getDepartments();
  const employeesWithShifts = await Promise.all(shiftsPromises);
  return { employees, employeesWithShifts, departments };
};

const getIdByNameDepartment = (name) => {
  return departmentRep.getIdByNameDepartment(name);
}

const updateEmployee = async(id, obj) => {
  const departmentID =await getIdByNameDepartment(obj.departmentID);
  obj.departmentID= departmentID;
  const result = await employeesRep.updateEmployee(id,obj);
  return { 'response': 'updated' }
  };

  const deleteEmployee = (id) => {
    return employeesRep.deleteEmployee(id);
  };


  module.exports = {getAllEmployees,updateEmployee,getIdByNameDepartment,deleteEmployee};