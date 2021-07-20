const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema ({

  emailId: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  isAdmin: {type: Boolean, default: false},
  isBlocked: {type:Boolean,default:false},

});

const User = mongoose.model ('User', UserSchema);

module.exports = User;