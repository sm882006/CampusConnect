
const express = require("express");

const app = express();

// Middleware to read incoming JSON data
app.use(express.json());

// Test API endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "CampusConnect backend is working!",
  });
});

module.exports = app;
