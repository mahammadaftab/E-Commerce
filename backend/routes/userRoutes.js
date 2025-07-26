import express from 'express';
import { registerUser, authUser, getUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/login', authUser);
router.post('/register', registerUser);
router.get('/profile', protect, getUserProfile);

export default router;
