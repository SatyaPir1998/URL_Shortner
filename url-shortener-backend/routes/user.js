const express = require("express");
const router = express.Router();

const { hendaleUserSignup } = require("../controllers/user");

router.post("/signup", hendaleUserSignup);

module.exports = router;
