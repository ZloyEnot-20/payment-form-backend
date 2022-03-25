import mongoose from "mongoose";

const Payment = new mongoose.Schema({
  cardNumber: { type: Number, required: true },
  expirationDate: { type: String, required: true },
  cvv: { type: Number, required: true },
  amount: { type: Number, required: true },
});

export default mongoose.model("Payment", Payment);
