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




app.get("/movies/:id", (req, res) => {
    const index = getMovieById(req.params.id)
    res.status(200).json(movies[index])
})

app.post("/movies", (req, res) => {
    movies.push(req.body)
    res.status(201).send("Record created successfully!")
})

app.put("/movies/:id", (req, res) => {
    const index = getMovieById(req.params.id)
    movies[index].title = req.body.title
    res.status(200).json(movies[index])
})

app.delete("/movies/:id", (req, res) => {
    const index = getMovieById(req.params.id)
    movies.splice(index, 1)
    res.status(200).send(`The movie has been deleted`)
})

export default app