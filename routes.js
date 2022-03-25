import Router from "express";
import PaymentController from "./controllers/PaymentController.js";

const router = new Router();

router.post("/pay", PaymentController.sendPayment);

export default router;
