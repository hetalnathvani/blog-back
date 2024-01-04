const express = require("express");
const fs = require("fs");

const app = express();
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/sample.json`));

// Routes

app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({ status: "Success", data: tours });
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from server side" });
});

app.post("/", (req, res) => {
  console.log(tours);
  res.status(200).json({ message: "You can post on this..." });
});

const port = 3000;
app.listen(port, () => {
  console.log("app running on the port 3000");
});
