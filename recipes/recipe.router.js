const express = require("express");

const db = require("./recipe.helper");

const router = express.Router;

router.get("/", (req, res) => {
  res.send("Im in recipes");
});

module.exports = router;
