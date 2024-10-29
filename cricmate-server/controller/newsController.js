import News from "../models/newsSchema.js";
export const createNews = async (req, res) => {
    const { title, content, author, image, date } = req.body;

    try {
        const news = await News.create({ title, content, author, image, date });
        res.status(201).json(news);
    } catch (error) {
        res.status(500).json({ message: "Error creating news entry", error });
    }
}

export const getNews = async (req, res) => {
    try {
        const news = await News.find();
        res.status(200).json(news);
    } catch (error) {
        res.status(500).json({ message: "Error fetching news", error });
    }
}

export const updateNews = async (req, res) => {
    const { id } = req.params;
    const { title, content, author, image, date } = req.body;
    try {
        const news = await News.findByIdAndUpdate(
            id,
            { title, content, author, image, date },
            { new: true }
        );
        if (!news) {
            return res.status(404).json({ message: "News not found" });
        }
        res.status(200).json(news);
    } catch (error) {
        console.error("Error updating news:", error);
        res.status(500).json({ message: error.message });
    }
}