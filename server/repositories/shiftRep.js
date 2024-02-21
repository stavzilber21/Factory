const Shift = require('../models/shiftModel');

const getShifts =()=>{
    return Shift.find();
}

const getDetailsById = async (_id) => {
    try {
        const shift = await Shift.findById(_id);
        return shift;
    } catch (error) {
        console.error("Error fetching shift details:", error);
        throw error; // Optionally re-throw the error for handling it elsewhere
    }
}

module.exports ={getShifts,getDetailsById};