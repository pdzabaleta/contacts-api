// swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Contacts API',
      version: '1.0.0',
      description: 'API for storing and retrieving contacts'
    },
    servers: [
      {
        url: process.env.BASE_URL || 'http://localhost:8080'
      }
    ]
  },
  apis: ['./routes/*.js']
};

const swaggerSpec = swaggerJsdoc(options);

fs.writeFile('./swagger-output.json', JSON.stringify(swaggerSpec, null, 2), (err) => {
  if (err) {
    console.error("Error generating Swagger JSON:", err);
  } else {
    console.log("swagger-output.json generated successfully!");
  }
});
