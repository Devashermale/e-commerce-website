const express = require("express");
const router = express.Router();
const orderpayment = require('../controller/orderpaymentcontroller')

router.get('/cart',orderpayment.getAllOrderPayments)
router.get('/cart/:id',orderpayment.getOrderPaymentById)
router.post('/cart',orderpayment.createOrderPayment)
router.put('/cart/:id',orderpayment.updateOrderPaymentStatus)
router.delete('/cart/:id',orderpayment.deleteOrderPayment)

module.exports = router