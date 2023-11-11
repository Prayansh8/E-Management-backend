const express = require("express");
const { signUp, signIn } = require("./controllers/user");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const { config } = require("./config");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const userRouter = express.Router();
userRouter.post("/register", signUp);
userRouter.post("/get-token", signIn);

app.use("/api/v1", userRouter);

app.listen(config.port, () =>
  console.log(`Example app listening on port ${config.baseUrl}:${config.port}`)
);
