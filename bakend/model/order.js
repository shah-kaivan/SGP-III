const mongoose = require('mongoose');

// Define the order schema
const orderSchema = new mongoose.Schema({
  // Add the fields you need for an order
   user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true // Make sure this is set to true
    },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // Reference to the product in the order
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      
  totalAmount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'return', 'delivered', 'canceled'],
    default: 'pending',
  },
  // Add any other fields you need for your order model
}, { timestamps: true }); // Add timestamps for createdAt and updatedAt

// Create the order model
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
