//!DEPENDENCIES
const express = require("express");
const router = express.Router();
const gifsController = require("../controllers/gifsController");
const { upload } = require("../services/cloudinary");
const singleUpload = upload.single("gifImage");
//!CRUD OPERATIONS
router.post("/", singleUpload, gifsController.postGif);
router.get("/", gifsController.getAllGifs);

module.exports = router;
