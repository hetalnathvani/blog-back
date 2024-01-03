const express = require("express");

const app = express();

// Routes
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from server side" });
});

app.post("/", (req, res) => {
  res.status(200).json({ message: "You can post on this..." });
});

const port = 3000;
app.listen(port, () => {
  console.log("app running on the port 3000");
});
