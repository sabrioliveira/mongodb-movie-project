import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    price: { type: Number }
}, { versionKey: false })

const movie = mongoose.model("movies", movieSchema)

export default movie