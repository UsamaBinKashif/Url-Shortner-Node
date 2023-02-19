const express = require("express");
const router = express.Router();
const { handleSIGNINUSER, handleSIGNUPUSER } = require("../controllers/user");

router.get("/", (req, res) => {
  res.render("signup");
});
router.post("/signup", handleSIGNUPUSER);

router.get("/signin", (req, res) => {
  res.render("signin");
});

router.post("/signin", handleSIGNINUSER);

module.exports = router;
