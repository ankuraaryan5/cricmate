import Cart from "../models/cartSchema.js";
import Shop from "../models/shopSchema.js";

export const addToCart = async (req, res) => {
    const { productId, quantity, itemPrice } = req.body;
    const { userId } = req.params;
    try {
      let cart = await Cart.findOne({ userId });
      if (!cart) {
        const newCart = new Cart({ userId, cartItems: [{ productId, quantity, itemPrice }] });
        newCart.totalPrice = itemPrice * quantity; 
        await newCart.save();
        return res.status(201).json({ message: "Cart created successfully", cart: newCart });
      }
      const existingCartItem = cart.cartItems.find((item) => item.productId.toString() === productId);
      if (existingCartItem) {
        existingCartItem.quantity += quantity;
        existingCartItem.itemPrice = itemPrice * existingCartItem.quantity;
      } else {
        cart.cartItems.push({ productId, quantity, itemPrice: itemPrice * quantity });
      }
      cart.totalPrice = cart.cartItems.reduce((total, item) => total + item.itemPrice, 0);
      await cart.save();
      return res.status(200).json({ message: "Cart updated successfully", cart });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
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

export const removeFromCart = async(req, res) => {
    const { userId } = req.params;
    const { productId, quantity, itemPrice } = req.body;
    try {
        const cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }
        const existingCartItem = cart.cartItems.find((item) => item.productId.toString() === productId);
        if (!existingCartItem) {
            return res.status(404).json({ message: "Product not found in cart" });
        }
        if (existingCartItem.quantity <= quantity) {
            cart.cartItems = cart.cartItems.filter((item) => item.productId.toString() !== productId);
        } else {
            existingCartItem.quantity -= quantity;
        }
        await cart.save();
        res.status(200).json({ message: "Product removed from cart successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const clearCart = async(req, res) => {
    const { userId } = req.params;
    try {
        const cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }
        cart.cartItems = [];
        await cart.save();
        res.status(200).json({ message: "Cart cleared successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}