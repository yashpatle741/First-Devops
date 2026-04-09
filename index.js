const express = require("express");
const app = express();

const PORT = 3000;

// Home route
app.get("/", (req, res) => {
  res.send("DevOps Project Running🚀");
});

// Health check route (VERY IMPORTANT in real projects)
app.get("/health", (req, res) => {
  res.send("App is healthy ✅");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});