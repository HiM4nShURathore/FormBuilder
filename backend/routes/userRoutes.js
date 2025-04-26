import express from 'express';
import { createUser, getAllUsers } from '../controllers/userController.js';

const router = express.Router();

router.post('/', createUser);         // Create new user
router.get('/', getAllUsers);         // Get all users

export default router;