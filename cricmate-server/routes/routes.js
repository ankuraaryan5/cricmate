import express from "express";
import { newSignup ,sendOtp, verifyUser } from "../controller/signupController.js";
import { userLogin } from "../controller/loginController.js";
const router = express.Router();

router.post("/signup", newSignup);
router.post("/sendOtp", sendOtp);
router.post("/verify", verifyUser);
router.post("/login", userLogin);


export default router;