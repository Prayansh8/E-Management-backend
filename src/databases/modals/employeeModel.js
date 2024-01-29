const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ["developer", "designer", "manager", "admin"],
    required: true,
  },
  department: {
    type: String,
    enum: ["engineering", "design", "management", "human resources"],
    required: true,
  },
  hireDate: {
    type: Date,
    default: Date.now,
  },
  salary: {
    type: Number,
    required: true,
  },
  currentProject: {
    name: {
      type: String,
    },
    team: {
      type: String,
    },
    role: {
      type: String,
    },
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  tenantId: { type: mongoose.Schema.Types.ObjectId, ref: "Tenant" },
});

module.exports = mongoose.model("Employee", employeeSchema);
