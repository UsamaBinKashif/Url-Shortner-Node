const express = require("express");
const router = express.Router();
const { handleSIGNUPUSER } = require("../controllers/user");

router.get("/", (req, res) => {
  res.render("signup");
});
router.get("/sigin", (req, res) => {
  res.render("signin");
});

router.post("/", handleSIGNUPUSER);

module.exports = router;
