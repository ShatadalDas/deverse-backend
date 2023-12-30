const express = require("express");
const router = express.Router();
const user = require("./../../controller/userController");

router.route("/api/getUser").get(user.getAllUser);

module.exports = router;
