const express = require("express"); //initialize express
const router = express.Router(); //get express router
const { handleSIGNUPUSER } = require("../controllers/user"); //signup function

//get req on user
router.get("/", (req, res) => {
  res.render("signup");
});
//get req on user
router.get("/sigin", (req, res) => {
  res.render("signin");
});

//post req on user
router.post("/", handleSIGNUPUSER);

module.exports = router;
