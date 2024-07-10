import mongoose from "mongoose";
import "dotenv/config"

async function dbConnect() {
    mongoose.connect(`mongodb+srv://sabrinones:${process.env.MONGOPW}@moviecluster.93qtiui.mongodb.net/cinema?retryWrites=true&w=majority&appName=MovieCluster`)
    return mongoose.connection
}

export default dbConnect