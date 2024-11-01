import express from "express";
import { newSignup ,sendOtp, verifyUser } from "../controller/signupController.js";
import { userLogin } from "../controller/loginController.js";
import { createScore, addCommentary, getCommentary,updateCommentary } from "../controller/scoreController.js";
import { getSeries, getThisSeries, newSeries, updateSeries } from "../controller/seriesController.js";
import { getMatch, newMatch, updateMatch, getMatches } from "../controller/matchController.js";
import { createNews, getNews, updateNews } from "../controller/newsController.js";
import { createShop, getShop, updateShop } from "../controller/shopController.js";
import { addToCart, getCart, removeFromCart,clearCart } from "../controller/cartController.js";

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
router.get("/getSeries/:id", getThisSeries);
router.get("/match", getMatch);
router.get("/getAllMatches", getMatches);
router.post("/newMatch", newMatch);
router.put("/updateMatch/:id", updateMatch);
router.post("/createNews", createNews);
router.get("/news", getNews);
router.put("/updateNews/:id", updateNews);
router.post("/createShop", createShop);
router.get("/shop", getShop);
router.put("/updateShop/:id", updateShop);
router.post("/addToCart/:userId", addToCart);
router.get("/getCart:/userId", getCart);
router.put("/removeFromCart/:userId", removeFromCart);
router.delete("/deleteCart/:userId", clearCart );



export default router;