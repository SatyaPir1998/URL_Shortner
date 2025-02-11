const User = require("../models/user");
async function hendaleUserSignup(req, res) {
  const { name, email, password } = req.body;
  await User.create({ name, email, password });
  res.json({ message: "User created successfully" });
}

module.exports = { hendaleUserSignup };
