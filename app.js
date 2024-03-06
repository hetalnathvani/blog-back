const express = require("express");

const app = express();
const tourRouter = require("./routes/tourRoutes");

// Routes
app.use(express.json()); // middleware

const port = 3000;
app.listen(port, () => {
  console.log("app running on the port 3000, Hiiiiiiiiiiiiiiiiiiii");
  // app.use("api/v1/tours", tourRouter);
});
