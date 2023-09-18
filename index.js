const express = require("express");
const path = require("path");

const misc = require("./misc");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use("/misc", misc);

app.get("/", (req, res) => {
  res.send("hello me");
});

app.get(
  "/users",
  (req, res, next) => {
    console.log("req in first");
    next();
  },
  (req, res) => {
    res.send("users page");
  }
);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
