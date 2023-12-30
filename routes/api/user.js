const express = require("express");

const router = express.Router();

router.route("/api/getUser").get((req, res) => {
  res.json({ message: "hello" });
});

module.exports = router;
