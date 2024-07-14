import express from 'express'
import dbConnect from './config/dbConnect.js';
import routes from './routes/index.js'

const app = express()
routes(app)

const connect = await dbConnect()
connect.on("error", (err) => {
    console.error("Database connection error!", err)
})
connect.once("open", () => {
    console.log("Connection to the database successful!");
})



app.delete("/movies/:id", (req, res) => {
    const index = getMovieById(req.params.id)
    movies.splice(index, 1)
    res.status(200).send(`The movie has been deleted`)
})

export default app