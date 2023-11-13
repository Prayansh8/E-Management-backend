const { db } = require("../databases/index");
require("dotenv").config();
const jwt = require('../middleware/jwt');

const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const tenantId = req.tenant.id;
    const userData = {
      username,
      password,
      tenantId: tenantId,
    };
    const savedUser = db.User(userData);
    savedUser.save();
    return res.status(201).json({ user: savedUser });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const userLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const tenantId = req.tenant.id;
    const existingUser = await db.User.findOne({ username, tenantId });

    if (!existingUser) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    if (!existingUser || password !== existingUser.password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.generateToken({
      userId: existingUser._id,
      username,
      tenantId,
    });
    return res
      .status(200)
      .json({ message: "Login successful", user: existingUser, token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { createUser, userLogin };
