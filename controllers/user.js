const USERS = require("../models/user");

const handleADDUSER = async (req, res) => {
  const { name, email, password } = req.body;
  await USERS.create({
    name,
    email,
    password,
  });
  return res.render("home");
};

module.exports = { handleADDUSER };
