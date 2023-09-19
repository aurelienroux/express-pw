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
app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  // Cookies that have not been signed
  console.log("Cookies: ", req.cookies);

  res.render("index", {
    title: "test react express",
    message: "hello express",
  });
});

app.get("/users/:id", (req, res) => {
  let responseText = `Hello World! id:${req.params.id}<br>`;
  responseText += `<small>Requested at: ${req.requestTime}</small>`;

  res.send(responseText);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
