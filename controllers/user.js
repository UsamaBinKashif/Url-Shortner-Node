const USERS = require("../models/user"); //users schema
const { getUser, setUser } = require("../service/auth"); //cookie creating from service
const { v4: uuidv4 } = require("uuid"); // it is an npm package which generate a random id whenever called

//sign up function
const handleSIGNUPUSER = async (req, res) => {
  const { name, email, password } = req.body;
  await USERS.create({
    name,
    email,
    password,
  });
  //if correctly done then user will be added to db and redirected to sign in
  return res.redirect("/signin");
};

//sign in function
const handleSIGNINUSER = async (req, res) => {
  const { email, password } = req.body;
  const user = await USERS.findOne({ email, password });
  //if correctly done then app will find user from db and redirected to home
  if (user) {
    const sessionId = uuidv4();
    setUser(sessionId, user);
    res.cookie("uuid", sessionId);
    return res.redirect("/url");

  } 
  //else user will be redirected to sign in again
  else {
    return res.render("signin", {
      error: "Incorrect Email or Password... Try again",
    });
  }
};

//exporting functions
module.exports = { handleSIGNINUSER, handleSIGNUPUSER };
