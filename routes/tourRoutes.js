const express = require("express");
const router = express.Router();
const { getAllTours, createTour } = require("../Controllers/tourController");

router.get("/list", getAllTours);
router.post("/create", createTour);

module.exports = router;
