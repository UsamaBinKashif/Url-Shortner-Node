const express = require("express");
const router = express.Router();
const { handleADDUSER } = require("../controllers/user");

router.get("/", (req, res) => {
  res.render("signup");
});
router.post("/", handleADDUSER);

module.exports = router;
