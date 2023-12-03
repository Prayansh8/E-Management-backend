const express = require("express");
const bodyParser = require("body-parser");
const { beTenentAwareReq } = require("./middleware/tenentAware");
const app = express();
const userRouter = require("./routes/userRoutes");
const cors = require("cors");

app.use(beTenentAwareReq);
app.use(bodyParser.json());
app.use(cors());

app.get("/", async (req, res) => {
  // console.log(req.tenant);
});

app.use("/", userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port https://localhost:${PORT}`);
});
