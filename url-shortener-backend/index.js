const express = require("express");
const cors = require("cors");
const urlRoutes = require("./routes/url");
const userRoutes = require("./routes/user");
const connectToMongodb = require("./connect");
const URL = require("./models/url");
const app = express();

const PORT = process.env.PORT || 8001;

connectToMongodb("mongodb://127.0.0.1:27017/urlshortner");

app.use(cors()); // Enable CORS

app.use(express.json()); // Middleware to parse JSON bodies

app.use("/url", urlRoutes); // http://localhost:8001/url
app.use("/user", userRoutes); // http://localhost:8001/user

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: { visithistory: { timestamp: Date.now() } },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
