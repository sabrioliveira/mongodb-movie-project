import express from "express"
import MovieController from "../controllers/movieController.js"

const routes = express.Router()

routes.get("/movies", MovieController.getAllMovies)
routes.get("/movies/:id", MovieController.getMovieById)
routes.post("/movies", MovieController.addMovie)
routes.put("/movies/:id", MovieController.updateMovie)
routes.delete("/movies/:id", MovieController.deleteMovie)

export default routes