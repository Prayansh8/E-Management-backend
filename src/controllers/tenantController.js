const { db } = require("../databases/index");

const createTenant = async (req, res) => {
  try {
    const newTenant = new db.Tenant(req.body);
    const savedTenant = await newTenant.save();
    res.status(201).json(savedTenant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createTenant };
