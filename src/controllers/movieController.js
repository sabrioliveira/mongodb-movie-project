import movie from "../models/movie.js"

class MovieController {

    static async getAllMovies(req, res) {
        const moviesList = await movie.find({})
        res.status(200).json(moviesList)
    }

    static async addMovie(req, res) {
        try {
            const newMovie = await movie.create(req.body)
            res.status(201).json({ message: "Movie created successfully!", movie: newMovie })

        } catch (err) {
            res.status(500).json({ message: `${err.message} - Failed to add movie.` })
        }
    }

}

export default MovieController