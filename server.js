const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const contactsRoutes = require('./routes/contacts');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/contacts', contactsRoutes);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ Connected to MongoDB');
}).catch(err => {
  console.error('❌ MongoDB connection error:', err);
});

app.listen(8080, () => {
  console.log('🚀 Server running on port 8080');
});
