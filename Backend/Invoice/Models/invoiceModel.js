const mongoose = require("mongoose");

const validStatusValues = ["pending", "paid", "unpaid"];
const InvoiceSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  invoiceDueDate: {
    type: Number,
    required: false,
  },
  purchaseOrderNumber: {
    type: Number,
    required: true,
  },
  invoiceNumber: {
    type: Number,
    required: true,
  },
  detailDescription: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  paymentStatus:{
    type: String,
    default:"pending",
    enum: validStatusValues,
    required: false,
  }
});

const InvoiceDetail = mongoose.model("InvoiceDetail", InvoiceSchema);

module.exports = { InvoiceDetail };
