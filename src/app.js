import express from 'express'
import dbConnect from './config/dbConnect.js';

const app = express()
app.use(express.json())

const connect = await dbConnect()
connect.on("error", (err) => {
    console.error("Database connection error!", err)
})
connect.once("open", () => {
    console.log("Connection to the database successful!");
})

const movies = []

function getMovieById(id) {
    return movies.findIndex(movie => {
        return movie.id === Number(id)
    })
}

app.get("/", (req, res) => {
    console.log("aaaaaaaaaaaaaaaaa");
    res.status(200).send("xim")
})

app.get("/movies", (req, res) => {
    res.status(200).json(movies)
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