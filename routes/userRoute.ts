import express from 'express';
import { addUserData, updateUserData, fetchUserData } from '../controllers/api';

const router = express.Router();

router.post('/add-user-data', addUserData);
router.put('/update-user-data', updateUserData);
router.get('/fetch-user-data/:userId', fetchUserData);

export default router;
