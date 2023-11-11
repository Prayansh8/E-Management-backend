const { config } = require("../config");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const User = require("./modals/User");

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
  user: User,
};

module.exports = { connect, db };
