import express from "express";
import { newSignup ,sendOtp, verifyUser } from "../controller/signupController.js";
import { userLogin } from "../controller/loginController.js";
import {  createSeries,  addMatch,  updateScore,  updateMatchDetails,  getSeries, getMatch, getAllSeries} from "../controller/newController.js";
import { createNews, getNews, updateNews } from "../controller/newsController.js";
import { createShop, getShop, updateShop } from "../controller/shopController.js";
import { addToCart, getCart, removeFromCart,clearCart } from "../controller/cartController.js";

const router = express.Router();

router.post("/signup", newSignup);
router.post("/sendOtp", sendOtp);
router.post("/verify", verifyUser);
router.post("/login", userLogin);
router.post("/series", createSeries);
router.post("/series/:seriesId/match", addMatch);
router.put("/series/:seriesId/match/:matchIndex", updateMatchDetails);
router.post("/series/:seriesId/match/:matchIndex/score", updateScore);
router.get("/allSeries", getAllSeries);
router.get("/series/:seriesId", getSeries);
router.get("/series/:seriesId/match/:matchIndex", getMatch);
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

