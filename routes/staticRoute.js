const express = require("express");
const router = express.Router();
const { handleSIGNINUSER, handleSIGNUPUSER } = require("../controllers/user");

//signup page
router.get("/", (req, res) => {
  res.render("signup");
});

//post request when user signed up. if all the details are correct user will be added to database and redirected to sign in page
router.post("/signup", handleSIGNUPUSER);

//sign in page
router.get("/signin", (req, res) => {
  res.render("signin");
});

//post request when user sign in. if all the details are correct app will look up for user in the database and redirected to home page
router.post("/signin", handleSIGNINUSER);


//export modules
module.exports = router;
