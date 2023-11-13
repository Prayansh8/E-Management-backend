const { config } = require("../config");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Tenant = require("./modals/tenantModel");
const User = require("./modals/userModel");

dotenv.config();

const connect = async () => {
  const mongoUrl = `${config.mongo.url}`;
  await mongoose
    .connect(mongoUrl)
    .then(() => console.log("MongoDb Connected!!"))
    .catch((error) => console.log(error));
};

connect();

const db = {
  Tenant: Tenant,
  User: User,
};

module.exports = { connect, db };
