import express from "express"
import MovieController from "../controllers/movieController.js"

const routes = express.Router()

routes.get("/movies", MovieController.getAllMovies)

export default routes