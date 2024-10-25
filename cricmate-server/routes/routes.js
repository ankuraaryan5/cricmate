import express from "express";
import { newSignup ,sendOtp, verifyUser } from "../controller/signupController.js";
import { userLogin } from "../controller/loginController.js";
import { createScore, getScoreById, updateScore } from "../controller/scoreController.js";
import { getSeries, newSeries, updateSeries } from "../controller/seriesController.js";
import { getMatch, newMatch, updateMatch } from "../controller/matchController.js";
const router = express.Router();

router.post("/signup", newSignup);
router.post("/sendOtp", sendOtp);
router.post("/verify", verifyUser);
router.post("/login", userLogin);
router.post("/createScore", createScore);
router.get("/score/:id", getScoreById);
router.put("/updateScore/:id", updateScore);
router.get("/series", getSeries);
router.post("/newSeries", newSeries);
router.put("/updateSeries/:id", updateSeries);
router.get("/match", getMatch);
router.post("/newMatch", newMatch);
router.put("/updateMatch/:id", updateMatch);




export default router;