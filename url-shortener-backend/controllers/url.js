const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateNewSortURL(req, res) {
  const shortId = shortid();
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ message: "URL is required" });
  }
  await URL.create({
    shortId: shortId,
    redirectURL: body.url,
    visithistory: [],
  });
  return res.json({ shortId: shortId });
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const entry = await URL.findOne({ shortId });
  return res.json({
    totalclicks: entry.visithistory.length,
    analytics: entry.visithistory,
  });
}

module.exports = { handleGenerateNewSortURL, handleGetAnalytics };
