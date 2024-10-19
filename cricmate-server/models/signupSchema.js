import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const signupSchema = new mongoose.Schema({
    
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    uType: {
        type: String,
        required: true,
    }
});

signupSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    try {
        this.password = await bcrypt.hash(this.password, 10);
        next();
    } catch (error) {
        next(error);
    }
})
signupSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

export default mongoose.model("signup", signupSchema);