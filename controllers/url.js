const shortid = require("shortid");
const URL = require("../models/url");

const handleGenerateNewShortURL = async (req, res) => {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const shortID = shortid();

  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });
  res.render("home", {
    id: shortID,
  });
};

const handleGetAnalytics = async (req, res) => {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
};

const handleGetAllUrls = async (req, res) => {
  const allUrls = await URL.find({});
  res.render("home", {
    urls: allUrls,
  });
};

const handleRedirectToUrl = async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
};
module.exports = {
  handleGenerateNewShortURL,
  handleGetAnalytics,
  handleGetAllUrls,
  handleRedirectToUrl,
};
