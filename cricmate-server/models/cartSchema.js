import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "shop",
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
    },
});

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "signup",
        required: true,
    },
    cartItems: [cartItemSchema],
    totalPrice: {
        type: Number,
        required: true,
        default: 0,
    },
});

export default mongoose.model("cart", cartSchema);