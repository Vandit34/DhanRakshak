const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    goalName: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;
