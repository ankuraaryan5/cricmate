import express from "express";
import { newSignup ,sendOtp, verifyUser } from "../controller/signupController.js";
import { userLogin } from "../controller/loginController.js";
import { createScore, addCommentary, getCommentary,updateCommentary } from "../controller/scoreController.js";
import { getSeries, newSeries, updateSeries } from "../controller/seriesController.js";
import { getMatch, newMatch, updateMatch } from "../controller/matchController.js";

const router = express.Router();

router.post("/signup", newSignup);
router.post("/sendOtp", sendOtp);
router.post("/verify", verifyUser);
router.post("/login", userLogin);
router.post("/createScore", createScore);
router.post("/addCommentary/:matchId", addCommentary);
router.get("/getCommentary/:matchId/:inning", getCommentary);
router.put("/updateCommentary/:matchId/:inning", updateCommentary);
router.get("/series", getSeries);
router.post("/newSeries", newSeries);
router.put("/updateSeries/:id", updateSeries);
router.get("/match", getMatch);
router.post("/newMatch", newMatch);
router.put("/updateMatch/:id", updateMatch);




export default router;


// import express from "express";
// import { newSeries, getSeries, updateSeries, addMatch, updateCommentary} from "../controller/scoringController.js";

// const router = express.Router();

// router.post("/newSeries", newSeries);
// router.get("/series", getSeries);
// router.put("/updateSeries/:id", updateSeries);
// router.post("/addMatch/:id", addMatch);
// router.post("/addCommentary/:id/:matchNumber/:ballNumber", updateCommentary);


// export default router;