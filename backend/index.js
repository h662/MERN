const express = require("express");
const app = express();
const port = 3010;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
  });
});

app.get("/practice", (req, res) => {
  res.send("Hello, Express!");
});

app.post("/practice", (req, res) => {
  console.log(req.body);

  res.json({
    success: true,
  });
});

app.listen(port, () => {
  console.log(`server is listening at localhost: ${port}`);
});
