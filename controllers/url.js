const shortid = require("shortid"); //npm package to generate a random short id
const URL = require("../models/url"); //url schema

//generate random short id 
const handleGenerateNewShortURL = async (req, res) => {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const shortID = shortid();

  //random id, shorten url will be added to db
  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });
  res.render("home", {
    id: shortID,
  });
};

//check how many clicks on urls
const handleGetAnalytics = async (req, res) => {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
};

//get all the urls from db
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
