const express = require("express");
const fs = require("fs");

const app = express();
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/sample.json`));

// Routes
app.use(express.json()); // middleware
app.use(morgan("dev"));

app.use("api/v1/tours", tourRouter);

const tourRouter = express.Router();

tourRouter.route("/").get(getAllTours);
tourRouter.route("/:id").patch(updateTour);

const getAllTours = (req, res) => {
  res.status(200).json({ status: "Success", data: tours });
};
const updateTour = (req, res) => {
  res.status(201).json({ status: "Success", data: "Updated successfully!" })
};

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
