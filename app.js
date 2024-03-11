require("./Database/db");

const express = require("express");

const app = express();
const tourRouter = require("./routes/tourRoutes");

// Routes
app.use(express.json()); // middleware

const port = 8000;

// Tour module
app.use("/api/tours", tourRouter);

app.listen(port, () => {
  console.log("app running on the port 8000 !!!");
});
