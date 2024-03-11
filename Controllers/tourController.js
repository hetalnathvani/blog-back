const fs = require("fs");

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/sample.json`)
);

exports.getAllTours = (req, res) => {
    res.status(200).json({ status: "Success", data: tours });
};
  
exports.createTour = (req, res) => {
    console.log(req);
    res.status(201).json({ status: "Success", data: "Created successfully!" });
};
