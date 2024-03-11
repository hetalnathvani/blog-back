const mongoose = require('mongoose');
// Define the Tour schema
const tourSchema = new mongoose.Schema({
 name: {
    type: String,
    required: true,
    unique: true,
 },
 guide_email: {
    type: String,
    required: true,
    unique: true,
 },
 password: {
    type: String,
    required: true,
 },
 createdAt: {
    type: Date,
    default: Date.now,
 },
});

// Create the Tour model from the schema
const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;
