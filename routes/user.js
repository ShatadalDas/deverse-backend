const express = require("express");
const router = express.Router();
const user = require("../controller/userController");

router.route("/getAll").get(user.getAll);

module.exports = router;
