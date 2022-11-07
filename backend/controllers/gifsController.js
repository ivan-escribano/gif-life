const Gif = require("../models/Gif");

const getAllGifs = async (req, res) => {
  try {
    const gifs = await Gif.find();
    res.status(200).send(gifs);
  } catch (error) {
    res.status(400).send("Cannot get the gif's");
  }
};

const postGif = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!req.file) {
      return res.status(400).send("File it's not defined");
    }
    const gifImage = req.file.path;
    const gif = await Gif.create({
      title,
      description,
      gifImage,
    });
    return res.status(200).send("Gif created successfully");
  } catch (error) {
    return res.status(400).send("Something went wrong!! try later");
  }
};

module.exports = {
  getAllGifs,
  postGif,
};
