// routes/contacts.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define the contact schema and model
const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  favoriteColor: String,
  birthday: String,
});
const Contact = mongoose.model('Contact', contactSchema);

// GET ALL: Retrieve all contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET by ID: Retrieve a contact by its ID
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
