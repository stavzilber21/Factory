const eShift =  require('../models/employeeShiftModel');

const getShiftsById = async (employeeID) => {
    const emp = await eShift.findOne({"employeeID": employeeID});
    const shifts = emp.shifts;
    return shifts;
  };

const deleteEmployeeShifts = (employeeID) =>{
  return eShift.findOneAndDelete({"employeeID": employeeID});
}

const addShiftToEmployee = async (employeeID, shiftID) => {
  try {
      // Find the employee document by employeeID
      const emp = await eShift.findOne({ "employeeID": employeeID });
      if (emp) {
          // Add the new shiftID to the shifts array
          emp.shifts.push(shiftID);
          // Save the updated employee document
          await emp.save();
          console.log(`Shift ${shiftID} added to employee ${employeeID}.`);
          return { 'response': 'added'};
      } else {
          console.log(`Employee with ID ${employeeID} not found.`);
      }
      
  } catch (error) {
      console.error("Error adding shift to employee:", error);
  }
}

module.exports = {getShiftsById,deleteEmployeeShifts,addShiftToEmployee};