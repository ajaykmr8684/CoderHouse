import express from "express"
const router = express.Router();

router.post("/send-otp", (req, res) => {
    res.send("Hello from router")
})

export default router;