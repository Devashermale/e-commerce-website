const mongoose = require('mongoose');

const orderPaymentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    paymentStatus: {
        type: String,
        required: true, 
        default: 'Pending' 
    },
    amount: {
        type: Number,   
        required: true
    }
}, {
    timestamps: true
});