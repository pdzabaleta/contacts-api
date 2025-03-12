const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const contactsRoutes = require('./routes/contacts'); 
const indexRoutes = require('./routes/index'); 

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use('/', indexRoutes);
app.use('/contacts', contactsRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(error => console.error('❌ MongoDB connection error:', error));
