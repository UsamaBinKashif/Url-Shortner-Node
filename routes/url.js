const express = require("express");
const {
  handleGenerateNewShortURL,
  handleGetAnalytics,
  handleGetAllUrls,
  handleRedirectToUrl,
} = require("../controllers/url");

const router = express.Router();

//static router page
router.get("/", (req, res) => {
  res.render("home");
});

//generate a short id
router.post("/", handleGenerateNewShortURL);

//get total click and timestamps of clicks on short url by id
router.get("/analytics/:shortId", handleGetAnalytics);

//get all the urls stored in data
router.get("/getAll", handleGetAllUrls);

//get the redirect url by given id
router.get("/:shortId", handleRedirectToUrl);

//export modules
module.exports = router;
