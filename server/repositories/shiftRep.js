const Shift = require('../models/shiftModel');

const getShifts =()=>{
    return Shift.find();
}

module.exports ={getShifts};