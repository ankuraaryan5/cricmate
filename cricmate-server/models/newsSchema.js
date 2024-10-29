import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: null,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model("news", newsSchema);