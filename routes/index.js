const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const authRoutes = require("./auth.js");

// API Routes
router.use("/api", apiRoutes);

//Authentication Routes
router.use("/routes", authRoutes);

// sending the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;