import express from 'express';
import { foodRegister } from '../controllers/food.controller.js';

const router = express.Router();

// Example route: POST /food
router.post('/food', foodRegister);

export default router;
