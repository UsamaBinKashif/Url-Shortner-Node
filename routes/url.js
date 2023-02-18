const express = require("express");
const {
  handleGenerateNewShortURL,
  handleGetAnalytics,
  handleGetAllUrls,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewShortURL);

router.get("/analytics/:shortId", handleGetAnalytics);

router.get("/getAll", handleGetAllUrls);
module.exports = router;
