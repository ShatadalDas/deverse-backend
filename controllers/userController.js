const model = require("../model/user.json");

const getAll = async (req, res) => {
  const users = await model;
  try {
    if (!users) return res.status(204).json({ message: "no user found" });
    res.json(users);
  } catch (err) {
    console.err(err.message);
  }
};

const getOne = async (req, res) => {
  const user = await model.filter((user) => user.id == req.query.id)
  try {
    if (!user.length) return res.json({ message: "user not found" });
    res.json(user);
  } catch (err) {
    console.err(err.message);
  }
};

module.exports = { getAll, getOne };
