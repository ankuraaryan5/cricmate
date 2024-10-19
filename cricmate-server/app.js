import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/routes.js";
import connectDB from "./db/dbConnection.js";


const app = express();

app.use(cors());
app.use(express.json());

dotenv.config({
    path: "./config/config.env",
});

app.use("/api/v1", router)
app.get("/", (req, res) => {
    res.send("Hello World!");
});

connectDB();

export default app