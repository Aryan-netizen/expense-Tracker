const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
amount: {
    type: Number,
    required: [true, 'Please add an amount'],
},
description: {
    type: String,
    required: [true, 'Please add a description'],
    trim: true
},
category: {
    type: String,
    required: [true, 'Please add a category'],
    trim: true
},
date: {
    type: Date,
    default: Date.now
},
user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
}
}, {
timestamps: true
});

module.exports = mongoose.model('Expense', ExpenseSchema);

