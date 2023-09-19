const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const misc = require("./misc");
const { logger, requestTime } = require("./middlewares");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.use("/misc", misc);
app.use(logger);
app.use(requestTime);

app.get("/", (req, res) => {
  // Cookies that have not been signed
  console.log("Cookies: ", req.cookies);
  // Cookies that have been signed
  console.log("Signed Cookies: ", req.signedCookies);

  res.send("hello express");
});

app.get("/users", (req, res) => {
  let responseText = "Hello World!<br>";
  responseText += `<small>Requested at: ${req.requestTime}</small>`;

  res.send(responseText);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
