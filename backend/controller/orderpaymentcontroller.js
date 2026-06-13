const orderPaymentModel = require("../model/orderpaymentSchema");

exports.createOrderPayment = async (req, res) => {
    try {
        const { userId, orderId, paymentMethod, amount } = req.body;    
        const newOrderPayment = new orderPaymentModel({
            userId,
            orderId,    
            paymentMethod,
            amount
        });
        const savedOrderPayment = await newOrderPayment.save();
        res.status(201).json(savedOrderPayment);
    } catch (error) {
        res.status(500).json({ message: 'Error creating order payment', error });
    }

};

exports.getOrderPaymentById = async (req, res) => {
    try {
        const { id } = req.params;
        const orderPayment = await orderPaymentModel.findById(id);
        if (!orderPayment) {
            return res.status(404).json({ message: 'Order payment not found' });
        }
        res.status(200).json(orderPayment);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching order payment', error });
    }
};

exports.updateOrderPaymentStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { paymentStatus } = req.body;
        const updatedOrderPayment = await orderPaymentModel.findByIdAndUpdate(
            id,
            { paymentStatus },
            { new: true }
        );  
        if (!updatedOrderPayment) {
            return res.status(404).json({ message: 'Order payment not found' });        
        }
        res.status(200).json(updatedOrderPayment);
    } catch (error) {
        res.status(500).json({ message: 'Error updating order payment status', error });
    }   
};

exports.deleteOrderPayment = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedOrderPayment = await orderPaymentModel.findByIdAndDelete(id);
        if (!deletedOrderPayment) {
            return res.status(404).json({ message: 'Order payment not found' });
        }
        res.status(200).json({ message: 'Order payment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting order payment', error });
    }   
};

exports.getAllOrderPayments = async (req, res) => {
    try {
        const orderPayments = await orderPaymentModel.find({});
        res.status(200).json(orderPayments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching order payments', error: error.message });
    }
};


