const mongoose = require("mongoose");
const validator = require("validator");
const { Schema } = mongoose;
const moment = require("moment")

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Plese Enter Your Name"],
    minLength: [4, "Name should have then 4 characters"],
    maxLength: [30, "Name cannot extract 30 characters"],
  },
  email: {
    type: String,
    required: [true, "Plese Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  password: {
    type: String,
    required: [true, "Plese Enter Your Password"],
    minLength: [4, "password should have then 4 characters"],
    maxLength: [100, "password cannot extract 100 characters"],
  },
  createdAt: { type: Date, default: moment.utc().toISOString() },
  updatedAt: { type: Date, default: moment.utc().toISOString() },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
