import  Food  from '../models/food.js';
import asyncHandler from 'express-async-handler';

// Example controller function
const foodRegister = asyncHandler(async (req, res) => {
    const { userName, email, item, quantity } = req.body;

    try {
        // Example: Create a new food item in MongoDB using Mongoose
        const food = await Food.create({
            userName,
            email,
            item,
            quantity
        });

        res.status(201).json({
            message: 'Food item registered successfully',
            data: food
        });
    } catch (error) {
        console.error('Error registering food item:', error);
        res.status(500).json({
            message: 'Failed to register food item',
            error: error.message
        });
    }
});

export { foodRegister };
