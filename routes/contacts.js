const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contactsController');

/**
 * @swagger
 * tags:
 *   name: Contacts
 *   description: API for managing contacts
 */

/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: Retrieves all contacts
 *     tags: [Contacts]
 *     responses:
 *       200:
 *         description: List of contacts retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: Contact ID.
 *                   firstName:
 *                     type: string
 *                     description: Contact's first name.
 *                   lastName:
 *                     type: string
 *                     description: Contact's last name.
 *                   email:
 *                     type: string
 *                     description: Contact's email.
 *                   favoriteColor:
 *                     type: string
 *                     description: Contact's favorite color.
 *                   birthday:
 *                     type: string
 *                     format: date
 *                     description: Contact's birth date.
 */
router.get('/', contactsController.getAllContacts);

/**
 * @swagger
 * /contacts/{id}:
 *   get:
 *     summary: Retrieves a contact by its ID
 *     tags: [Contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the contact to retrieve.
 *     responses:
 *       200:
 *         description: Details of the found contact.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: Contact ID.
 *                 firstName:
 *                   type: string
 *                   description: Contact's first name.
 *                 lastName:
 *                   type: string
 *                   description: Contact's last name.
 *                 email:
 *                   type: string
 *                   description: Contact's email.
 *                 favoriteColor:
 *                   type: string
 *                   description: Contact's favorite color.
 *                 birthday:
 *                   type: string
 *                   format: date
 *                   description: Contact's birth date.
 *       404:
 *         description: Contact not found.
 */
router.get('/:id', contactsController.getContactById);

/**
 * @swagger
 * /contacts:
 *   post:
 *     summary: Creates a new contact
 *     tags: [Contacts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - favoriteColor
 *               - birthday
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               favoriteColor:
 *                 type: string
 *               birthday:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Contact created successfully. Returns the new contact's ID.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *       400:
 *         description: Request error.
 */
router.post('/', contactsController.createContact);

/**
 * @swagger
 * /contacts/{id}:
 *   put:
 *     summary: Updates an existing contact
 *     tags: [Contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the contact to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               favoriteColor:
 *                 type: string
 *               birthday:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Contact updated successfully.
 *       400:
 *         description: Request error.
 *       404:
 *         description: Contact not found.
 */
router.put('/:id', contactsController.updateContact);

/**
 * @swagger
 * /contacts/{id}:
 *   delete:
 *     summary: Deletes a contact
 *     tags: [Contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the contact to delete.
 *     responses:
 *       200:
 *         description: Contact deleted successfully.
 *       404:
 *         description: Contact not found.
 */
router.delete('/:id', contactsController.deleteContact);

module.exports = router;
