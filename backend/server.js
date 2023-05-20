//!ADD ENVIRONMENT VARIABLES
require("dotenv").config();

//!DEPENDENCIES
const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const specs = require('./services/swagger');


//!CONNECTION DB
const connect = require("./config/db");
connect();

//!MIDDLEWARE
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(helmet());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);


//!WELCOME MESSAGE
app.get("/", (req, res, next) => {
  res.status(200).send("Welcome to Gif life API test 🥳");
});
//!ROUTES
const gifsRoutes = require("./routes/gifsRoutes");
app.use("/gifs", gifsRoutes);
//!PORT TO LISTEN
app.listen(process.env.PORT, () => {
  console.log(`App express is running in port: ${process.env.PORT}`);
});
