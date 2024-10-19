import  Signup  from "../models/signupSchema.js";
import jwt from "jsonwebtoken";

export const userLogin = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new ErrorHandler("Please Fill The Form!", 400));
    }
    try {
        const user = await Signup.findOne({ email });
        if (!user) {
            return next(new ErrorHandler("User not found!", 404));
        }
        const isPasswordMatched = await user.comparePassword(password);
        if (!isPasswordMatched) {
            return next(new ErrorHandler("Invalid Password!", 401));
        }
        const token = jwt.sign(
            { id: user.email, uType: user.uType },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN,
            }
        );
        res.status(201).json({
            success: true,
            message: "User logged in successfully!",
            token,
            user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to login user!",
        });
        return next(error);
    }
}