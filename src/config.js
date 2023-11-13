const dotenv = require("dotenv");
dotenv.config();

const config = {
  port: process.env.PORT || 5000,
  baseUrl: process.env.BASE_URI || "http://localhost",
  mongo: {
    url:
      process.env.MONGO_URL ||
      "mongodb+srv://Prayansh811:Prayansh811@cluster0.u7jcnaf.mongodb.net/E-Management",
  },
  jwt: {
    jwtSecretKey: process.env.JWT_SECRET_KEY,
    tokenHeaderKey: process.env.TOKEN_HEADER_KEY,
    localStorageTokenName: process.env.LOCAL_STORAGE_TOKEN_NAME,
  },
};

module.exports = { config };
