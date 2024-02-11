const employeesRep = require('../repositories/employeeRep');
const departmentRep = require('../repositories/departmentRep');
const shiftRep = require('../repositories/shiftRep');
const employeeShiftRep = require('../repositories/employeeShiftRep');


const getAllEmployees = async () => {
  const employees = await employeesRep.getAllEmployees();
  const shiftsPromises = employees.map(async emp => {
      const shifts = await employeeShiftRep.getShiftsById(emp._id);
      return { employeeId: emp._id, shifts };
  });
  const departments =await departmentRep.getDepartments();
  const employeesWithShifts = await Promise.all(shiftsPromises);
  return { employees, employeesWithShifts,departments };
};

  module.exports = {getAllEmployees};