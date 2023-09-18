const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log("router middleware log");
  next();
});

router.get("/", (req, res) => {
  res.send("misc homepage");
});

router.get("/about", (req, res) => {
  res.send("misc about");
});

module.exports = router;
