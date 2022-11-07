const mongoose = require("mongoose");

const gifSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  gifImage: {
    type: String,
    required: [true, "Image of gif is required"],
  },
  gifType: [{ type: String, required: [true, "Type is required"] }],
});

module.exports = mongoose.model("Gif", gifSchema);
