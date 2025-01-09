const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        minlength: [4, 'Username is too short']
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        minlength: [13, 'Email is too short']
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: [5, 'Password is too short']
    },
    age: {
        type: Number,
        required: true,
        min: [1, 'Age must be a positive number'],
        match: [/^\d+$/, 'Age must be a number']
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minlength: [10, 'Phone number must be at least 10 digits'],
        maxlength: [15, 'Phone number must be at most 15 digits'],
        match: [/^\d+$/, 'Phone number must contain only numbers'] // Validates that phoneNumber contains only digits
    }
});

const user = mongoose.model('user', userSchema);

module.exports = user;
