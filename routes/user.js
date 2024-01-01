const express = require("express");
const router = express.Router();
const user = require("../controllers/userController");

router.route("/getAllUser").get(user.getAll);
router.route("/getUser").get(user.getOne);

module.exports = router;
