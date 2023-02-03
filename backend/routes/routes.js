import express from "express"
const router = express.Router();
import authController from "../controllers/auth-controller";

router.post("/send-otp", authController.sendOtp)
router.post("/verify-otp", authController.verifyOtp)

export default router;