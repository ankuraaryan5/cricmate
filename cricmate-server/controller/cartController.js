import Cart from "../models/cartSchema.js";

export const addToCart = async (req, res) => {
    const { productId, quantity } = req.body;
    const { userId } = req.params;
    try {
        const cart = await Cart.findOne({ userId });
        if (!cart) {
            const newCart = new Cart({ userId, cartItems: [{ productId, quantity }] });
            await newCart.save();
            return res.status(201).json({ message: "Cart created successfully" });
        }
        const existingCartItem = cart.cartItems.find((item) => item.productId.toString() === productId);
        if (existingCartItem) {
            existingCartItem.quantity += quantity;
            await cart.save();
            return res.status(200).json({ message: "Cart updated successfully" });
        }
        cart.cartItems.push({ productId, quantity });
        await cart.save();
        return res.status(200).json({ message: "Cart updated successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export const getCart = async (req, res) => {
    const { userId } = req.params;
    try {
        const cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// remove from cart and clear cart will be added
