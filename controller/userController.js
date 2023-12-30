const model = require("./../model/user.json");

const getAllUser = async (req, res) => {
  const user = await model;
  try {
    if (!user) return res.status(204).json({ message: "user not found" });
    res.json(user);
  } catch (err) {
    console.err(err.message);
  }
};

module.exports = { getAllUser };
