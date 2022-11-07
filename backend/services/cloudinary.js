require("dotenv").config();
//!DEPENDENCIES
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//!CONFIGURE STORAGE
//Define where to store in this case in cloudinary and pass to multer to upload
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    resource_type: "auto",
    allowedFormats: ["jpeg", "png", "jpg", "mp4", "mp3"],
    folder: "GifLife",
  },
});

//!UPLOAD FILE
const upload = multer({ storage: storage });

module.exports = {
  upload,
};
