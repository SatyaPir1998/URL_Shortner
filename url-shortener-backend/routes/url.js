const express = require("express");
const router = express.Router();
const {
  handleGenerateNewSortURL,
  handleGetAnalytics,
} = require("../controllers/url");

router.post("/", handleGenerateNewSortURL);

router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
