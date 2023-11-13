const mongoose = require("mongoose");

const tenantSchema = new mongoose.Schema(
  {
    subDomain: { type: String, required: true, unique: true },
    companyName: { type: String, required: true },
    companyEmail: { type: String, required: true, unique: true },
    ceoName: { type: String, required: true },
    contactNumber: { type: String, required: true },
    industryType: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Tenant = mongoose.model("Tenant", tenantSchema);

module.exports = Tenant;
