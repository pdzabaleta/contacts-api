const Contact = require('../models/Contact');

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving contacts', error });
  }
};

exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving contact', error });
  }
};

exports.createContact = async (req, res) => {
  const { firstName, lastName, email, favoriteColor, birthday } = req.body;
  // Verifica que todos los campos estén presentes
  if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  try {
    const newContact = await Contact.create({ firstName, lastName, email, favoriteColor, birthday });
    res.status(201).json({ id: newContact._id });
  } catch (error) {
    res.status(400).json({ message: 'Error creating contact', error });
  }
};

exports.updateContact = async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedContact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(400).json({ message: 'Error updating contact', error });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting contact', error });
  }
};
