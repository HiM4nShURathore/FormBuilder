
import express from 'express';
import { createForm, getForms, getFormById, deleteForm } from '../controllers/formController.js';

const router = express.Router();

// Routes for forms
router.post('/', createForm);             // Create form
router.get('/', getForms);                // Get all forms
router.get('/:id', getFormById);          // Get a single form by ID
router.delete('/:id', deleteForm);       // Delete form by ID

export default router;

