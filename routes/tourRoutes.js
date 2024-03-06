const express = require("express");
const router = express.Router();
const fs = require("fs");

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/sample.json`)
);

const getAllTours = (req, res) => {
  console.log("in get all tours");
  res.status(200).json({ status: "Success", data: tours });
};

const updateTour = (req, res) => {
  res.status(201).json({ status: "Success", data: "Updated successfully!" });
};

router.route("/test").get(getAllTours);
router.route("/:id").patch(updateTour);

module.exports = router;
