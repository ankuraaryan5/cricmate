import Shop from "../models/shopSchema.js";

export const createShop = async (req, res) => {
    const { name, price, description, image } = req.body;
    const newShop = new Shop({ name, price, description, image });
    try {
        await newShop.save();
        res.status(201).json(newShop);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const getShop = async (req, res) => {
    try {
        const shop = await Shop.find();
        res.status(200).json(shop);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateShop = async (req, res) => {
    const { id } = req.params;
    const { name, price, description, image } = req.body;
    if (!Shop.findById(id)) {
        return res.status(404).json({ message: "Shop not found" });
    }
    const updatedShop = { name, price, description, image };
    Shop.findByIdAndUpdate(id, updatedShop, { new: true })
        .then((updatedShop) => {
            res.status(200).json(updatedShop);
        })
        .catch((error) => {
            res.status(500).json({ message: error.message });
        }); 
}