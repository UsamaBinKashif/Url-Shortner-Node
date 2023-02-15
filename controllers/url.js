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

  return res.json({ id: shortID });
};

const handleGetURL = async (req, res) => {
  const date = new Date().toLocaleString();

  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      visitHistory: {
        timestamp: date,
      },
    }
  );
  return res.redirect(entry.redirectURL);
};

module.exports = {
  handleGenerateNewShortURL,
  handleGetURL,
};
