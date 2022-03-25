import Payment from "../schemas/Payment.js";

class PaymentController {
  async sendPayment(request, response) {
    try {
      const { cardNumber, cvv, expirationDate, amount } = request.body;
      const payment = await Payment.create({
        cardNumber,
        cvv,
        expirationDate,
        amount,
      });

      response.json(payment.id);
    } catch (e) {
      response.status(500).json(e);
    }
  }
}

export default new PaymentController();
