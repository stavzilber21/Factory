const departmentRep = require('../repositories/departmentRep');

const getDepartments = ()=>{
    return departmentRep.getDepartments();
}

module.exports = { getDepartments}