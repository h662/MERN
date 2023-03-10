const express = require("express");
const app = express();

const port = 3010;

const userRouter = require("./router/user");

app.use(express.json());

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.json({
    success: true,
  });
});

app.listen(port, () => {
  console.log(`server is listening at localhost: ${port}`);
});
