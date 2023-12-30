const express = require("express");
const router = express.Router();
const user = require("../controller/userController");

router.route("/getAll").get(user.getAll);
router.route("/get").get(user.getOne);

module.exports = router;
