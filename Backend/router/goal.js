// const express = require('express');
// const router = express.Router();
// const Goal = require('../models/goal');

// // Route to create a new goal
// router.post('/create', goalController.createGoal);

// async (req, res) => {
//     try {
//         const { userId, goalName, amount, category, description } = req.body;
        
//         // Create a new goal
//         const goal = await Goal.create({
//             userId,
//             goalName,
//             amount,
//             category,
//             description
//         });
        
//         res.status(201).json({ success: true, data: goal });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, error: 'Internal Server Error' });
//     }
// };

// module.exports = router;