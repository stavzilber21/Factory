const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
  {
    fullname: String,
    numOfAction: Number   
  },
  { versionKey: false }
);
const User = mongoose.model('user',userSchema, 'users');
module.exports = User;