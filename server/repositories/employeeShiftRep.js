const eShift =  require('../models/employeeShiftModel');

const getShiftsById = async (employeeID) => {
    const emp = await eShift.findOne({"employeeID": employeeID});
    const shifts = emp.shifts;
    return shifts;
  };


  module.exports = {getShiftsById};