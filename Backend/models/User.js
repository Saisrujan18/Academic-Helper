const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema ({
//   name: {type: String, required: true},
  emailId: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  isAdmin: {type: Boolean, default: false},
  isBlocked: {type:Boolean,default:false},
});

const User = mongoose.model ('User', UserSchema);

module.exports = User;