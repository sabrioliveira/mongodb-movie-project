import movie from "../models/movie.js"

class MovieController {

    static async getAllMovies(req, res) {
        try {
            const moviesList = await movie.find({})
            res.status(200).json(moviesList)
        } catch (e) {
            res.status(500).json({ message: `${e.message} - Error getting movies from database.` })
        }
    }

    static async getMovieById(req, res) {
        try {
            const id = req.params.id
            const movieFound = await movie.findById(id)
            res.status(200).json(movieFound)
        } catch (e) {
            res.status(500).json({ message: `${e.message} - Error getting movie.` })
        }
    }

    static async addMovie(req, res) {
        try {
            const newMovie = await movie.create(req.body)
            res.status(201).json({ message: "Movie created successfully!", movie: newMovie })

        } catch (e) {
            res.status(500).json({ message: `${e.message} - Error adding movie.` })
        }
    }

    static async updateMovie(req, res) {
        try {
            const id = req.params.id
            await movie.findByIdAndUpdate(id, req.body)
            res.status(200).json({ message: "Movie updated successfully!" })
        } catch (e) {
            res.status(500).json({ message: `${e.message} - Error updating movie.` })
        }
    }

    static async deleteMovie(req, res) {
        try {
            const id = req.params.id
            await movie.findByIdAndDelete(id)
            res.status(200).json({ message: "Movie was deleted." })
        } catch (e) {
            res.status(500).json({ message: `${e.message} - Error when deleting movie.` })
        }
    }
}

export default MovieController