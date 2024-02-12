const User = require('../Model/user');
const Transaction = require('../Model/transaction');
const express = require('express');
const Goal = require('../Model/goal');
const router = express.Router();


router.post("/sendMoney/:id", async (req, res) => {
    try {
        const { senderId, receiverId, amount, description, category, goalName } = req.body;

        // const user=await User.findById(req.params.id)
        // const senderId=user.senderId;

        // Create a new transaction
        const transaction = await Transaction.create({
            senderId,
            receiverId,
            amount,
            description,
            category,
            goalName
        });

        const goal = await Goal.create({
            goalName,
            amount,
            category,
            description
        });
        

        // Update sender's transaction history
        // await User.findByIdAndUpdate(senderId, { $push: { transactionHistory: transaction._id } });
        await Transaction.create({transaction});

        // Update receiver's transaction history
        // await User.findByIdAndUpdate(receiverId, { $push: { transactionHistory: transaction._id } });
        // await User.create(receiverId, { $push: { transactionHistory: transaction._id } });

        res.status(201).json({ success: true, data: transaction });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
})

router.get("/transactionHistory", async(req,res)=>{
    return res.send(await Transaction.find());
})

router.get("/transactionHistory/:id", async (req, res) =>{
    return res.send(await Transaction.find());
} )

router.get("/transactionHistory/:id", async (req, res) =>{
    return res.send(await Transaction.findById(req.params.id));
} )





module.exports = router;
