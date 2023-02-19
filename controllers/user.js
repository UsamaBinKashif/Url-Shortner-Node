const USERS = require("../models/user");

const handleSIGNUPUSER = async (req, res) => {
  const { name, email, password } = req.body;
  await USERS.create({
    name,
    email,
    password,
  });
  return res.render("signin");
};
const handleSIGNINUSER = async (req, res) => {
  const { email, password } = req.body;
  const user = await USERS.findOne({ email, password });
  if (user) {
    return res.redirect("/url");
  } else {
    return res.render("signin", {
      error: "Incorrect Email or Password... Try again",
    });
  }
};

module.exports = { handleSIGNINUSER, handleSIGNUPUSER };
