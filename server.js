const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

dotenv.config();

const contactsRoutes = require('./routes/contacts'); 
const indexRoutes = require('./routes/index'); 

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// Configuración de Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Contacts API',
      version: '1.0.0',
      description: 'API para almacenar y recuperar información de contactos'
    },
    servers: [
      {
        url: process.env.BASE_URL || `http://localhost:${PORT}`
      }
    ]
  },
  // Indica dónde se encuentran los comentarios JSDoc para documentar tus endpoints
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rutas de la API
app.use('/', indexRoutes);
app.use('/contacts', contactsRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(error => console.error('❌ MongoDB connection error:', error));
