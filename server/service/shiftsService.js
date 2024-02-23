const shiftRep = require('../repositories/shiftRep');
const employeeShiftRep = require('../repositories/employeeShiftRep');

const getShiftsByEmployeesId = async (id) => {
    const shifts = await employeeShiftRep.getShiftsById(id);
    const allShifts = await shiftRep.getShifts();

    const hisShifts = allShifts.filter(sh => shifts.includes(sh._id));
    const hisNotShifts = allShifts.filter(sh => !shifts.includes(sh._id));
    return {hisShifts,hisNotShifts}
}
const addShiftToEmployee = (employeeID, shiftID) =>{
    return employeeShiftRep.addShiftToEmployee(employeeID,shiftID);
}

const addEmployeeAndShifts = (obj) => {
    return employeeShiftRep.addEmployeeAndShifts(obj);
}



module.exports = { getShiftsByEmployeesId ,addShiftToEmployee,addEmployeeAndShifts}