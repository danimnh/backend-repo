import express from 'express';
import { addUserData, updateUserData, fetchUserData } from '../controllers/api';
import authMiddleware from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/add-user-data', authMiddleware, addUserData);
router.put('/update-user-data', authMiddleware, updateUserData);
router.get('/fetch-user-data/:userId', authMiddleware, fetchUserData);

export default router;
