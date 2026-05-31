const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true,
        minlength: 10
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;