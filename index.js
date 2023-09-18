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

const logger = (req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(`logger function`);
  next();
};

function requestTime(req, res, next) {
  req.requestTime = Date.now();

  next();
}

app.use(logger);
app.use(requestTime);

app.get("/users", (req, res) => {
  let responseText = "Hello World!<br>";
  responseText += `<small>Requested at: ${req.requestTime}</small>`;

  res.send(responseText);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
