require("dotenv").config();
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: require("../docs/swaggerDocs.js"),
  apis: ["./docs/*.json"], // Replace with the path to your route files
};

const specs = swaggerJsdoc(options);

module.exports = specs;